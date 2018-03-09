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
 * IssueSubtask
 *
 * @constructor IssueSubtask
 * @property {IConnector} connector the jira connector instance
 */
class IssueSubtask extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         *
         *
         * @method canMoveSubTask
         * @memberOf IssueSubtask#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.issueIdOrKey issueIdOrKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.canMoveSubTask = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('canMoveSubTask', 'GET', 'rest/api/2/issue/:issueIdOrKey/subtask/move', options);
        });
        /**
         * Returns an issue's subtask list
         *
         * @method getSubTasks
         * @memberOf IssueSubtask#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.issueIdOrKey issueIdOrKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getSubTasks = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getSubTasks', 'GET', 'rest/api/2/issue/:issueIdOrKey/subtask', options);
        });
        /**
         * Reorders an issue's subtasks by moving the subtask at index "from"
         * to index "to".
         *
         * @method moveSubTasks
         * @memberOf IssueSubtask#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.issueIdOrKey issueIdOrKey
         * @param {string} options.current current
         * @param {string} options.original original
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.moveSubTasks = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('moveSubTasks', 'POST', 'rest/api/2/issue/:issueIdOrKey/subtask/move', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.IssueSubtask = IssueSubtask;
