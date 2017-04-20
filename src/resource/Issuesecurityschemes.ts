import {baseResource} from './baseResource';

/**
 * Issuesecurityschemes REST resource that allows to view security schemes defined in the product.
 *
 * @constructor Issuesecurityschemes
 * @property {IConnector} connector the jira connector instance
 */

export class Issuesecurityschemes extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns the issue security scheme along with that are defined.
     *
     * @method getIssueSecurityScheme
     * @memberOf Issuesecurityschemes#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getIssueSecurityScheme = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getIssueSecurityScheme','GET','rest/api/2/issuesecurityschemes/:id',options,callback)
    };
    
    /**
     * Returns all issue security schemes that are defined.
     *
     * @method getIssueSecuritySchemes
     * @memberOf Issuesecurityschemes#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getIssueSecuritySchemes = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getIssueSecuritySchemes','GET','rest/api/2/issuesecurityschemes',options,callback)
    };
    

}
