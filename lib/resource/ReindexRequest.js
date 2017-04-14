"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getProgress = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "requestId": args[0],
                "token": args[1]
            };
            return this.makeRequest('getProgress', 'GET', 'rest/api/2/reindex/request/:requestId', options, callback);
        };
        /**
         * Retrieves the progress of a multiple reindex requests.  Only reindex requests that actually exist will be returned
         * in the results.the reindex request IDs.
         *
         * @method getProgressBulk
         * @memberOf ReindexRequest#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.requestId requestId the reindex request IDs.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getProgressBulk = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "requestId": args[0],
                "token": args[1]
            };
            return this.makeRequest('getProgressBulk', 'GET', 'rest/api/2/reindex/request/bulk', options, callback);
        };
        /**
         * Executes any pending reindex requests.  Returns a JSON array containing the IDs of the reindex requests
         * that are being processed.  Execution is asynchronous - progress of the returned tasks can be monitored through
         * other REST calls.
         *
         * @method processRequests
         * @memberOf ReindexRequest#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.processRequests = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "token": args[0]
            };
            return this.makeRequest('processRequests', 'POST', 'rest/api/2/reindex/request', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.ReindexRequest = ReindexRequest;
