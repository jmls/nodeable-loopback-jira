"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseResource_1 = require("./baseResource");
/**
 * Reindex REST resource for starting/stopping/querying indexing.
 *
 * @constructor Reindex
 * @property {IConnector} connector the jira connector instance
 */
class Reindex extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Returns information on the system reindexes.  If a reindex is currently taking place then information about this reindex is returned.
         * If there is no active index task, then returns information about the latest reindex task run, otherwise returns a 404
         * indicating that no reindex has taken place.the id of an indexing task you wish to obtain details on.  If omitted, then defaults to the standard behaviour and
         *               returns information on the active reindex task, or the last task to run if no reindex is taking place. .  If there is no
         *               reindexing task with that id then a 404 is returned.
         *
         * @method getReindexInfo
         * @memberOf Reindex#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.taskId taskId the id of an indexing task you wish to obtain details on.  If omitted, then defaults to the standard behaviour and
                   returns information on the active reindex task, or the last task to run if no reindex is taking place. .  If there is no
                   reindexing task with that id then a 404 is returned.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getReindexInfo = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "taskId": args[0],
                "token": args[1]
            };
            return this.makeRequest('getReindexInfo', 'GET', 'rest/api/2/reindex', options, callback);
        };
        /**
         * Returns information on the system reindexes.  If a reindex is currently taking place then information about this reindex is returned.
         * If there is no active index task, then returns information about the latest reindex task run, otherwise returns a 404
         * indicating that no reindex has taken place.the id of an indexing task you wish to obtain details on.  If omitted, then defaults to the standard behaviour and
         *               returns information on the active reindex task, or the last task to run if no reindex is taking place. .  If there is no
         *               reindexing task with that id then a 404 is returned.
         *
         * @method getReindexProgress
         * @memberOf Reindex#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.taskId taskId the id of an indexing task you wish to obtain details on.  If omitted, then defaults to the standard behaviour and
                   returns information on the active reindex task, or the last task to run if no reindex is taking place. .  If there is no
                   reindexing task with that id then a 404 is returned.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getReindexProgress = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "taskId": args[0],
                "token": args[1]
            };
            return this.makeRequest('getReindexProgress', 'GET', 'rest/api/2/reindex/progress', options, callback);
        };
        /**
         * Kicks off a reindex.  Need Admin permissions to perform this reindex.Case insensitive String indicating type of reindex.  If omitted, then defaults to BACKGROUND_PREFERRED.Default: falseIndicates that comments should also be reindexed. Not relevant for foreground reindex, where comments are always reindexed.Default: falseIndicates that changeHistory should also be reindexed. Not relevant for foreground reindex, where changeHistory is always reindexed.Default: falseIndicates that changeHistory should also be reindexed. Not relevant for foreground reindex, where changeHistory is always reindexed.
         *
         * @method reindex
         * @memberOf Reindex#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.type type Case insensitive String indicating type of reindex.  If omitted, then defaults to BACKGROUND_PREFERRED.
         * @param {string} options.indexComments indexComments Default: falseIndicates that comments should also be reindexed. Not relevant for foreground reindex, where comments are always reindexed.
         * @param {string} options.indexChangeHistory indexChangeHistory Default: falseIndicates that changeHistory should also be reindexed. Not relevant for foreground reindex, where changeHistory is always reindexed.
         * @param {string} options.indexWorklogs indexWorklogs Default: falseIndicates that changeHistory should also be reindexed. Not relevant for foreground reindex, where changeHistory is always reindexed.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.reindex = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "type": args[0],
                "indexComments": args[1],
                "indexChangeHistory": args[2],
                "indexWorklogs": args[3],
                "token": args[4]
            };
            return this.makeRequest('reindex', 'POST', 'rest/api/2/reindex', options, callback);
        };
        /**
         * Reindexes one or more individual issues.  Indexing is performed synchronously - the call returns when indexing of
         * the issues has completed or a failure occurs.
         *
         * Use either explicitly specified issue IDs or a JQL query to select issues to reindex.the IDs or keys of one or more issues to reindex.Default: falseIndicates that comments should also be reindexed.Default: falseIndicates that changeHistory should also be reindexed.Default: falseIndicates that changeHistory should also be reindexed.
         *
         * @method reindexIssues
         * @memberOf Reindex#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.issueId issueId the IDs or keys of one or more issues to reindex.
         * @param {string} options.indexComments indexComments Default: falseIndicates that comments should also be reindexed.
         * @param {string} options.indexChangeHistory indexChangeHistory Default: falseIndicates that changeHistory should also be reindexed.
         * @param {string} options.indexWorklogs indexWorklogs Default: falseIndicates that changeHistory should also be reindexed.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.reindexIssues = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "issueId": args[0],
                "indexComments": args[1],
                "indexChangeHistory": args[2],
                "indexWorklogs": args[3],
                "token": args[4]
            };
            return this.makeRequest('reindexIssues', 'POST', 'rest/api/2/reindex/issue', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Reindex = Reindex;
