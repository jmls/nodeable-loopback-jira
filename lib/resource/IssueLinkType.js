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
 * IssueLinkType Rest resource to retrieve a list of issue link types.
 *
 * @constructor IssueLinkType
 * @property {IConnector} connector the jira connector instance
 */
class IssueLinkType extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Create a new issue link type.
         *
         * @method create
         * @memberOf IssueLinkType#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.name name
         * @param {string} options.inward inward
         * @param {string} options.outward outward
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.create = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('create', 'POST', 'rest/api/2/issueLinkType', options);
        });
        /**
         * Delete the specified issue link type.
         *
         * @method deleteById
         * @memberOf IssueLinkType#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.issueLinkTypeId issueLinkTypeId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.deleteById = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('deleteById', 'DELETE', 'rest/api/2/issueLinkType/:issueLinkTypeId', options);
        });
        /**
         * Returns for a given issue link type id all information about this issue link type.
         *
         * @method findById
         * @memberOf IssueLinkType#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.issueLinkTypeId issueLinkTypeId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.findById = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('findById', 'GET', 'rest/api/2/issueLinkType/:issueLinkTypeId', options);
        });
        /**
         * Returns a list of available issue link types, if issue linking is enabled.
         * Each issue link type has an id, a name and a label for the outward and inward link relationship.
         *
         * @method getIssueLinkTypes
         * @memberOf IssueLinkType#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getIssueLinkTypes = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getIssueLinkTypes', 'GET', 'rest/api/2/issueLinkType', options);
        });
        /**
         * Update the specified issue link type.
         *
         * @method update
         * @memberOf IssueLinkType#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.issueLinkTypeId issueLinkTypeId
         * @param {string} options.id id
         * @param {string} options.name name
         * @param {string} options.inward inward
         * @param {string} options.outward outward
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.update = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('update', 'PUT', 'rest/api/2/issueLinkType/:issueLinkTypeId', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.IssueLinkType = IssueLinkType;
