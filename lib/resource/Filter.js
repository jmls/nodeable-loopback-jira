"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const baseResource_1 = require("./baseResource");
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
         * @return {Promise.<any>} result of api call
         */
        this.addSharePermission = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('addSharePermission', 'POST', 'rest/api/2/filter/:id/permission', options);
        });
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
        this.create = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('create', 'POST', 'rest/api/2/filter', options);
        });
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
        this.defaultColumns = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('defaultColumns', 'GET', 'rest/api/2/filter/:id/columns', options);
        });
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
        this.deleteById = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('deleteById', 'DELETE', 'rest/api/2/filter/:id', options);
        });
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
        this.deleteSharePermission = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('deleteSharePermission', 'DELETE', 'rest/api/2/filter/:id/permission/:permission-id', options);
        });
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
        this.editFilter = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('editFilter', 'PUT', 'rest/api/2/filter/:id', options);
        });
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
        this.findById = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('findById', 'GET', 'rest/api/2/filter/:id', options);
        });
        /**
         * Returns the default share scope of the logged-in user.
         *
         * @method getDefaultShareScope
         * @memberOf Filter#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getDefaultShareScope = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getDefaultShareScope', 'GET', 'rest/api/2/filter/defaultShareScope', options);
        });
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
        this.getFavouriteFilters = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getFavouriteFilters', 'GET', 'rest/api/2/filter/favourite', options);
        });
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
        this.getSharePermission = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getSharePermission', 'GET', 'rest/api/2/filter/:id/permission/:permissionId', options);
        });
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
        this.getSharePermissions = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getSharePermissions', 'GET', 'rest/api/2/filter/:id/permission', options);
        });
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
        this.resetColumns = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('resetColumns', 'DELETE', 'rest/api/2/filter/:id/columns', options);
        });
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
        this.setColumns = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('setColumns', 'PUT', 'rest/api/2/filter/:id/columns', options);
        });
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
        this.setDefaultShareScope = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('setDefaultShareScope', 'PUT', 'rest/api/2/filter/defaultShareScope', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.Filter = Filter;
