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
 * ProjectPermissionscheme Resource for associating permission schemes and projects.
 *
 * @constructor ProjectPermissionscheme
 * @property {IConnector} connector the jira connector instance
 */
class ProjectPermissionscheme extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Assigns a permission scheme with a project.
         *
         * @method assignPermissionScheme
         * @memberOf ProjectPermissionscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectKeyOrId projectKeyOrId
         * @param {string} options.expand expand
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.assignPermissionScheme = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('assignPermissionScheme', 'PUT', 'rest/api/2/project/:projectKeyOrId/permissionscheme', options);
        });
        /**
         * Gets a permission scheme assigned with a project.
         *
         * @method getAssignedPermissionScheme
         * @memberOf ProjectPermissionscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectKeyOrId projectKeyOrId
         * @param {string} options.expand expand
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getAssignedPermissionScheme = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getAssignedPermissionScheme', 'GET', 'rest/api/2/project/:projectKeyOrId/permissionscheme', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.ProjectPermissionscheme = ProjectPermissionscheme;
