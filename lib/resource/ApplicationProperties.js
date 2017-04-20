"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseResource_1 = require("./baseResource");
/**
 * ApplicationProperties
 *
 * @constructor ApplicationProperties
 * @property {IConnector} connector the jira connector instance
 */
class ApplicationProperties extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Returns the properties that are displayed on the "General Configuration > Advanced Settings" page.
         *
         * @method getAdvancedSettings
         * @memberOf ApplicationProperties#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getAdvancedSettings = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('getAdvancedSettings', 'GET', 'rest/api/2/application-properties/advanced-settings', options, callback);
        };
        /**
         * Returns an application property.a String containing the property keywhen fetching a list specifies the permission level of all items in the list
         *                        see {@link com.atlassian.jira.bc.admin.ApplicationPropertiesService.EditPermissionLevel}when fetching a list allows the list to be filtered by the property's start of key
         *                        e.g. "jira.lf.*" whould fetch only those permissions that are editable and whose keys start with
         *                        "jira.lf.". This is a regex.
         *
         * @method getProperty
         * @memberOf ApplicationProperties#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.key key a String containing the property key
         * @param {string} options.permissionLevel permissionLevel when fetching a list specifies the permission level of all items in the list
                            see {@link com.atlassian.jira.bc.admin.ApplicationPropertiesService.EditPermissionLevel}
         * @param {string} options.keyFilter keyFilter when fetching a list allows the list to be filtered by the property's start of key
                            e.g. "jira.lf.*" whould fetch only those permissions that are editable and whose keys start with
                            "jira.lf.". This is a regex.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getProperty = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('getProperty', 'GET', 'rest/api/2/application-properties', options, callback);
        };
        /**
         * Modify an application property via PUT. The "value" field present in the PUT will override the existing value.
         *
         * @method setPropertyViaRestfulTable
         * @memberOf ApplicationProperties#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.id id
         * @param {string} options.value value
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.setPropertyViaRestfulTable = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('setPropertyViaRestfulTable', 'PUT', 'rest/api/2/application-properties/:id', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.ApplicationProperties = ApplicationProperties;
