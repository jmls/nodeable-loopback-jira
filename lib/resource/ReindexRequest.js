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
 * ReindexRequest REST resource for querying and executing reindex requests.
 *
 * @constructor ReindexRequest
 * @property {IConnector} connector the jira connector instance
 */
class ReindexRequest extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Retrieves the progress of a single reindex request.
         *
         * @method getProgress
         * @memberOf ReindexRequest#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.requestId requestId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getProgress = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getProgress', 'GET', 'rest/api/2/reindex/request/:requestId', options);
        });
        /**
         * Retrieves the progress of a multiple reindex requests.  Only reindex requests that actually exist will be returned
         * in the results.the reindex request IDs.
         *
         * @method getProgressBulk
         * @memberOf ReindexRequest#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.requestId requestId the reindex request IDs.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getProgressBulk = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getProgressBulk', 'GET', 'rest/api/2/reindex/request/bulk', options);
        });
        /**
         * Executes any pending reindex requests.  Returns a JSON array containing the IDs of the reindex requests
         * that are being processed.  Execution is asynchronous - progress of the returned tasks can be monitored through
         * other REST calls.
         *
         * @method processRequests
         * @memberOf ReindexRequest#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.processRequests = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('processRequests', 'POST', 'rest/api/2/reindex/request', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.ReindexRequest = ReindexRequest;
