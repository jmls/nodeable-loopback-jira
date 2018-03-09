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
 * Permissionscheme
 *
 * @constructor Permissionscheme
 * @property {IConnector} connector the jira connector instance
 */
class Permissionscheme extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Creates a permission grant in a permission scheme.
         *
         * @method createPermissionGrant
         * @memberOf Permissionscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.schemeId schemeId
         * @param {string} options.expand expand
         * @param {string} options.holder holder
         * @param {string} options.permission permission
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.createPermissionGrant = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('createPermissionGrant', 'POST', 'rest/api/2/permissionscheme/:schemeId/permission', options);
        });
        /**
         * Create a new permission scheme.
         * This method can create schemes with a defined permission set, or without.
         *
         * @method createPermissionScheme
         * @memberOf Permissionscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.expand expand
         * @param {string} options.name name
         * @param {string} options.description description
         * @param {string} options.permissions permissions
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.createPermissionScheme = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('createPermissionScheme', 'POST', 'rest/api/2/permissionscheme', options);
        });
        /**
         * Deletes a permission scheme identified by the given id.
         *
         * @method deletePermissionScheme
         * @memberOf Permissionscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.schemeId schemeId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.deletePermissionScheme = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('deletePermissionScheme', 'DELETE', 'rest/api/2/permissionscheme/:schemeId', options);
        });
        /**
         * Deletes a permission grant from a permission scheme.
         *
         * @method deletePermissionSchemeEntity
         * @memberOf Permissionscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.schemeId schemeId
         * @param {string} options.permissionId permissionId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.deletePermissionSchemeEntity = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('deletePermissionSchemeEntity', 'DELETE', 'rest/api/2/permissionscheme/:schemeId/permission/:permissionId', options);
        });
        /**
         * Returns a permission scheme identified by the given id.
         *
         * @method getPermissionScheme
         * @memberOf Permissionscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.schemeId schemeId
         * @param {string} options.expand expand
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getPermissionScheme = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getPermissionScheme', 'GET', 'rest/api/2/permissionscheme/:schemeId', options);
        });
        /**
         * Returns a permission grant identified by the given id.
         *
         * @method getPermissionSchemeGrant
         * @memberOf Permissionscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.schemeId schemeId
         * @param {string} options.permissionId permissionId
         * @param {string} options.expand expand
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getPermissionSchemeGrant = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getPermissionSchemeGrant', 'GET', 'rest/api/2/permissionscheme/:schemeId/permission/:permissionId', options);
        });
        /**
         * Returns all permission grants of the given permission scheme.
         *
         * @method getPermissionSchemeGrants
         * @memberOf Permissionscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.schemeId schemeId
         * @param {string} options.expand expand
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getPermissionSchemeGrants = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getPermissionSchemeGrants', 'GET', 'rest/api/2/permissionscheme/:schemeId/permission', options);
        });
        /**
         * Returns a list of all permission schemes.
         *
         * By default only shortened beans are returned. If you want to include permissions of all the schemes,
         * then specify the permissions expand parameter. Permissions will be included also if you specify
         * any other expand parameter.
         *
         *
         * @method getPermissionSchemes
         * @memberOf Permissionscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.expand expand
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getPermissionSchemes = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getPermissionSchemes', 'GET', 'rest/api/2/permissionscheme', options);
        });
        /**
         * Updates a permission scheme.
         *
         * If the permissions list is present then it will be set in the permission scheme, which basically means it will overwrite any permission grants that
         * existed in the permission scheme. Sending an empty list will remove all permission grants from the permission scheme.
         *
         * To update just the name and description, do not send permissions list at all.
         *
         * To add or remove a single permission grant instead of updating the whole list at once use the {schemeId}/permission/ resource.
         *
         *
         * @method updatePermissionScheme
         * @memberOf Permissionscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.schemeId schemeId
         * @param {string} options.expand expand
         * @param {string} options.name name
         * @param {string} options.description description
         * @param {string} options.permissions permissions
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.updatePermissionScheme = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('updatePermissionScheme', 'PUT', 'rest/api/2/permissionscheme/:schemeId', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.Permissionscheme = Permissionscheme;
