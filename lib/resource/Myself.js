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
 * Myself Currently logged user resource
 *
 * @constructor Myself
 * @property {IConnector} connector the jira connector instance
 */
class Myself extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Modify caller password.
         *
         * @method changeMyPassword
         * @memberOf Myself#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.password password
         * @param {string} options.currentPassword currentPassword
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.changeMyPassword = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('changeMyPassword', 'PUT', 'rest/api/2/myself/password', options);
        });
        /**
         * Returns currently logged user. This resource cannot be accessed anonymously.
         *
         * @method getUser
         * @memberOf Myself#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getUser = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getUser', 'GET', 'rest/api/2/myself', options);
        });
        /**
         * Modify currently logged user. The "value" fields present will override the existing value.
         * Fields skipped in request will not be changed. Only email and display name can be change that way.
         * Requires user password.
         *
         * @method updateUser
         * @memberOf Myself#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.key key
         * @param {string} options.name name
         * @param {string} options.password password
         * @param {string} options.emailAddress emailAddress
         * @param {string} options.displayName displayName
         * @param {string} options.notification notification
         * @param {string} options.applicationKeys applicationKeys
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.updateUser = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('updateUser', 'PUT', 'rest/api/2/myself', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.Myself = Myself;
