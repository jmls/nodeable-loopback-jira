import {baseResource} from './baseResource';

/**
 * Mypreferences Provide preferences of the currently logged in user.
 *
 * @constructor Mypreferences
 * @property {IConnector} connector the jira connector instance
 */

export class Mypreferences extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns preference of the currently logged in user. Preference key must be provided as input parameter (key). The
     * value is returned exactly as it is. If key parameter is not provided or wrong - status code 404. If value is
     * found  - status code 200.- key of the preference to be returned.
     *
     * @method getPreference
     * @memberOf Mypreferences#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.key key - key of the preference to be returned.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getPreference = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "key": args[0],
             "token": args[1]
            
        };

        return this.makeRequest('getPreference','GET','rest/api/2/mypreferences',options,callback)
    };
    
    /**
     * Removes preference of the currently logged in user. Preference key must be provided as input parameters (key). If
     * key parameter is not provided or wrong - status code 404. If preference is unset - status code 204.- key of the preference to be removed.
     *
     * @method removePreference
     * @memberOf Mypreferences#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.key key - key of the preference to be removed.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    removePreference = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "key": args[0],
             "token": args[1]
            
        };

        return this.makeRequest('removePreference','DELETE','rest/api/2/mypreferences',options,callback)
    };
    
    /**
     * Sets preference of the currently logged in user. Preference key must be provided as input parameters (key). Value
     * must be provided as post body. If key or value parameter is not provided - status code 404. If preference is set
     * - status code 204.- key of the preference to be set.
     *
     * @method setPreference
     * @memberOf Mypreferences#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.key key - key of the preference to be set.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    setPreference = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "key": args[0],
             "token": args[1]
            
        };

        return this.makeRequest('setPreference','PUT','rest/api/2/mypreferences',options,callback)
    };
    

}
