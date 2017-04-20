"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseResource_1 = require("./baseResource");
/**
 * Version
 *
 * @constructor Version
 * @property {IConnector} connector the jira connector instance
 */
class Version extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Create a version via POST.
         *
         * @method create
         * @memberOf Version#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.description description
         * @param {string} options.name name
         * @param {string} options.archived archived
         * @param {string} options.released released
         * @param {string} options.overdue overdue
         * @param {string} options.userStartDate userStartDate
         * @param {string} options.userReleaseDate userReleaseDate
         * @param {string} options.project project
         * @param {string} options.projectId projectId
         * @param {string} options.moveUnfixedIssuesTo moveUnfixedIssuesTo
         * @param {string} options.operations operations
         * @param {string} options.remotelinks remotelinks
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.create = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('create', 'POST', 'rest/api/2/version', options, callback);
        };
        /**
         * Create a remote version link via POST.  The link's global ID will be taken from the
         * JSON payload if provided; otherwise, it will be generated.
         *
         * @method createOrUpdateRemoteVersionLink
         * @memberOf Version#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.versionId versionId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.createOrUpdateRemoteVersionLink = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('createOrUpdateRemoteVersionLink', 'POST', 'rest/api/2/version/:versionId/remotelink', options, callback);
        };
        /**
         * Delete a project version.The version to set fixVersion to on issues where the deleted version is the fix version,
         *                             If null then the fixVersion is removed.The version to set affectedVersion to on issues where the deleted version is the affected version,
         *                             If null then the affectedVersion is removed.
         *
         * @method delete
         * @memberOf Version#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.moveFixIssuesTo moveFixIssuesTo The version to set fixVersion to on issues where the deleted version is the fix version,
                                 If null then the fixVersion is removed.
         * @param {string} options.moveAffectedIssuesTo moveAffectedIssuesTo The version to set affectedVersion to on issues where the deleted version is the affected version,
                                 If null then the affectedVersion is removed.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.delete = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('delete', 'DELETE', 'rest/api/2/version/:id', options, callback);
        };
        /**
         * Delete all remote version links for a given version ID.
         *
         * @method deleteRemoteVersionLinksByVersionId
         * @memberOf Version#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.versionId versionId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.deleteRemoteVersionLinksByVersionId = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('deleteRemoteVersionLinksByVersionId', 'DELETE', 'rest/api/2/version/:versionId/remotelink', options, callback);
        };
        /**
         * Returns a project version.
         *
         * @method findById
         * @memberOf Version#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.expand expand
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.findById = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('findById', 'GET', 'rest/api/2/version/:id', options, callback);
        };
        /**
         * Returns the remote version links for a given global ID.the global ID of the remote resource that is linked to the versions
         *
         * @method getRemoteVersionLinks
         * @memberOf Version#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.globalId globalId the global ID of the remote resource that is linked to the versions
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getRemoteVersionLinks = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('getRemoteVersionLinks', 'GET', 'rest/api/2/version/remotelink', options, callback);
        };
        /**
         * Returns the remote version links associated with the given version ID.
         *
         * @method getRemoteVersionLinksByVersionId
         * @memberOf Version#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.versionId versionId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getRemoteVersionLinksByVersionId = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('getRemoteVersionLinksByVersionId', 'GET', 'rest/api/2/version/:versionId/remotelink', options, callback);
        };
        /**
         * Returns a bean containing the number of fixed in and affected issues for the given version.
         *
         * @method getVersionRelatedIssues
         * @memberOf Version#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getVersionRelatedIssues = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('getVersionRelatedIssues', 'GET', 'rest/api/2/version/:id/relatedIssueCounts', options, callback);
        };
        /**
         * Returns the number of unresolved issues for the given version
         *
         * @method getVersionUnresolvedIssues
         * @memberOf Version#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getVersionUnresolvedIssues = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('getVersionUnresolvedIssues', 'GET', 'rest/api/2/version/:id/unresolvedIssueCount', options, callback);
        };
        /**
         * Merge versions
         *
         * @method merge
         * @memberOf Version#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.moveIssuesTo moveIssuesTo
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.merge = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('merge', 'PUT', 'rest/api/2/version/:id/mergeto/:moveIssuesTo', options, callback);
        };
        /**
         * Modify a version's sequence within a project.
         *
         * The move version bean has 2 alternative field value pairs:
         *
         * positionAn absolute position, which may have a value of 'First', 'Last', 'Earlier' or 'Later'
         * afterA version to place this version after.  The value should be the self link of another version
         *
         *
         * @method moveVersion
         * @memberOf Version#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.after after
         * @param {string} options.position position
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.moveVersion = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('moveVersion', 'POST', 'rest/api/2/version/:id/move', options, callback);
        };
        /**
         * Modify a version via PUT. Any fields present in the PUT will override existing values. As a convenience, if a field
         * is not present, it is silently ignored.
         *
         * @method update
         * @memberOf Version#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.id id
         * @param {string} options.description description
         * @param {string} options.name name
         * @param {string} options.archived archived
         * @param {string} options.released released
         * @param {string} options.overdue overdue
         * @param {string} options.userStartDate userStartDate
         * @param {string} options.userReleaseDate userReleaseDate
         * @param {string} options.project project
         * @param {string} options.projectId projectId
         * @param {string} options.moveUnfixedIssuesTo moveUnfixedIssuesTo
         * @param {string} options.operations operations
         * @param {string} options.remotelinks remotelinks
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.update = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('update', 'PUT', 'rest/api/2/version/:id', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Version = Version;
