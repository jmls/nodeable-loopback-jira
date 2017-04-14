"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseResource_1 = require("./baseResource");
/**
 * Permissions Provide permission information for the current user.
 *
 * @constructor Permissions
 * @property {IConnector} connector the jira connector instance
 */
class Permissions extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Returns all permissions that are present in the JIRA instance - Global, Project and the global ones added by plugins
         *
         * @method find
         * @memberOf Permissions#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.find = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "token": args[0]
            };
            return this.makeRequest('find', 'GET', 'rest/api/2/permissions', options, callback);
        };
        /**
         * Returns all permissions in the system and whether the currently logged in user has them. You can optionally provide a specific context to get permissions for
         * (projectKey OR projectId OR issueKey OR issueId)
         *
         *  When no context supplied the project related permissions will return true if the user has that permission in ANY project
         *  If a project context is provided, project related permissions will return true if the user has the permissions in the specified project.
         * For permissions that are determined using issue data (e.g Current Assignee), true will be returned if the user meets the permission criteria in ANY issue in that project
         *  If an issue context is provided, it will return whether or not the user has each permission in that specific issue
         *
         *
         * NB: The above means that for issue-level permissions (EDIT_ISSUE for example), hasPermission may be true when no context is provided, or when a project context is provided,
         * but may be false for any given (or all) issues. This would occur (for example) if Reporters were given the EDIT_ISSUE permission. This is because
         * any user could be a reporter, except in the context of a concrete issue, where the reporter is known.
         *
         * Global permissions will still be returned for all scopes.
         *
         * Prior to version 6.4 this service returned project permissions with keys corresponding to com.atlassian.jira.security.Permissions.Permission constants.
         * Since 6.4 those keys are considered deprecated and this service returns system project permission keys corresponding to constants defined in com.atlassian.jira.permission.ProjectPermissions.
         * Permissions with legacy keys are still also returned for backwards compatibility, they are marked with an attribute deprecatedKey=true.
         * The attribute is missing for project permissions with the current keys.
         * - key of project to scope returned permissions for.- id of project to scope returned permissions for.- key of the issue to scope returned permissions for.- id of the issue to scope returned permissions for.
         *
         * @method myPermissions
         * @memberOf Permissions#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectKey projectKey - key of project to scope returned permissions for.
         * @param {string} options.projectId projectId - id of project to scope returned permissions for.
         * @param {string} options.issueKey issueKey - key of the issue to scope returned permissions for.
         * @param {string} options.issueId issueId - id of the issue to scope returned permissions for.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.myPermissions = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "projectKey": args[0],
                "projectId": args[1],
                "issueKey": args[2],
                "issueId": args[3],
                "token": args[4]
            };
            return this.makeRequest('myPermissions', 'GET', 'rest/api/2/mypermissions', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Permissions = Permissions;
