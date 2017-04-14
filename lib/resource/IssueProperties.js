"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseResource_1 = require("./baseResource");
/**
 * IssueProperties
 *
 * @constructor IssueProperties
 * @property {IConnector} connector the jira connector instance
 */
class IssueProperties extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Removes the property from the issue identified by the key or by the id. Ths user removing the property is required
         * to have permissions to edit the issue.
         *
         * @method deleteProperty
         * @memberOf IssueProperties#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.issueIdOrKey issueIdOrKey
         * @param {string} options.propertyKey propertyKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.deleteProperty = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "issueIdOrKey": args[0],
                "propertyKey": args[1],
                "token": args[2]
            };
            return this.makeRequest('deleteProperty', 'DELETE', 'rest/api/2/issue/:issueIdOrKey/properties/:propertyKey', options, callback);
        };
        /**
         * Returns the keys of all properties for the issue identified by the key or by the id.
         *
         * @method getPropertiesKeys
         * @memberOf IssueProperties#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.issueIdOrKey issueIdOrKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getPropertiesKeys = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "issueIdOrKey": args[0],
                "token": args[1]
            };
            return this.makeRequest('getPropertiesKeys', 'GET', 'rest/api/2/issue/:issueIdOrKey/properties', options, callback);
        };
        /**
         * Returns the value of the property with a given key from the issue identified by the key or by the id. The user who retrieves
         * the property is required to have permissions to read the issue.
         *
         * @method getProperty
         * @memberOf IssueProperties#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.issueIdOrKey issueIdOrKey
         * @param {string} options.propertyKey propertyKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getProperty = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "issueIdOrKey": args[0],
                "propertyKey": args[1],
                "token": args[2]
            };
            return this.makeRequest('getProperty', 'GET', 'rest/api/2/issue/:issueIdOrKey/properties/:propertyKey', options, callback);
        };
        /**
         * Sets the value of the specified issue's property.
         *
         * You can use this resource to store a custom data against the issue identified by the key or by the id. The user
         * who stores the data is required to have permissions to edit the issue.
         *
         *
         * @method setProperty
         * @memberOf IssueProperties#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.issueIdOrKey issueIdOrKey
         * @param {string} options.propertyKey propertyKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.setProperty = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "issueIdOrKey": args[0],
                "propertyKey": args[1],
                "token": args[2]
            };
            return this.makeRequest('setProperty', 'PUT', 'rest/api/2/issue/:issueIdOrKey/properties/:propertyKey', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.IssueProperties = IssueProperties;
