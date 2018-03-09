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
         * @return {Promise.<any>} result of api call
         */
        this.getStatusCategories = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getStatusCategories', 'GET', 'rest/api/2/statuscategory', options);
        });
        /**
         * Returns a full representation of the StatusCategory having the given id or key
         *
         * @method getStatusCategory
         * @memberOf Statuscategory#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.idOrKey idOrKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getStatusCategory = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getStatusCategory', 'GET', 'rest/api/2/statuscategory/:idOrKey', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.Statuscategory = Statuscategory;
