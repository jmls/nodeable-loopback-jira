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
 * Resolution
 *
 * @constructor Resolution
 * @property {IConnector} connector the jira connector instance
 */
class Resolution extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Returns a resolution.
         *
         * @method findById
         * @memberOf Resolution#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.findById = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('findById', 'GET', 'rest/api/2/resolution/:id', options);
        });
        /**
         * Returns a list of all resolutions.
         *
         * @method getResolutions
         * @memberOf Resolution#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getResolutions = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getResolutions', 'GET', 'rest/api/2/resolution', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.Resolution = Resolution;
