"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.create = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "data": args[0]
            };
            return this.makeRequest('create', 'POST', 'rest/api/2/issueLinkType', options, callback);
        };
        /**
         * Delete the specified issue link type.
         *
         * @method deleteById
         * @memberOf IssueLinkType#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.issueLinkTypeId issueLinkTypeId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.deleteById = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "issueLinkTypeId": args[0],
                "token": args[1]
            };
            return this.makeRequest('deleteById', 'DELETE', 'rest/api/2/issueLinkType/:issueLinkTypeId', options, callback);
        };
        /**
         * Returns for a given issue link type id all information about this issue link type.
         *
         * @method findById
         * @memberOf IssueLinkType#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.issueLinkTypeId issueLinkTypeId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.findById = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "issueLinkTypeId": args[0],
                "token": args[1]
            };
            return this.makeRequest('findById', 'GET', 'rest/api/2/issueLinkType/:issueLinkTypeId', options, callback);
        };
        /**
         * Returns a list of available issue link types, if issue linking is enabled.
         * Each issue link type has an id, a name and a label for the outward and inward link relationship.
         *
         * @method getIssueLinkTypes
         * @memberOf IssueLinkType#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getIssueLinkTypes = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "token": args[0]
            };
            return this.makeRequest('getIssueLinkTypes', 'GET', 'rest/api/2/issueLinkType', options, callback);
        };
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
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.update = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "issueLinkTypeId": args[0],
                "data": args[1]
            };
            return this.makeRequest('update', 'PUT', 'rest/api/2/issueLinkType/:issueLinkTypeId', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.IssueLinkType = IssueLinkType;
