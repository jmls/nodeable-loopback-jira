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
 * ProjectRole
 *
 * @constructor ProjectRole
 * @property {IConnector} connector the jira connector instance
 */
class ProjectRole extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Adds an actor (user or group) to a project role.
         *
         * @method addActorUsers
         * @memberOf ProjectRole#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectIdOrKey projectIdOrKey
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.addActorUsers = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('addActorUsers', 'POST', 'rest/api/2/project/:projectIdOrKey/role/:id', options);
        });
        /**
         * Deletes actors (users or groups) from a project role.
         *
         *
         * Delete a user from the role: /rest/api/2/project/{projectIdOrKey}/role/{roleId}?user={username}
         * Delete a group from the role: /rest/api/2/project/{projectIdOrKey}/role/{roleId}?group={groupname}
         * the username to remove from the project rolethe groupname to remove from the project role
         *
         * @method deleteActor
         * @memberOf ProjectRole#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectIdOrKey projectIdOrKey
         * @param {string} options.id id
         * @param {string} options.user user the username to remove from the project role
         * @param {string} options.group group the groupname to remove from the project role
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.deleteActor = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('deleteActor', 'DELETE', 'rest/api/2/project/:projectIdOrKey/role/:id', options);
        });
        /**
         * Returns the details for a given project role in a project.
         *
         * @method findById
         * @memberOf ProjectRole#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectIdOrKey projectIdOrKey
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.findById = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('findById', 'GET', 'rest/api/2/project/:projectIdOrKey/role/:id', options);
        });
        /**
         * Returns all roles in the given project Id or key, with links to full details on each role.
         *
         * @method getProjectRoles
         * @memberOf ProjectRole#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectIdOrKey projectIdOrKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getProjectRoles = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getProjectRoles', 'GET', 'rest/api/2/project/:projectIdOrKey/role', options);
        });
        /**
         * Updates a project role to include the specified actors (users or groups).
         *
         * @method setActors
         * @memberOf ProjectRole#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectIdOrKey projectIdOrKey
         * @param {string} options.id id
         * @param {string} options.id id
         * @param {string} options.categorisedActors categorisedActors
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.setActors = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('setActors', 'PUT', 'rest/api/2/project/:projectIdOrKey/role/:id', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.ProjectRole = ProjectRole;
