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
 * Mypreferences Provide preferences of the currently logged in user.
 *
 * @constructor Mypreferences
 * @property {IConnector} connector the jira connector instance
 */
class Mypreferences extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Returns preference of the currently logged in user. Preference key must be provided as input parameter (key). The
         * value is returned exactly as it is. If key parameter is not provided or wrong - status code 404. If value is
         * found  - status code 200.- key of the preference to be returned.
         *
         * @method getPreference
         * @memberOf Mypreferences#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.key key - key of the preference to be returned.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getPreference = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getPreference', 'GET', 'rest/api/2/mypreferences', options);
        });
        /**
         * Removes preference of the currently logged in user. Preference key must be provided as input parameters (key). If
         * key parameter is not provided or wrong - status code 404. If preference is unset - status code 204.- key of the preference to be removed.
         *
         * @method removePreference
         * @memberOf Mypreferences#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.key key - key of the preference to be removed.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.removePreference = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('removePreference', 'DELETE', 'rest/api/2/mypreferences', options);
        });
        /**
         * Sets preference of the currently logged in user. Preference key must be provided as input parameters (key). Value
         * must be provided as post body. If key or value parameter is not provided - status code 404. If preference is set
         * - status code 204.- key of the preference to be set.
         *
         * @method setPreference
         * @memberOf Mypreferences#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.key key - key of the preference to be set.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.setPreference = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('setPreference', 'PUT', 'rest/api/2/mypreferences', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.Mypreferences = Mypreferences;
