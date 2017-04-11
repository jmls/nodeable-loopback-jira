"use strict";
const baseResource_1 = require("./baseResource");
/**
 * Project
 *
 * @constructor Project
 * @property {IConnector} connector the jira connector instance
 */
class Project extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Creates a new project.
         *
         * @method create
         * @memberOf Project#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.key key
         * @param {string} options.name name
         * @param {string} options.projectTypeKey projectTypeKey
         * @param {string} options.projectTemplateKey projectTemplateKey
         * @param {string} options.description description
         * @param {string} options.lead lead
         * @param {string} options.url url
         * @param {string} options.assigneeType assigneeType
         * @param {string} options.avatarId avatarId
         * @param {string} options.issueSecurityScheme issueSecurityScheme
         * @param {string} options.permissionScheme permissionScheme
         * @param {string} options.notificationScheme notificationScheme
         * @param {string} options.categoryId categoryId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.create = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "data": args[0]
            };
            return this.makeRequest('create', 'POST', 'rest/api/2/project', options, callback);
        };
        /**
         * Converts temporary avatar into a real avatar
         *
         * @method createAvatarFromTemporary
         * @memberOf Project#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectIdOrKey projectIdOrKey
         * @param {string} options.cropperWidth cropperWidth
         * @param {string} options.cropperOffsetX cropperOffsetX
         * @param {string} options.cropperOffsetY cropperOffsetY
         * @param {string} options.url url
         * @param {string} options.needsCropping needsCropping
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.createAvatarFromTemporary = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "projectIdOrKey": args[0],
                "data": args[1]
            };
            return this.makeRequest('createAvatarFromTemporary', 'POST', 'rest/api/2/project/:projectIdOrKey/avatar', options, callback);
        };
        /**
         * Deletes avatar
         *
         * @method deleteAvatar
         * @memberOf Project#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectIdOrKey projectIdOrKey
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.deleteAvatar = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "projectIdOrKey": args[0],
                "id": args[1],
                "token": args[2]
            };
            return this.makeRequest('deleteAvatar', 'DELETE', 'rest/api/2/project/:projectIdOrKey/avatar/:id', options, callback);
        };
        /**
         * Deletes a project.
         *
         * @method deleteById
         * @memberOf Project#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectIdOrKey projectIdOrKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.deleteById = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "projectIdOrKey": args[0],
                "token": args[1]
            };
            return this.makeRequest('deleteById', 'DELETE', 'rest/api/2/project/:projectIdOrKey', options, callback);
        };
        /**
         * Returns all projects which are visible for the currently logged in user. If no user is logged in, it returns the
         * list of projects that are visible when using anonymous access.the parameters to expandif this parameter is set then only projects recently accessed by the current user (if not logged in then based on HTTP session) will be returned (maximum count limited to the specified number but no more than 20).
         *
         * @method find
         * @memberOf Project#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.expand expand the parameters to expand
         * @param {string} options.recent recent if this parameter is set then only projects recently accessed by the current user (if not logged in then based on HTTP session) will be returned (maximum count limited to the specified number but no more than 20).
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.find = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "expand": args[0],
                "recent": args[1],
                "token": args[2]
            };
            return this.makeRequest('find', 'GET', 'rest/api/2/project', options, callback);
        };
        /**
         * Contains a full representation of a project in JSON format.
         *
         * All project keys associated with the project will only be returned if expand=projectKeys.
         * the parameters to expand
         *
         * @method findById
         * @memberOf Project#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectIdOrKey projectIdOrKey
         * @param {string} options.expand expand the parameters to expand
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.findById = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "projectIdOrKey": args[0],
                "expand": args[1],
                "token": args[2]
            };
            return this.makeRequest('findById', 'GET', 'rest/api/2/project/:projectIdOrKey', options, callback);
        };
        /**
         * Returns all avatars which are visible for the currently logged in user.  The avatars are grouped into
         * system and custom.
         *
         * @method getAllAvatars
         * @memberOf Project#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectIdOrKey projectIdOrKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getAllAvatars = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "projectIdOrKey": args[0],
                "token": args[1]
            };
            return this.makeRequest('getAllAvatars', 'GET', 'rest/api/2/project/:projectIdOrKey/avatars', options, callback);
        };
        /**
         * Get all issue types with valid status values for a project
         *
         * @method getAllStatuses
         * @memberOf Project#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectIdOrKey projectIdOrKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getAllStatuses = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "projectIdOrKey": args[0],
                "token": args[1]
            };
            return this.makeRequest('getAllStatuses', 'GET', 'rest/api/2/project/:projectIdOrKey/statuses', options, callback);
        };
        /**
         * Contains a full representation of a the specified project's components.
         *
         * @method getProjectComponents
         * @memberOf Project#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectIdOrKey projectIdOrKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getProjectComponents = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "projectIdOrKey": args[0],
                "token": args[1]
            };
            return this.makeRequest('getProjectComponents', 'GET', 'rest/api/2/project/:projectIdOrKey/components', options, callback);
        };
        /**
         * Contains a full representation of a the specified project's versions.the parameters to expand
         *
         * @method getProjectVersions
         * @memberOf Project#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectIdOrKey projectIdOrKey
         * @param {string} options.expand expand the parameters to expand
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getProjectVersions = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "projectIdOrKey": args[0],
                "expand": args[1],
                "token": args[2]
            };
            return this.makeRequest('getProjectVersions', 'GET', 'rest/api/2/project/:projectIdOrKey/versions', options, callback);
        };
        /**
         * Returns all versions for the specified project. Results are paginated.
         *
         * Results can be ordered by the following fields:
         *
         * sequence
         * name
         * startDate
         * releaseDate
         *
         * the page offset, if not specified then defaults to 0how many results on the page should be included. Defaults to 50.ordering of the results.the parameters to expand
         *
         * @method getProjectVersionsPaginated
         * @memberOf Project#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectIdOrKey projectIdOrKey
         * @param {string} options.startAt startAt the page offset, if not specified then defaults to 0
         * @param {string} options.maxResults maxResults how many results on the page should be included. Defaults to 50.
         * @param {string} options.orderBy orderBy ordering of the results.
         * @param {string} options.expand expand the parameters to expand
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getProjectVersionsPaginated = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "projectIdOrKey": args[0],
                "startAt": args[1],
                "maxResults": args[2],
                "orderBy": args[3],
                "expand": args[4],
                "token": args[5]
            };
            return this.makeRequest('getProjectVersionsPaginated', 'GET', 'rest/api/2/project/:projectIdOrKey/version', options, callback);
        };
        /**
         * Creates temporary avatarname of file being uploadedsize of file
         *
         * @method storeTemporaryAvatar
         * @memberOf Project#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectIdOrKey projectIdOrKey
         * @param {string} options.filename filename name of file being uploaded
         * @param {string} options.size size size of file
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.storeTemporaryAvatar = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "projectIdOrKey": args[0],
                "filename": args[1],
                "size": args[2],
                "token": args[3]
            };
            return this.makeRequest('storeTemporaryAvatar', 'POST', 'rest/api/2/project/:projectIdOrKey/avatar/temporary', options, callback);
        };
        /**
         * Creates temporary avatar using multipart. The response is sent back as JSON stored in a textarea. This is because
         * the client uses remote iframing to submit avatars using multipart. So we must send them a valid HTML page back from
         * which the client parses the JSON.
         *
         * @method storeTemporaryAvatarUsingMultiPart
         * @memberOf Project#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectIdOrKey projectIdOrKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.storeTemporaryAvatarUsingMultiPart = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "projectIdOrKey": args[0],
                "token": args[1]
            };
            return this.makeRequest('storeTemporaryAvatarUsingMultiPart', 'POST', 'rest/api/2/project/:projectIdOrKey/avatar/temporary', options, callback);
        };
        /**
         * Updates a project.
         *
         * Only non null values sent in JSON will be updated in the project.
         * Values available for the assigneeType field are: "PROJECT_LEAD" and "UNASSIGNED".the parameters to expand in returned project
         *
         * @method update
         * @memberOf Project#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectIdOrKey projectIdOrKey
         * @param {string} options.expand expand the parameters to expand in returned project
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.update = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "projectIdOrKey": args[0],
                "expand": args[1],
                "token": args[2]
            };
            return this.makeRequest('update', 'PUT', 'rest/api/2/project/:projectIdOrKey', options, callback);
        };
        /**
         *
         *
         * @method updateProjectAvatar
         * @memberOf Project#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectIdOrKey projectIdOrKey
         * @param {string} options.id id
         * @param {string} options.owner owner
         * @param {string} options.isSystemAvatar isSystemAvatar
         * @param {string} options.isSelected isSelected
         * @param {string} options.isDeletable isDeletable
         * @param {string} options.urls urls
         * @param {string} options.selected selected
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.updateProjectAvatar = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "projectIdOrKey": args[0],
                "data": args[1]
            };
            return this.makeRequest('updateProjectAvatar', 'PUT', 'rest/api/2/project/:projectIdOrKey/avatar', options, callback);
        };
        /**
         * Updates the type of a project.
         *
         * @method updateProjectType
         * @memberOf Project#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectIdOrKey projectIdOrKey
         * @param {string} options.newProjectTypeKey newProjectTypeKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.updateProjectType = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "projectIdOrKey": args[0],
                "newProjectTypeKey": args[1],
                "token": args[2]
            };
            return this.makeRequest('updateProjectType', 'PUT', 'rest/api/2/project/:projectIdOrKey/type/:newProjectTypeKey', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Project = Project;
