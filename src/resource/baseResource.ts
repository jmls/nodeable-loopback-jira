import {Validator} from '../validator';

const validation = new Validator();
const debug = require('debug')('loopback:connector:jira.resource.baseResource');
const _ = require('lodash');
const UrlPattern = require('url-pattern');
const api = require(`./definition/api`);
const path = require('path');

function getToken(ctx) {
    let req = ctx.req;

    if (req.headers && req.headers.authorization) {
        let parts = req.headers.authorization.split(' ');

        if (parts.length !== 2 || !/^Bearer$/i.test(parts[0])) {
             return null;
        }

        return parts[1];
    } else {
        if (req.query && req.query.access_token) {
            return req.query.access_token;
        }
    }
}

/**
 * Represents a base class for all jira resources
 *
 * @constructor baseResource
 * @param settings The information needed to setup the resource
 * @param {string} settings.name The name of jira model.
 * @param {*} settings.request The request function to use.
 * @param {jiraApi} settings.jiraApi The jiraApi library to use.
 */
export class baseResource implements IResource {
    name: string;
    connector:IConnector;
    apiPath:string;
    methods:any;
    modelMethods:any;
    model: any;
    definition: any;
    settings:any;
    jiraModelName:string;

    /**
     * loadCustom
     * try to load custom definitions from a file. the definitions are applied in "method <- nodeable <- custom" order
     * so that an end-user can override the standard (generated) defaults and the nodeable defaults
     * @param {string} fileName The name of the definition to load
     * @return {Object} the json data in the file (if it exists) or an empty object {}
     */

     static loadCustom = (file:string) => {

         let override = {
             methods: {}
         };

         if (!file) {
             return {};
         }

         let fileName = path.resolve(file);

        // try to load the override definitions

        try {
            override = require(fileName);
            override.methods = override.methods || {};
        }

        catch(e) {
            if (e.code !== 'MODULE_NOT_FOUND') {
                console.log("ERROR: unable to process custom model definition %s",fileName,e);
            }
        }

        return override;
     }


    /**
     * loadDefinition
     * each model can have a defintion file that overrides the generated settings in api.json
     * for example, the strongloop remote api path can be changed to something more suitable
     *
     * @param {string} settings.name The name of jira model.
     */

    static loadDefinition = (modelName:string,customFolder:string) => {

        let definition = api[modelName];

        // special case for User - we want to merge the login / logout methods from Session into the User model

        if (modelName === "User") {
            let sessionApi = api['Session'];

            Object.keys(sessionApi.methods).forEach((key) => {
                let method = sessionApi.methods[key];

                if (method.name === 'currentUser') {
                    return;
                }

                definition.methods[method.name] = method;
            });
        }

        let custom = _.merge(
            {},
            baseResource.loadCustom(`./definition/${modelName}`),
            customFolder ? baseResource.loadCustom(`${customFolder}/${modelName}`) : null
        );

        _.merge(definition,custom);

        // default the model visibility to true

        Object.keys(definition.methods).forEach((key) => {
            let method = definition.methods[key];

            method.tokenRequired = ('tokenRequired' in method) ? method.tokenRequired : true;

            method.public = ('public' in method) ? method.public : true;

            if (!method.public) {
                return;
            }

            let remoteMethod = {
                accepts: [],
                name: method.name,
                description: method.description,
                notes: method.details ? method.details.split('\n') : null,

                http: {
                    verb: method.verb,
                    path: method.path
                },

                returns: {arg: 'data', type: method.responseType ,root: true}
            };

            // run through all parameters, building up an `accepts` array
            let params = [...method.urlParams,...method.queryParams];

            if (method.schema.length > 0) {
                params.push({arg: "data", name: "data",type: 'object', http: { source: 'body' }});
            } else {
                if (method.tokenRequired) {
                    params.push({ arg: "token", type: "string", http: getToken});
                }
            }

            params.forEach((param) => {
                remoteMethod.accepts.push({arg: param.name || param.arg, name: param.name || param.arg, type: param.type, description: param.description, http: param.http});
            });

            definition.methods[method.name].remoteMethod = remoteMethod;
        });

        return definition;
    }

    constructor (connector:IConnector,Model:any,settings:any) {
        this.name = Model.modelName;
        this.model = Model;
        this.settings = settings;
        this.jiraModelName = this.model.settings.jiraModelName;

        this.definition = baseResource.loadDefinition(this.jiraModelName,this.settings.customFolder);

        this.definition.public = ('public' in this.definition) ? this.definition.public : this.settings.public || false;

        this.connector = connector;
    }

    /**
     * register
     * registers all the api methods with the model
     */

    register = ():void => {

        // "this.methods" is defined in the class itself

        Object.keys(this.definition.methods).forEach((key) => {

            let method = this.definition.methods[key].remoteMethod;

            if (!method) {
                return;
            }

            if (key === "login" || key === "logout") {
                this.model[key] = this.connector[key];
            } else {
                this.model[key] = this[key];
            }

            this.model.remoteMethod(key,method);
        });

    }

    /**
     * makeRequest
     * construct an http request based on the method definitions
     * @param {string} method The method to use
     * @param {string} verb The http method to use (GET , PUT etc)
     * @param {string} url The method api url
     * @param {Object} options The data to send in the request
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    makeRequest = (method:string,verb:string,url:string,options:any = {}, callback:Function):Promise<any> => {

        let methodDefinition = this.definition.methods[method];
        let path;

        let pattern = new UrlPattern(url);

        // check out validations before making the request

        if (methodDefinition.rules) {
            let result = validation.validate(options,methodDefinition.rules);

            if (result !== true) {
                let err = { statusCode: 422, message: result};
                return callback ? callback(err) : Promise.reject(err);
            }
        }

        // fill path with appropriate variables

        try {
            path = pattern.stringify(options);
        }

        catch(e) {
            let err = { statusCode: 422, message: e.message};
            return callback ? callback(err) : Promise.reject(err);
        }

        let token = options.token;

        delete options.token;

        let requestData:any = {
             method: verb,
             token,
             path,
             qs: {},
             body: {},
             tokenRequired: methodDefinition.tokenRequired
        }

        methodDefinition.queryParams.forEach((param) => {
            if (param.name in options) {
                requestData.qs[param.name] = options[param.name];
            }
        });

        methodDefinition.schema.forEach((param) => {
            if (param.name in options) {
                requestData.body[param.name] = options[param.name];
            }
        });

        if (requestData.body === {}) {
            delete requestData.body;
        }

        if (requestData.qs === {}) {
            delete requestData.qs;
        }

        requestData._description = methodDefinition.description;

        return this.connector.makeRequest(requestData, callback);
    }

}
