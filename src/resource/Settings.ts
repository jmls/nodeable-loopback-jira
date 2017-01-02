import {baseResource} from './baseResource';

/**
 * Settings REST resource for changing the JIRA system settings
 *
 * @constructor Settings
 * @property {IConnector} connector the jira connector instance
 */

export class Settings extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns the default system columns for issue navigator. Admin permission will be required.
     *
     * @method getIssueNavigatorDefaultColumns
     * @memberOf Settings#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getIssueNavigatorDefaultColumns = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "token": args[0]
            
        };

        return this.makeRequest('getIssueNavigatorDefaultColumns','GET','rest/api/2/settings/columns',options,callback)
    };
    
    /**
     * Sets the base URL that is configured for this JIRA instance.
     *
     * @method setBaseURL
     * @memberOf Settings#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    setBaseURL = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "token": args[0]
            
        };

        return this.makeRequest('setBaseURL','PUT','rest/api/2/settings/baseUrl',options,callback)
    };
    
    /**
     * Sets the default system columns for issue navigator. Admin permission will be required.
     *
     * @method setIssueNavigatorDefaultColumns
     * @memberOf Settings#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    setIssueNavigatorDefaultColumns = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "token": args[0]
            
        };

        return this.makeRequest('setIssueNavigatorDefaultColumns','PUT','rest/api/2/settings/columns',options,callback)
    };
    

}
