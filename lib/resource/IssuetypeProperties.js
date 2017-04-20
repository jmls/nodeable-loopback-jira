"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseResource_1 = require("./baseResource");
/**
 * IssuetypeProperties This resource allows to store custom properties for issue types.
 *
 * @constructor IssuetypeProperties
 * @property {IConnector} connector the jira connector instance
 */
class IssuetypeProperties extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Removes the property from the issue type identified by the id. Ths user removing the property is required
         * to have permissions to edit the issue type.
         *
         * @method deleteProperty
         * @memberOf IssuetypeProperties#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.issueTypeId issueTypeId
         * @param {string} options.propertyKey propertyKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.deleteProperty = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('deleteProperty', 'DELETE', 'rest/api/2/issuetype/:issueTypeId/properties/:propertyKey', options, callback);
        };
        /**
         * Returns the value of the property with a given key from the issue type identified by the id. The user who retrieves
         * the property is required to have permissions to view the issue type.
         *
         * @method getProperty
         * @memberOf IssuetypeProperties#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.issueTypeId issueTypeId
         * @param {string} options.propertyKey propertyKey
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
            return this.makeRequest('getProperty', 'GET', 'rest/api/2/issuetype/:issueTypeId/properties/:propertyKey', options, callback);
        };
        /**
         * Returns the keys of all properties for the issue type identified by the id.
         *
         * @method getPropertyKeys
         * @memberOf IssuetypeProperties#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.issueTypeId issueTypeId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getPropertyKeys = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('getPropertyKeys', 'GET', 'rest/api/2/issuetype/:issueTypeId/properties', options, callback);
        };
        /**
         * Sets the value of the specified issue type's property.
         *
         * You can use this resource to store a custom data against an issue type identified by the id. The user
         * who stores the data is required to have permissions to edit an issue type.
         *
         *
         * @method setProperty
         * @memberOf IssuetypeProperties#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.issueTypeId issueTypeId
         * @param {string} options.propertyKey propertyKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.setProperty = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('setProperty', 'PUT', 'rest/api/2/issuetype/:issueTypeId/properties/:propertyKey', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.IssuetypeProperties = IssuetypeProperties;
