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
         * @return {Promise.<any>} result of api call
         */
        this.createCustomField = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('createCustomField', 'POST', 'rest/api/2/field', options);
        });
        /**
         * Returns a list of all fields, both System and Custom
         *
         * @method getFields
         * @memberOf Field#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getFields = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getFields', 'GET', 'rest/api/2/field', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.Field = Field;
