"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseResource_1 = require("./baseResource");
/**
 * CommentProperties
 *
 * @constructor CommentProperties
 * @property {IConnector} connector the jira connector instance
 */
class CommentProperties extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Removes the property from the comment identified by the key or by the id. Ths user removing the property is required
         * to have permissions to administer the comment.
         *
         * @method deleteProperty
         * @memberOf CommentProperties#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.commentId commentId
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
            return this.makeRequest('deleteProperty', 'DELETE', 'rest/api/2/comment/:commentId/properties/:propertyKey', options, callback);
        };
        /**
         * Returns the keys of all properties for the comment identified by the key or by the id.
         *
         * @method getPropertiesKeys
         * @memberOf CommentProperties#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.commentId commentId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getPropertiesKeys = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('getPropertiesKeys', 'GET', 'rest/api/2/comment/:commentId/properties', options, callback);
        };
        /**
         * Returns the value of the property with a given key from the comment identified by the key or by the id. The user who retrieves
         * the property is required to have permissions to read the comment.
         *
         * @method getProperty
         * @memberOf CommentProperties#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.commentId commentId
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
            return this.makeRequest('getProperty', 'GET', 'rest/api/2/comment/:commentId/properties/:propertyKey', options, callback);
        };
        /**
         * Sets the value of the specified comment's property.
         *
         * You can use this resource to store a custom data against the comment identified by the key or by the id. The user
         * who stores the data is required to have permissions to administer the comment.
         *
         *
         * @method setProperty
         * @memberOf CommentProperties#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.commentId commentId
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
            return this.makeRequest('setProperty', 'PUT', 'rest/api/2/comment/:commentId/properties/:propertyKey', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.CommentProperties = CommentProperties;
