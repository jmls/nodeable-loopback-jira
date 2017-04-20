"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseResource_1 = require("./baseResource");
/**
 * Statuscategory
 *
 * @constructor Statuscategory
 * @property {IConnector} connector the jira connector instance
 */
class Statuscategory extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Returns a list of all status categories
         *
         * @method getStatusCategories
         * @memberOf Statuscategory#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getStatusCategories = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('getStatusCategories', 'GET', 'rest/api/2/statuscategory', options, callback);
        };
        /**
         * Returns a full representation of the StatusCategory having the given id or key
         *
         * @method getStatusCategory
         * @memberOf Statuscategory#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.idOrKey idOrKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getStatusCategory = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('getStatusCategory', 'GET', 'rest/api/2/statuscategory/:idOrKey', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Statuscategory = Statuscategory;
