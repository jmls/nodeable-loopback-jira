"use strict";
const baseResource_1 = require("./baseResource");
/**
 * Permissionscheme Resource for associating permission schemes and projects.
 *
 * @constructor Permissionscheme
 * @property {IConnector} connector the jira connector instance
 */
class Permissionscheme extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Assigns a permission scheme with a project.
         *
         * @method assignPermissionScheme
         * @memberOf Permissionscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectKeyOrId projectKeyOrId
         * @param {string} options.expand expand
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.assignPermissionScheme = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "projectKeyOrId": args[0],
                "expand": args[1],
                "token": args[2]
            };
            return this.makeRequest('assignPermissionScheme', 'PUT', 'rest/api/2/project/:projectKeyOrId/permissionscheme', options, callback);
        };
        /**
         * Gets a permission scheme assigned with a project.
         *
         * @method getAssignedPermissionScheme
         * @memberOf Permissionscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectKeyOrId projectKeyOrId
         * @param {string} options.expand expand
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getAssignedPermissionScheme = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "projectKeyOrId": args[0],
                "expand": args[1],
                "token": args[2]
            };
            return this.makeRequest('getAssignedPermissionScheme', 'GET', 'rest/api/2/project/:projectKeyOrId/permissionscheme', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Permissionscheme = Permissionscheme;
