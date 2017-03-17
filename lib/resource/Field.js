"use strict";
const baseResource_1 = require("./baseResource");
/**
 * Field
 *
 * @constructor Field
 * @property {IConnector} connector the jira connector instance
 */
class Field extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Creates a custom field using a definition (object encapsulating custom field data)
         *
         * @method createCustomField
         * @memberOf Field#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.name name
         * @param {string} options.description description
         * @param {string} options.type type
         * @param {string} options.searcherKey searcherKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.createCustomField = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "data": args[0]
            };
            return this.makeRequest('createCustomField', 'POST', 'rest/api/2/field', options, callback);
        };
        /**
         * Returns a list of all fields, both System and Custom
         *
         * @method getFields
         * @memberOf Field#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getFields = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "token": args[0]
            };
            return this.makeRequest('getFields', 'GET', 'rest/api/2/field', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Field = Field;
