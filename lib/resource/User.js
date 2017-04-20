"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseResource_1 = require("./baseResource");
/**
 * User
 *
 * @constructor User
 * @property {IConnector} connector the jira connector instance
 */
class User extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Add user to given application. Admin permission will be required to perform this operation.usernameapplication key
         *
         * @method addUserToApplication
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.username username username
         * @param {string} options.applicationKey applicationKey application key
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.addUserToApplication = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('addUserToApplication', 'POST', 'rest/api/2/user/application', options, callback);
        };
        /**
         * Modify user password.the usernameuser key
         *
         * @method changeUserPassword
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.username username the username
         * @param {string} options.key key user key
         * @param {string} options.password password
         * @param {string} options.currentPassword currentPassword
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.changeUserPassword = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('changeUserPassword', 'PUT', 'rest/api/2/user/password', options, callback);
        };
        /**
         * Create user. By default created user will not be notified with email.
         * If password field is not set then password will be randomly generated.
         *
         * @method create
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.key key
         * @param {string} options.name name
         * @param {string} options.password password
         * @param {string} options.emailAddress emailAddress
         * @param {string} options.displayName displayName
         * @param {string} options.notification notification
         * @param {string} options.applicationKeys applicationKeys
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
            return this.makeRequest('create', 'POST', 'rest/api/2/user', options, callback);
        };
        /**
         * Converts temporary avatar into a real avatarusername
         *
         * @method createAvatarFromTemporary
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.username username username
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
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('createAvatarFromTemporary', 'POST', 'rest/api/2/user/avatar', options, callback);
        };
        /**
         * Returns the default columns for the given user. Admin permission will be required to get columns for a user
         * other than the currently logged in user.username
         *
         * @method defaultColumns
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.username username username
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.defaultColumns = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('defaultColumns', 'GET', 'rest/api/2/user/columns', options, callback);
        };
        /**
         * Deletes avatarusername
         *
         * @method deleteAvatar
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.username username username
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.deleteAvatar = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('deleteAvatar', 'DELETE', 'rest/api/2/user/avatar/:id', options, callback);
        };
        /**
         * Removes user.the usernameuser key
         *
         * @method deleteById
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.username username the username
         * @param {string} options.key key user key
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.deleteById = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('deleteById', 'DELETE', 'rest/api/2/user', options, callback);
        };
        /**
         * Returns a list of users that match the search string. This resource cannot be accessed anonymously.A query string used to search username, name or e-mail addressthe index of the first user to return (0-based)the maximum number of users to return (defaults to 50). The maximum allowed value is 1000.
         *                        If you specify a value that is higher than this number, your search results will be truncated.If true, then active users are included in the results (default true)If true, then inactive users are included in the results (default false)
         *
         * @method find
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.username username A query string used to search username, name or e-mail address
         * @param {string} options.startAt startAt the index of the first user to return (0-based)
         * @param {string} options.maxResults maxResults the maximum number of users to return (defaults to 50). The maximum allowed value is 1000.
                            If you specify a value that is higher than this number, your search results will be truncated.
         * @param {string} options.includeActive includeActive If true, then active users are included in the results (default true)
         * @param {string} options.includeInactive includeInactive If true, then inactive users are included in the results (default false)
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.find = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('find', 'GET', 'rest/api/2/user/search', options, callback);
        };
        /**
         * Returns a list of users that match the search string. This resource cannot be accessed anonymously.
         * Please note that this resource should be called with an issue key when a list of assignable users is retrieved
         * for editing.  For create only a project key should be supplied.  The list of assignable users may be incorrect
         * if it's called with the project key for editing.the usernamethe key of the project we are finding assignable users forthe issue key for the issue being edited we need to find assignable users for.the index of the first user to return (0-based)the maximum number of users to return (defaults to 50). The maximum allowed value is 1000.
         *                   If you specify a value that is higher than this number, your search results will be truncated.
         *
         * @method findAssignableUsers
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.username username the username
         * @param {string} options.project project the key of the project we are finding assignable users for
         * @param {string} options.issueKey issueKey the issue key for the issue being edited we need to find assignable users for.
         * @param {string} options.startAt startAt the index of the first user to return (0-based)
         * @param {string} options.maxResults maxResults the maximum number of users to return (defaults to 50). The maximum allowed value is 1000.
                       If you specify a value that is higher than this number, your search results will be truncated.
         * @param {string} options.actionDescriptorId actionDescriptorId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.findAssignableUsers = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('findAssignableUsers', 'GET', 'rest/api/2/user/assignable/search', options, callback);
        };
        /**
         * Returns a list of users that match the search string and can be assigned issues for all the given projects.
         * This resource cannot be accessed anonymously.the usernamethe keys of the projects we are finding assignable users for, comma-separatedthe index of the first user to return (0-based)the maximum number of users to return (defaults to 50). The maximum allowed value is 1000.
         *                       If you specify a value that is higher than this number, your search results will be truncated.
         *
         * @method findBulkAssignableUsers
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.username username the username
         * @param {string} options.projectKeys projectKeys the keys of the projects we are finding assignable users for, comma-separated
         * @param {string} options.startAt startAt the index of the first user to return (0-based)
         * @param {string} options.maxResults maxResults the maximum number of users to return (defaults to 50). The maximum allowed value is 1000.
                           If you specify a value that is higher than this number, your search results will be truncated.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.findBulkAssignableUsers = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('findBulkAssignableUsers', 'GET', 'rest/api/2/user/assignable/multiProjectSearch', options, callback);
        };
        /**
         * Returns a user. This resource cannot be accessed anonymously.the usernameuser key
         *
         * @method findById
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.username username the username
         * @param {string} options.key key user key
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
            return this.makeRequest('findById', 'GET', 'rest/api/2/user', options, callback);
        };
        /**
         * Returns a list of users matching query with highlighting. This resource cannot be accessed anonymously.A string used to search username, Name or e-mail addressthe maximum number of users to return (defaults to 50). The maximum allowed value is 1000.
         *                   If you specify a value that is higher than this number, your search results will be truncated.
         *
         * @method findUsersForPicker
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.query query A string used to search username, Name or e-mail address
         * @param {string} options.maxResults maxResults the maximum number of users to return (defaults to 50). The maximum allowed value is 1000.
                       If you specify a value that is higher than this number, your search results will be truncated.
         * @param {string} options.showAvatar showAvatar
         * @param {string} options.exclude exclude
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.findUsersForPicker = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('findUsersForPicker', 'GET', 'rest/api/2/user/picker', options, callback);
        };
        /**
         * Returns a list of active users that match the search string and have all specified permissions for the project or issue.
         * This resource can be accessed by users with ADMINISTER_PROJECT permission for the project or global ADMIN or SYSADMIN rights.the username filter, list includes all users if unspecifiedcomma separated list of permissions for project or issue returned users must have, see
         *                    Permissions
         *                    JavaDoc for the list of all possible permissions.the issue key for the issue for which returned users have specified permissions.the optional project key to search for users with if no issueKey is supplied.the index of the first user to return (0-based)the maximum number of users to return (defaults to 50). The maximum allowed value is 1000.
         *                    If you specify a value that is higher than this number, your search results will be truncated.
         *
         * @method findUsersWithAllPermissions
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.username username the username filter, list includes all users if unspecified
         * @param {string} options.permissions permissions comma separated list of permissions for project or issue returned users must have, see
                        Permissions
                        JavaDoc for the list of all possible permissions.
         * @param {string} options.issueKey issueKey the issue key for the issue for which returned users have specified permissions.
         * @param {string} options.projectKey projectKey the optional project key to search for users with if no issueKey is supplied.
         * @param {string} options.startAt startAt the index of the first user to return (0-based)
         * @param {string} options.maxResults maxResults the maximum number of users to return (defaults to 50). The maximum allowed value is 1000.
                        If you specify a value that is higher than this number, your search results will be truncated.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.findUsersWithAllPermissions = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('findUsersWithAllPermissions', 'GET', 'rest/api/2/user/permission/search', options, callback);
        };
        /**
         * Returns a list of active users that match the search string. This resource cannot be accessed anonymously
         * and requires the Browse Users global permission.
         * Given an issue key this resource will provide a list of users that match the search string and have
         * the browse issue permission for the issue provided.the username filter, no users returned if left blankthe issue key for the issue being edited we need to find viewable users for.the optional project key to search for users with if no issueKey is supplied.the index of the first user to return (0-based)the maximum number of users to return (defaults to 50). The maximum allowed value is 1000.
         *                   If you specify a value that is higher than this number, your search results will be truncated.
         *
         * @method findUsersWithBrowsePermission
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.username username the username filter, no users returned if left blank
         * @param {string} options.issueKey issueKey the issue key for the issue being edited we need to find viewable users for.
         * @param {string} options.projectKey projectKey the optional project key to search for users with if no issueKey is supplied.
         * @param {string} options.startAt startAt the index of the first user to return (0-based)
         * @param {string} options.maxResults maxResults the maximum number of users to return (defaults to 50). The maximum allowed value is 1000.
                       If you specify a value that is higher than this number, your search results will be truncated.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.findUsersWithBrowsePermission = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('findUsersWithBrowsePermission', 'GET', 'rest/api/2/user/viewissue/search', options, callback);
        };
        /**
         * Returns all avatars which are visible for the currently logged in user.username
         *
         * @method getAllAvatars
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.username username username
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getAllAvatars = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('getAllAvatars', 'GET', 'rest/api/2/user/avatars', options, callback);
        };
        /**
         * Creates a new session for a user in JIRA. Once a session has been successfully created it can be used to access
         * any of JIRA's remote APIs and also the web UI by passing the appropriate HTTP Cookie header.
         *
         * Note that it is generally preferrable to use HTTP BASIC authentication with the REST API. However, this resource
         * may be used to mimic the behaviour of JIRA's log-in page (e.g. to display log-in errors to a user).
         * Note that the response contains the Set-Cookie HTTP headers that must be honoured by the
         * caller. If you are using a cookie-aware HTTP client then it will handle all Set-Cookie headers
         * automatically. This is important because setting the JSESSIONID cookie alone may not be
         * sufficient for the authentication to work.Schema{"id":"https://docs.atlassian.com/jira/REST/schema/auth-success#","title":"Auth Success","type":"object","properties":{"session":{"title":"Session Info","type":"object","properties":{"name":{"type":"string"},"value":{"type":"string"}},"additionalProperties":false},"loginInfo":{"title":"Login Info","type":"object","properties":{"failedLoginCount":{"type":"integer"},"loginCount":{"type":"integer"},"lastFailedLoginTime":{"type":"string"},"previousLoginTime":{"type":"string"}},"additionalProperties":false}},"additionalProperties":false}
         *
         * @method login
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.username username
         * @param {string} options.password password
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.login = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('login', 'POST', 'rest/auth/1/session', options, callback);
        };
        /**
         * Logs the current user out of JIRA, destroying the existing session, if any.
         *
         * @method logout
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.logout = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('logout', 'DELETE', 'rest/auth/1/session', options, callback);
        };
        /**
         * Remove user from given application. Admin permission will be required to perform this operation.usernameapplication key
         *
         * @method removeUserFromApplication
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.username username username
         * @param {string} options.applicationKey applicationKey application key
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.removeUserFromApplication = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('removeUserFromApplication', 'DELETE', 'rest/api/2/user/application', options, callback);
        };
        /**
         * Reset the default columns for the given user to the system default. Admin permission will be required to get
         * columns for a user other than the currently logged in user.username
         *
         * @method resetColumns
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.username username username
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.resetColumns = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('resetColumns', 'DELETE', 'rest/api/2/user/columns', options, callback);
        };
        /**
         * Sets the default columns for the given user.  Admin permission will be required to get columns for a user
         * other than the currently logged in user.
         *
         * @method setColumns
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.setColumns = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('setColumns', 'PUT', 'rest/api/2/user/columns', options, callback);
        };
        /**
         * Creates temporary avatar. Creating a temporary avatar is part of a 3-step process in uploading a new
         * avatar for a user: upload, crop, confirm.
         *
         * The following examples shows these three steps using curl.
         * The cookies (session) need to be preserved between requests, hence the use of -b and -c.
         * The id created in step 2 needs to be passed to step 3
         * (you can simply pass the whole response of step 2 as the request of step 3).
         *
         *
         * curl -c cookiejar.txt -X POST -u admin:admin -H "X-Atlassian-Token: no-check" \
         *   -H "Content-Type: image/png" --data-binary @mynewavatar.png \
         *   'http://localhost:8090/jira/rest/api/2/user/avatar/temporary?username=admin&filename=mynewavatar.png'
         *
         * curl -b cookiejar.txt -X POST -u admin:admin -H "X-Atlassian-Token: no-check" \
         *   -H "Content-Type: application/json" --data '{"cropperWidth": "65","cropperOffsetX": "10","cropperOffsetY": "16"}' \
         *   -o tmpid.json \
         *   http://localhost:8090/jira/rest/api/2/user/avatar?username=admin
         *
         * curl -b cookiejar.txt -X PUT -u admin:admin -H "X-Atlassian-Token: no-check" \
         *   -H "Content-Type: application/json" --data-binary @tmpid.json \
         *   http://localhost:8090/jira/rest/api/2/user/avatar?username=admin
         * usernamename of file being uploadedsize of file
         *
         * @method storeTemporaryAvatar
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.username username username
         * @param {string} options.filename filename name of file being uploaded
         * @param {string} options.size size size of file
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.storeTemporaryAvatar = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('storeTemporaryAvatar', 'POST', 'rest/api/2/user/avatar/temporary', options, callback);
        };
        /**
         * Creates temporary avatar using multipart. The response is sent back as JSON stored in a textarea. This is because
         * the client uses remote iframing to submit avatars using multipart. So we must send them a valid HTML page back from
         * which the client parses the JSON from.
         *
         * Creating a temporary avatar is part of a 3-step process in uploading a new
         * avatar for a user: upload, crop, confirm. This endpoint allows you to use a multipart upload
         * instead of sending the image directly as the request body.
         *
         * You *must* use "avatar" as the name of the upload parameter:
         *
         * curl -c cookiejar.txt -X POST -u admin:admin -H "X-Atlassian-Token: no-check" \
         *   -F "avatar=@mynewavatar.png;type=image/png" \
         *   'http://localhost:8090/jira/rest/api/2/user/avatar/temporary?username=admin'
         * Username
         *
         * @method storeTemporaryAvatarUsingMultiPart
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.username username Username
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.storeTemporaryAvatarUsingMultiPart = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('storeTemporaryAvatarUsingMultiPart', 'POST', 'rest/api/2/user/avatar/temporary', options, callback);
        };
        /**
         * Modify user. The "value" fields present will override the existing value.
         * Fields skipped in request will not be changed.the usernameuser key
         *
         * @method update
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.username username the username
         * @param {string} options.key key user key
         * @param {string} options.key key
         * @param {string} options.name name
         * @param {string} options.password password
         * @param {string} options.emailAddress emailAddress
         * @param {string} options.displayName displayName
         * @param {string} options.notification notification
         * @param {string} options.applicationKeys applicationKeys
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
            return this.makeRequest('update', 'PUT', 'rest/api/2/user', options, callback);
        };
        /**
         *
         *
         * @method updateProjectAvatar
         * @memberOf User#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.username username
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
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('updateProjectAvatar', 'PUT', 'rest/api/2/user/avatar', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.User = User;
