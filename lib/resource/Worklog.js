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
 * Worklog
 *
 * @constructor Worklog
 * @property {IConnector} connector the jira connector instance
 */
class Worklog extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Returns worklogs id and delete time of worklogs that was deleted since given time.
         * The returns set of worklogs is limited to 1000 elements.
         * This API will not return worklogs deleted during last minute.Default: 0a date time in unix timestamp format since when deleted worklogs will be returned.
         *
         * @method getIdsOfWorklogsDeletedSince
         * @memberOf Worklog#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.since since Default: 0a date time in unix timestamp format since when deleted worklogs will be returned.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getIdsOfWorklogsDeletedSince = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getIdsOfWorklogsDeletedSince', 'GET', 'rest/api/2/worklog/deleted', options);
        });
        /**
         * Returns worklogs id and update time of worklogs that was updated since given time.
         * The returns set of worklogs is limited to 1000 elements.
         * This API will not return worklogs updated during last minute.Default: 0a date time in unix timestamp format since when updated worklogs will be returned.
         *
         * @method getIdsOfWorklogsModifiedSince
         * @memberOf Worklog#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.since since Default: 0a date time in unix timestamp format since when updated worklogs will be returned.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getIdsOfWorklogsModifiedSince = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getIdsOfWorklogsModifiedSince', 'GET', 'rest/api/2/worklog/updated', options);
        });
        /**
         * Returns worklogs for given worklog ids. Only worklogs to which the calling user has permissions, will be included in the result.
         * The returns set of worklogs is limited to 1000 elements.
         *
         * @method getWorklogsForIds
         * @memberOf Worklog#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.ids ids
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getWorklogsForIds = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getWorklogsForIds', 'POST', 'rest/api/2/worklog/list', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.Worklog = Worklog;
