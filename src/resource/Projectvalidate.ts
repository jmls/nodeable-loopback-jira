import {baseResource} from './baseResource';

/**
 * Projectvalidate 
 *
 * @constructor Projectvalidate
 * @property {IConnector} connector the jira connector instance
 */

export class Projectvalidate extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Validates a project key.the project key
     *
     * @method getProject
     * @memberOf Projectvalidate#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.key key the project key
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getProject = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getProject','GET','rest/api/2/projectvalidate/key',options,callback)
    };
    

}
