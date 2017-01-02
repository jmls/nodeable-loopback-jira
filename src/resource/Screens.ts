import {baseResource} from './baseResource';

/**
 * Screens 
 *
 * @constructor Screens
 * @property {IConnector} connector the jira connector instance
 */

export class Screens extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Adds field to the given tab.
     *
     * @method addField
     * @memberOf Screens#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.screenId screenId 
     * @param {string} options.tabId tabId 
     * @param {string} options.fieldId fieldId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    addField = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "screenId": args[0],
             "tabId": args[1],
             "data": args[2]
            
        };

        return this.makeRequest('addField','POST','rest/api/2/screens/:screenId/tabs/:tabId/fields',options,callback)
    };
    
    /**
     * Adds field or custom field to the default tab
     *
     * @method addFieldToDefaultScreen
     * @memberOf Screens#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.fieldId fieldId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    addFieldToDefaultScreen = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "fieldId": args[0],
             "token": args[1]
            
        };

        return this.makeRequest('addFieldToDefaultScreen','POST','rest/api/2/screens/addToDefault/:fieldId',options,callback)
    };
    
    /**
     * Creates tab for given screen
     *
     * @method addTab
     * @memberOf Screens#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.screenId screenId 
     * @param {string} options.id id 
     * @param {string} options.name name 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    addTab = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "screenId": args[0],
             "data": args[1]
            
        };

        return this.makeRequest('addTab','POST','rest/api/2/screens/:screenId/tabs',options,callback)
    };
    
    /**
     * Deletes tab to give screen
     *
     * @method deleteTab
     * @memberOf Screens#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.screenId screenId 
     * @param {string} options.tabId tabId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    deleteTab = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "screenId": args[0],
             "tabId": args[1],
             "token": args[2]
            
        };

        return this.makeRequest('deleteTab','DELETE','rest/api/2/screens/:screenId/tabs/:tabId',options,callback)
    };
    
    /**
     * Gets all fields for a given tabthe key of the project; this parameter is optional
     *
     * @method getAllFields
     * @memberOf Screens#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.screenId screenId 
     * @param {string} options.tabId tabId 
     * @param {string} options.projectKey projectKey the key of the project; this parameter is optional
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getAllFields = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "screenId": args[0],
             "tabId": args[1],
             "projectKey": args[2],
             "token": args[3]
            
        };

        return this.makeRequest('getAllFields','GET','rest/api/2/screens/:screenId/tabs/:tabId/fields',options,callback)
    };
    
    /**
     * Returns a list of all tabs for the given screenthe key of the project; this parameter is optional
     *
     * @method getAllTabs
     * @memberOf Screens#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.screenId screenId 
     * @param {string} options.projectKey projectKey the key of the project; this parameter is optional
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getAllTabs = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "screenId": args[0],
             "projectKey": args[1],
             "token": args[2]
            
        };

        return this.makeRequest('getAllTabs','GET','rest/api/2/screens/:screenId/tabs',options,callback)
    };
    
    /**
     * Gets available fields for screen. i.e ones that haven't already been added.
     *
     * @method getFieldsToAdd
     * @memberOf Screens#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.screenId screenId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getFieldsToAdd = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "screenId": args[0],
             "token": args[1]
            
        };

        return this.makeRequest('getFieldsToAdd','GET','rest/api/2/screens/:screenId/availableFields',options,callback)
    };
    
    /**
     * Moves field on the given tab
     *
     * @method moveField
     * @memberOf Screens#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.screenId screenId 
     * @param {string} options.tabId tabId 
     * @param {string} options.id id 
     * @param {string} options.after after 
     * @param {string} options.position position 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    moveField = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "screenId": args[0],
             "tabId": args[1],
             "id": args[2],
             "data": args[3]
            
        };

        return this.makeRequest('moveField','POST','rest/api/2/screens/:screenId/tabs/:tabId/fields/:id/move',options,callback)
    };
    
    /**
     * Moves tab position
     *
     * @method moveTab
     * @memberOf Screens#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.screenId screenId 
     * @param {string} options.tabId tabId 
     * @param {string} options.pos pos 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    moveTab = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "screenId": args[0],
             "tabId": args[1],
             "pos": args[2],
             "token": args[3]
            
        };

        return this.makeRequest('moveTab','POST','rest/api/2/screens/:screenId/tabs/:tabId/move/:pos',options,callback)
    };
    
    /**
     * Removes field from given tab
     *
     * @method removeField
     * @memberOf Screens#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.screenId screenId 
     * @param {string} options.tabId tabId 
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    removeField = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "screenId": args[0],
             "tabId": args[1],
             "id": args[2],
             "token": args[3]
            
        };

        return this.makeRequest('removeField','DELETE','rest/api/2/screens/:screenId/tabs/:tabId/fields/:id',options,callback)
    };
    
    /**
     * Renames tab on given screen
     *
     * @method renameTab
     * @memberOf Screens#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.screenId screenId 
     * @param {string} options.tabId tabId 
     * @param {string} options.id id 
     * @param {string} options.name name 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    renameTab = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "screenId": args[0],
             "tabId": args[1],
             "data": args[2]
            
        };

        return this.makeRequest('renameTab','PUT','rest/api/2/screens/:screenId/tabs/:tabId',options,callback)
    };
    

}
