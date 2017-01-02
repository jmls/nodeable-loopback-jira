"use strict";
const baseResource_1 = require('./baseResource');
/**
 * Filter Resource for searches.
 *
 * @constructor Filter
 * @property {IConnector} connector the jira connector instance
 */
class Filter extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
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
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.addSharePermission = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "id": args[0],
                "data": args[1]
            };
            return this.makeRequest('addSharePermission', 'POST', 'rest/api/2/filter/:id/permission', options, callback);
        };
        /**
         * Creates a new filter, and returns newly created filter.
         * Currently sets permissions just using the users default sharing permissionsthe parameters to expand
         *
         * @method create
         * @memberOf Filter#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.expand expand the parameters to expand
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.create = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "expand": args[0],
                "token": args[1]
            };
            return this.makeRequest('create', 'POST', 'rest/api/2/filter', options, callback);
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
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.defaultColumns = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "id": args[0],
                "token": args[1]
            };
            return this.makeRequest('defaultColumns', 'GET', 'rest/api/2/filter/:id/columns', options, callback);
        };
        /**
         * Delete a filter.
         *
         * @method deleteById
         * @memberOf Filter#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.deleteById = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "id": args[0],
                "token": args[1]
            };
            return this.makeRequest('deleteById', 'DELETE', 'rest/api/2/filter/:id', options, callback);
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
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.deleteSharePermission = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "id": args[0],
                "permission-id": args[1],
                "token": args[2]
            };
            return this.makeRequest('deleteSharePermission', 'DELETE', 'rest/api/2/filter/:id/permission/:permission-id', options, callback);
        };
        /**
         * Updates an existing filter, and returns its new value.the parameters to expand
         *
         * @method editFilter
         * @memberOf Filter#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.expand expand the parameters to expand
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.editFilter = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "id": args[0],
                "expand": args[1],
                "token": args[2]
            };
            return this.makeRequest('editFilter', 'PUT', 'rest/api/2/filter/:id', options, callback);
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
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.findById = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "id": args[0],
                "expand": args[1],
                "token": args[2]
            };
            return this.makeRequest('findById', 'GET', 'rest/api/2/filter/:id', options, callback);
        };
        /**
         * Returns the default share scope of the logged-in user.
         *
         * @method getDefaultShareScope
         * @memberOf Filter#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getDefaultShareScope = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "token": args[0]
            };
            return this.makeRequest('getDefaultShareScope', 'GET', 'rest/api/2/filter/defaultShareScope', options, callback);
        };
        /**
         * Returns the favourite filters of the logged-in user.the parameters to expand
         *
         * @method getFavouriteFilters
         * @memberOf Filter#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.expand expand the parameters to expand
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getFavouriteFilters = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "expand": args[0],
                "token": args[1]
            };
            return this.makeRequest('getFavouriteFilters', 'GET', 'rest/api/2/filter/favourite', options, callback);
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
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getSharePermission = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "id": args[0],
                "permissionId": args[1],
                "token": args[2]
            };
            return this.makeRequest('getSharePermission', 'GET', 'rest/api/2/filter/:id/permission/:permissionId', options, callback);
        };
        /**
         * Returns all share permissions of the given filter.
         *
         * @method getSharePermissions
         * @memberOf Filter#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getSharePermissions = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "id": args[0],
                "token": args[1]
            };
            return this.makeRequest('getSharePermissions', 'GET', 'rest/api/2/filter/:id/permission', options, callback);
        };
        /**
         * Resets the columns for the given filter such that the filter no longer has its own column config.
         *
         * @method resetColumns
         * @memberOf Filter#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.resetColumns = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "id": args[0],
                "token": args[1]
            };
            return this.makeRequest('resetColumns', 'DELETE', 'rest/api/2/filter/:id/columns', options, callback);
        };
        /**
         * Sets the default columns for the given filter.
         *
         * @method setColumns
         * @memberOf Filter#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.setColumns = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "id": args[0],
                "token": args[1]
            };
            return this.makeRequest('setColumns', 'PUT', 'rest/api/2/filter/:id/columns', options, callback);
        };
        /**
         * Sets the default share scope of the logged-in user. Available values are GLOBAL and PRIVATE.
         *
         * @method setDefaultShareScope
         * @memberOf Filter#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.scope scope
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.setDefaultShareScope = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "data": args[0]
            };
            return this.makeRequest('setDefaultShareScope', 'PUT', 'rest/api/2/filter/defaultShareScope', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Filter = Filter;
