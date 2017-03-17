"use strict";
const baseResource_1 = require("./baseResource");
/**
 * Applicationrole Provides REST access to JIRA&#39;s Application Roles.
 *
 * @constructor Applicationrole
 * @property {IConnector} connector the jira connector instance
 */
class Applicationrole extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Returns the ApplicationRole with passed key if it exists.
         *
         * @method get
         * @memberOf Applicationrole#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.key key
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.get = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "key": args[0],
                "token": args[1]
            };
            return this.makeRequest('get', 'GET', 'rest/api/2/applicationrole/:key', options, callback);
        };
        /**
         * Returns all ApplicationRoles in the system. Will also return an ETag header containing a version hash of the
         * collection of ApplicationRoles.
         *
         * @method getAll
         * @memberOf Applicationrole#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getAll = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "token": args[0]
            };
            return this.makeRequest('getAll', 'GET', 'rest/api/2/applicationrole', options, callback);
        };
        /**
         * Updates the ApplicationRole with the passed data. Only the groups and default groups setting of the
         * role may be updated. Requests to change the key or the name of the role will be silently ignored.
         *
         * Optional: If versionHash is passed through the If-Match header the request will be rejected if not the
         * same as serverthe hash of the version to update. Optional Param
         *
         * @method put
         * @memberOf Applicationrole#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.key key
         * @param {string} options.If-Match If-Match the hash of the version to update. Optional Param
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.put = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "key": args[0],
                "If-Match": args[1],
                "token": args[2]
            };
            return this.makeRequest('put', 'PUT', 'rest/api/2/applicationrole/:key', options, callback);
        };
        /**
         * Updates the ApplicationRoles with the passed data if the version hash is the same as the server.
         * Only the groups and default groups setting of the role may be updated. Requests to change the key
         * or the name of the role will be silently ignored. It is acceptable to pass only the roles that are updated
         * as roles that are present in the server but not in data to update with, will not be deleted.
         *
         * @method putBulk
         * @memberOf Applicationrole#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.If-Match If-Match
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.putBulk = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "If-Match": args[0],
                "token": args[1]
            };
            return this.makeRequest('putBulk', 'PUT', 'rest/api/2/applicationrole', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Applicationrole = Applicationrole;
