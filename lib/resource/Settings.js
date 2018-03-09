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
 * Settings REST resource for changing the JIRA system settings
 *
 * @constructor Settings
 * @property {IConnector} connector the jira connector instance
 */
class Settings extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Returns the default system columns for issue navigator. Admin permission will be required.
         *
         * @method getIssueNavigatorDefaultColumns
         * @memberOf Settings#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getIssueNavigatorDefaultColumns = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getIssueNavigatorDefaultColumns', 'GET', 'rest/api/2/settings/columns', options);
        });
        /**
         * Sets the base URL that is configured for this JIRA instance.
         *
         * @method setBaseURL
         * @memberOf Settings#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.setBaseURL = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('setBaseURL', 'PUT', 'rest/api/2/settings/baseUrl', options);
        });
        /**
         * Sets the default system columns for issue navigator. Admin permission will be required.
         *
         * @method setIssueNavigatorDefaultColumns
         * @memberOf Settings#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.setIssueNavigatorDefaultColumns = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('setIssueNavigatorDefaultColumns', 'PUT', 'rest/api/2/settings/columns', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.Settings = Settings;
