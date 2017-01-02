import {baseResource} from './baseResource';

/**
 * Properties 
 *
 * @constructor Properties
 * @property {IConnector} connector the jira connector instance
 */

export class Properties extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Removes the property from the user identified by the key or by the id. Ths user removing the property is required
     * to have permissions to administer the user.key of the user whose property is to be removedusername of the user whose property is to be removed
     *
     * @method deleteProperty
     * @memberOf Properties#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.propertyKey propertyKey 
     * @param {string} options.userKey userKey key of the user whose property is to be removed
     * @param {string} options.username username username of the user whose property is to be removed
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    deleteProperty = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "propertyKey": args[0],
             "userKey": args[1],
             "username": args[2],
             "token": args[3]
            
        };

        return this.makeRequest('deleteProperty','DELETE','rest/api/2/user/properties/:propertyKey',options,callback)
    };
    
    /**
     * Returns the keys of all properties for the user identified by the key or by the id.key of the user whose properties are to be returnedusername of the user whose properties are to be returned
     *
     * @method getPropertiesKeys
     * @memberOf Properties#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.userKey userKey key of the user whose properties are to be returned
     * @param {string} options.username username username of the user whose properties are to be returned
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getPropertiesKeys = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "userKey": args[0],
             "username": args[1],
             "token": args[2]
            
        };

        return this.makeRequest('getPropertiesKeys','GET','rest/api/2/user/properties',options,callback)
    };
    
    /**
     * Returns the value of the property with a given key from the user identified by the key or by the id. The user who retrieves
     * the property is required to have permissions to read the user.key of the user whose property is to be returnedusername of the user whose property is to be returned
     *
     * @method getProperty
     * @memberOf Properties#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.propertyKey propertyKey 
     * @param {string} options.userKey userKey key of the user whose property is to be returned
     * @param {string} options.username username username of the user whose property is to be returned
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getProperty = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "propertyKey": args[0],
             "userKey": args[1],
             "username": args[2],
             "token": args[3]
            
        };

        return this.makeRequest('getProperty','GET','rest/api/2/user/properties/:propertyKey',options,callback)
    };
    
    /**
     * Sets the value of the specified user's property.
     * 
     * You can use this resource to store a custom data against the user identified by the key or by the id. The user
     * who stores the data is required to have permissions to administer the user.
     * key of the user whose property is to be setusername of the user whose property is to be set
     *
     * @method setProperty
     * @memberOf Properties#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.propertyKey propertyKey 
     * @param {string} options.userKey userKey key of the user whose property is to be set
     * @param {string} options.username username username of the user whose property is to be set
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    setProperty = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "propertyKey": args[0],
             "userKey": args[1],
             "username": args[2],
             "token": args[3]
            
        };

        return this.makeRequest('setProperty','PUT','rest/api/2/user/properties/:propertyKey',options,callback)
    };
    

}
