import {baseResource} from './baseResource';

/**
 * IssueLinkType Rest resource to retrieve a list of issue link types.
 *
 * @constructor IssueLinkType
 * @property {IConnector} connector the jira connector instance
 */

export class IssueLinkType extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Create a new issue link type.
     *
     * @method create
     * @memberOf IssueLinkType#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.name name 
     * @param {string} options.inward inward 
     * @param {string} options.outward outward 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    create = async options => {

        return this.makeRequest('create','POST','rest/api/2/issueLinkType',options)
    };
    
    /**
     * Delete the specified issue link type.
     *
     * @method deleteById
     * @memberOf IssueLinkType#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueLinkTypeId issueLinkTypeId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    deleteById = async options => {

        return this.makeRequest('deleteById','DELETE','rest/api/2/issueLinkType/:issueLinkTypeId',options)
    };
    
    /**
     * Returns for a given issue link type id all information about this issue link type.
     *
     * @method findById
     * @memberOf IssueLinkType#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueLinkTypeId issueLinkTypeId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    findById = async options => {

        return this.makeRequest('findById','GET','rest/api/2/issueLinkType/:issueLinkTypeId',options)
    };
    
    /**
     * Returns a list of available issue link types, if issue linking is enabled.
     * Each issue link type has an id, a name and a label for the outward and inward link relationship.
     *
     * @method getIssueLinkTypes
     * @memberOf IssueLinkType#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getIssueLinkTypes = async options => {

        return this.makeRequest('getIssueLinkTypes','GET','rest/api/2/issueLinkType',options)
    };
    
    /**
     * Update the specified issue link type.
     *
     * @method update
     * @memberOf IssueLinkType#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueLinkTypeId issueLinkTypeId 
     * @param {string} options.id id 
     * @param {string} options.name name 
     * @param {string} options.inward inward 
     * @param {string} options.outward outward 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    update = async options => {

        return this.makeRequest('update','PUT','rest/api/2/issueLinkType/:issueLinkTypeId',options)
    };
    

}
