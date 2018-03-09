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
 * Attachment
 *
 * @constructor Attachment
 * @property {IConnector} connector the jira connector instance
 */
class Attachment extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Remove an attachment from an issue.
         *
         * @method deleteById
         * @memberOf Attachment#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.deleteById = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('deleteById', 'DELETE', 'rest/api/2/attachment/:id', options);
        });
        /**
         * Tries to expand an attachment. Output is human-readable and subject to change.
         *
         * @method expandForHumans
         * @memberOf Attachment#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.expandForHumans = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('expandForHumans', 'GET', 'rest/api/2/attachment/:id/expand/human', options);
        });
        /**
         * Tries to expand an attachment. Output is raw and should be backwards-compatible through the course of time.
         *
         * @method expandForMachines
         * @memberOf Attachment#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.expandForMachines = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('expandForMachines', 'GET', 'rest/api/2/attachment/:id/expand/raw', options);
        });
        /**
         * Returns the meta-data for an attachment, including the URI of the actual attached file.
         *
         * @method findById
         * @memberOf Attachment#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.findById = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('findById', 'GET', 'rest/api/2/attachment/:id', options);
        });
        /**
         * Returns the meta information for an attachments, specifically if they are enabled and the maximum upload size
         * allowed.
         *
         * @method getAttachmentMeta
         * @memberOf Attachment#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getAttachmentMeta = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getAttachmentMeta', 'GET', 'rest/api/2/attachment/meta', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.Attachment = Attachment;
