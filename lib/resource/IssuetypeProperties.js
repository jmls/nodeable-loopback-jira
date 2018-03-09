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
         * @return {Promise.<any>} result of api call
         */
        this.deleteProperty = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('deleteProperty', 'DELETE', 'rest/api/2/issuetype/:issueTypeId/properties/:propertyKey', options);
        });
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
         * @return {Promise.<any>} result of api call
         */
        this.getProperty = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getProperty', 'GET', 'rest/api/2/issuetype/:issueTypeId/properties/:propertyKey', options);
        });
        /**
         * Returns the keys of all properties for the issue type identified by the id.
         *
         * @method getPropertyKeys
         * @memberOf IssuetypeProperties#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.issueTypeId issueTypeId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getPropertyKeys = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getPropertyKeys', 'GET', 'rest/api/2/issuetype/:issueTypeId/properties', options);
        });
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
         * @return {Promise.<any>} result of api call
         */
        this.setProperty = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('setProperty', 'PUT', 'rest/api/2/issuetype/:issueTypeId/properties/:propertyKey', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.IssuetypeProperties = IssuetypeProperties;
