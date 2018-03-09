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
         * @return {Promise.<any>} result of api call
         */
        this.get = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('get', 'GET', 'rest/api/2/applicationrole/:key', options);
        });
        /**
         * Returns all ApplicationRoles in the system. Will also return an ETag header containing a version hash of the
         * collection of ApplicationRoles.
         *
         * @method getAll
         * @memberOf Applicationrole#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getAll = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getAll', 'GET', 'rest/api/2/applicationrole', options);
        });
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
         * @param {string} options.key key
         * @param {string} options.groups groups
         * @param {string} options.name name
         * @param {string} options.defaultGroups defaultGroups
         * @param {string} options.selectedByDefault selectedByDefault
         * @param {string} options.defined defined
         * @param {string} options.numberOfSeats numberOfSeats
         * @param {string} options.remainingSeats remainingSeats
         * @param {string} options.userCount userCount
         * @param {string} options.userCountDescription userCountDescription
         * @param {string} options.hasUnlimitedSeats hasUnlimitedSeats
         * @param {string} options.platform platform
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.put = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('put', 'PUT', 'rest/api/2/applicationrole/:key', options);
        });
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
         * @return {Promise.<any>} result of api call
         */
        this.putBulk = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('putBulk', 'PUT', 'rest/api/2/applicationrole', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.Applicationrole = Applicationrole;
