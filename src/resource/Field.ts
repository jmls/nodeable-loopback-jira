import {baseResource} from './baseResource';

/**
 * Field 
 *
 * @constructor Field
 * @property {IConnector} connector the jira connector instance
 */

export class Field extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Creates a custom field using a definition (object encapsulating custom field data)
     *
     * @method createCustomField
     * @memberOf Field#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.name name 
     * @param {string} options.description description 
     * @param {string} options.type type 
     * @param {string} options.searcherKey searcherKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    createCustomField = async options => {

        return this.makeRequest('createCustomField','POST','rest/api/2/field',options)
    };
    
    /**
     * Returns a list of all fields, both System and Custom
     *
     * @method getFields
     * @memberOf Field#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getFields = async options => {

        return this.makeRequest('getFields','GET','rest/api/2/field',options)
    };
    

}
