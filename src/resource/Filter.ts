import {baseResource} from './baseResource';

/**
 * Filter Resource for searches.
 *
 * @constructor Filter
 * @property {IConnector} connector the jira connector instance
 */

export class Filter extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Adds a share permissions to the given filter. Adding a global permission removes all previous permissions from the filter.
     *
     * @method addSharePermission
     * @memberOf Filter#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.type type 
     * @param {string} options.projectId projectId 
     * @param {string} options.groupname groupname 
     * @param {string} options.projectRoleId projectRoleId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    addSharePermission = async options => {

        return this.makeRequest('addSharePermission','POST','rest/api/2/filter/:id/permission',options)
    };
    
    /**
     * Creates a new filter, and returns newly created filter.
     * Currently sets permissions just using the users default sharing permissionsthe parameters to expand
     *
     * @method create
     * @memberOf Filter#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.expand expand the parameters to expand
     * @param {string} options.id id 
     * @param {string} options.name name 
     * @param {string} options.description description 
     * @param {string} options.owner owner 
     * @param {string} options.jql jql 
     * @param {string} options.viewUrl viewUrl 
     * @param {string} options.searchUrl searchUrl 
     * @param {string} options.favourite favourite 
     * @param {string} options.sharePermissions sharePermissions 
     * @param {string} options.sharedUsers sharedUsers 
     * @param {string} options.subscriptions subscriptions 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    create = async options => {

        return this.makeRequest('create','POST','rest/api/2/filter',options)
    };
    
    /**
     * Returns the default columns for the given filter. Currently logged in user will be used as
     * the user making such request.
     *
     * @method defaultColumns
     * @memberOf Filter#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    defaultColumns = async options => {

        return this.makeRequest('defaultColumns','GET','rest/api/2/filter/:id/columns',options)
    };
    
    /**
     * Delete a filter.
     *
     * @method deleteById
     * @memberOf Filter#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    deleteById = async options => {

        return this.makeRequest('deleteById','DELETE','rest/api/2/filter/:id',options)
    };
    
    /**
     * Removes a share permissions from the given filter.
     *
     * @method deleteSharePermission
     * @memberOf Filter#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.permission-id permission-id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    deleteSharePermission = async options => {

        return this.makeRequest('deleteSharePermission','DELETE','rest/api/2/filter/:id/permission/:permission-id',options)
    };
    
    /**
     * Updates an existing filter, and returns its new value.the parameters to expand
     *
     * @method editFilter
     * @memberOf Filter#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.expand expand the parameters to expand
     * @param {string} options.id id 
     * @param {string} options.name name 
     * @param {string} options.description description 
     * @param {string} options.owner owner 
     * @param {string} options.jql jql 
     * @param {string} options.viewUrl viewUrl 
     * @param {string} options.searchUrl searchUrl 
     * @param {string} options.favourite favourite 
     * @param {string} options.sharePermissions sharePermissions 
     * @param {string} options.sharedUsers sharedUsers 
     * @param {string} options.subscriptions subscriptions 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    editFilter = async options => {

        return this.makeRequest('editFilter','PUT','rest/api/2/filter/:id',options)
    };
    
    /**
     * Returns a filter given an idthe parameters to expand
     *
     * @method findById
     * @memberOf Filter#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.expand expand the parameters to expand
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    findById = async options => {

        return this.makeRequest('findById','GET','rest/api/2/filter/:id',options)
    };
    
    /**
     * Returns the default share scope of the logged-in user.
     *
     * @method getDefaultShareScope
     * @memberOf Filter#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getDefaultShareScope = async options => {

        return this.makeRequest('getDefaultShareScope','GET','rest/api/2/filter/defaultShareScope',options)
    };
    
    /**
     * Returns the favourite filters of the logged-in user.the parameters to expand
     *
     * @method getFavouriteFilters
     * @memberOf Filter#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.expand expand the parameters to expand
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getFavouriteFilters = async options => {

        return this.makeRequest('getFavouriteFilters','GET','rest/api/2/filter/favourite',options)
    };
    
    /**
     * Returns a single share permission of the given filter.
     *
     * @method getSharePermission
     * @memberOf Filter#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.permissionId permissionId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getSharePermission = async options => {

        return this.makeRequest('getSharePermission','GET','rest/api/2/filter/:id/permission/:permissionId',options)
    };
    
    /**
     * Returns all share permissions of the given filter.
     *
     * @method getSharePermissions
     * @memberOf Filter#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getSharePermissions = async options => {

        return this.makeRequest('getSharePermissions','GET','rest/api/2/filter/:id/permission',options)
    };
    
    /**
     * Resets the columns for the given filter such that the filter no longer has its own column config.
     *
     * @method resetColumns
     * @memberOf Filter#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    resetColumns = async options => {

        return this.makeRequest('resetColumns','DELETE','rest/api/2/filter/:id/columns',options)
    };
    
    /**
     * Sets the default columns for the given filter.
     *
     * @method setColumns
     * @memberOf Filter#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    setColumns = async options => {

        return this.makeRequest('setColumns','PUT','rest/api/2/filter/:id/columns',options)
    };
    
    /**
     * Sets the default share scope of the logged-in user. Available values are GLOBAL and PRIVATE.
     *
     * @method setDefaultShareScope
     * @memberOf Filter#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.scope scope 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    setDefaultShareScope = async options => {

        return this.makeRequest('setDefaultShareScope','PUT','rest/api/2/filter/defaultShareScope',options)
    };
    

}
