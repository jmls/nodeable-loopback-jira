const debug = require('debug')('loopback:connector:jira.jira-connector');

// load all the generated resources
import * as resources from './resource';

import request = require('request-promise-native');
const changeCase = require('change-case');

debug('preparing initialize function');

module.exports = class JiraConnector implements IConnector {
    jira: any;
    _models: Object;
    settings: IJiraConfig;
    request: any;
    name: string;
    resource: any;
    modelToJira: Map<string, string>;
    baseUrl: string;
    DataAccessObject: any;
    prefix: string;

    /**
     * jira class constructor
     * @param {IJiraConfig} [settings] settings used by the connector
     */

    constructor(app: any, settings: IJiraConfig) {
        debug('instantiating jira class');

        this._models = {};
        this.settings = settings;
        this.request = settings.request || request;
        this.name = settings.name || '';
        this.prefix = settings.prefix || 'Jira';
        this.resource = {};
        this.baseUrl = `${settings.protocol || 'https'}://${settings.host ||
            'jira:8080'}`;

        // loop through all the resources, creating a model for each one

        Object.keys(resources).forEach(key => {
            debug('loading model', key);
            let jiraModelName = changeCase.pascalCase(`${this.prefix}${key}`);
            let Model = app.loopback.createModel(
                jiraModelName,
                {},
                { base: 'Model', jiraModelName: key }
            );

            let jiraName = key;

            this.resource[jiraName] = new resources[jiraName](
                this,
                Model,
                this.settings
            );

            app.model(Model, {
                public: this.resource[jiraName].definition.public,
                dataSource: false
            });
        });

        debug('jira loaded');
    }

    /**
     * login a user and get a sessionId
     * @param {Object} options An object containing options to pass to the login API.
     * @param {string} options.username The user name
     * @param {string} options.password The user password
     */

    login = async (options: any = {}) => {
        debug('login');

        const result = await this.makeRequest({
            method: 'POST',
            path: 'rest/auth/1/session',
            ignoreAuth: true,
            body: options
        }).catch(e => {
            debug('unable to login', e);
            throw e;
        });

        const jiraAuth = Buffer.from(
            `${options.username}:${options.password}`,
            'utf8'
        ).toString('base64');

        const user = await this.resource.User.findById({
            username: options.username,
            expand: 'groups',
            token: jiraAuth
        }).catch(e => {
            debug('unable to login, cannot find user', e);
            throw e;
        });

        const tokenData = {
            key: user.key,
            name: user.name,
            emailAddress: user.emailAddress,
            displayName: user.displayName,
            applicationRoles: user.applicationRoles,
            groups: user.groups,
            jiraAuth
        };
        return tokenData;
    };

    /**
     * logout a user
     * @param {string} username the user name
     */

    logout = async (username: string) => {
        debug('logout not implemented');

        return;
    };

    /**
     * make a request to the jira host
     * @param {object} requestOptions the request options
     * @param {function} [callback] The callback function
     */

    makeRequest = async (requestOptions: any = {}) => {
        // require('request-debug')(this.request)
        debug(`makeRequest`, requestOptions);

        let requestOpts: any = {
            method: requestOptions.method,
            json: true,
            followAllRedirects: true,
            body: requestOptions.body,
            qs: requestOptions.qs,
            headers: {},
            uri: `${this.baseUrl}/${requestOptions.path}`,
            resolveWithFullResponse: true
        };

        if (requestOptions.tokenRequired) {
            if (!requestOptions.token) {
                let err = { statusCode: 401, message: 'no token supplied' };
                return Promise.reject(err);
            }

            requestOpts.headers.cookie = `${requestOptions.token}`;
        }

        const response = await this.request(requestOpts).catch(e => {
            debug('request error', e);
            throw e;
        });

        if (response.statusCode > 299 || response.statusCode < 200) {
            debug('response statusCode error', response);
            throw new Error('response failed');
        }

        return response.body;
    };
};
