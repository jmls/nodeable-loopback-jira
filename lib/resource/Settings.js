"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getIssueNavigatorDefaultColumns = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('getIssueNavigatorDefaultColumns', 'GET', 'rest/api/2/settings/columns', options, callback);
        };
        /**
         * Sets the base URL that is configured for this JIRA instance.
         *
         * @method setBaseURL
         * @memberOf Settings#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.setBaseURL = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('setBaseURL', 'PUT', 'rest/api/2/settings/baseUrl', options, callback);
        };
        /**
         * Sets the default system columns for issue navigator. Admin permission will be required.
         *
         * @method setIssueNavigatorDefaultColumns
         * @memberOf Settings#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.setIssueNavigatorDefaultColumns = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('setIssueNavigatorDefaultColumns', 'PUT', 'rest/api/2/settings/columns', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Settings = Settings;
