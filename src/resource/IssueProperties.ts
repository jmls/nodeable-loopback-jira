import {baseResource} from './baseResource';

/**
 * IssueProperties 
 *
 * @constructor IssueProperties
 * @property {IConnector} connector the jira connector instance
 */

export class IssueProperties extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Removes the property from the issue identified by the key or by the id. Ths user removing the property is required
     * to have permissions to edit the issue.
     *
     * @method deleteProperty
     * @memberOf IssueProperties#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.propertyKey propertyKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    deleteProperty = async options => {

        return this.makeRequest('deleteProperty','DELETE','rest/api/2/issue/:issueIdOrKey/properties/:propertyKey',options)
    };
    
    /**
     * Returns the keys of all properties for the issue identified by the key or by the id.
     *
     * @method getPropertiesKeys
     * @memberOf IssueProperties#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getPropertiesKeys = async options => {

        return this.makeRequest('getPropertiesKeys','GET','rest/api/2/issue/:issueIdOrKey/properties',options)
    };
    
    /**
     * Returns the value of the property with a given key from the issue identified by the key or by the id. The user who retrieves
     * the property is required to have permissions to read the issue.
     *
     * @method getProperty
     * @memberOf IssueProperties#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.propertyKey propertyKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getProperty = async options => {

        return this.makeRequest('getProperty','GET','rest/api/2/issue/:issueIdOrKey/properties/:propertyKey',options)
    };
    
    /**
     * Sets the value of the specified issue's property.
     * 
     * You can use this resource to store a custom data against the issue identified by the key or by the id. The user
     * who stores the data is required to have permissions to edit the issue.
     * 
     *
     * @method setProperty
     * @memberOf IssueProperties#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.propertyKey propertyKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    setProperty = async options => {

        return this.makeRequest('setProperty','PUT','rest/api/2/issue/:issueIdOrKey/properties/:propertyKey',options)
    };
    

}
