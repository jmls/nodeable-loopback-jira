"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.assignPermissionScheme = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('assignPermissionScheme', 'PUT', 'rest/api/2/project/:projectKeyOrId/permissionscheme', options, callback);
        };
        /**
         * Gets a permission scheme assigned with a project.
         *
         * @method getAssignedPermissionScheme
         * @memberOf ProjectPermissionscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectKeyOrId projectKeyOrId
         * @param {string} options.expand expand
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getAssignedPermissionScheme = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('getAssignedPermissionScheme', 'GET', 'rest/api/2/project/:projectKeyOrId/permissionscheme', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.ProjectPermissionscheme = ProjectPermissionscheme;
