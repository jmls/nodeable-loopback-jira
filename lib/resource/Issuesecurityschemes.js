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
 * Issuesecurityschemes REST resource that allows to view security schemes defined in the product.
 *
 * @constructor Issuesecurityschemes
 * @property {IConnector} connector the jira connector instance
 */
class Issuesecurityschemes extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Returns the issue security scheme along with that are defined.
         *
         * @method getIssueSecurityScheme
         * @memberOf Issuesecurityschemes#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getIssueSecurityScheme = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getIssueSecurityScheme', 'GET', 'rest/api/2/issuesecurityschemes/:id', options);
        });
        /**
         * Returns all issue security schemes that are defined.
         *
         * @method getIssueSecuritySchemes
         * @memberOf Issuesecurityschemes#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getIssueSecuritySchemes = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getIssueSecuritySchemes', 'GET', 'rest/api/2/issuesecurityschemes', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.Issuesecurityschemes = Issuesecurityschemes;
