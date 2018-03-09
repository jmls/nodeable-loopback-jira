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
 * Component
 *
 * @constructor Component
 * @property {IConnector} connector the jira connector instance
 */
class Component extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Create a component via POST.
         *
         * @method create
         * @memberOf Component#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.name name
         * @param {string} options.description description
         * @param {string} options.lead lead
         * @param {string} options.leadUserName leadUserName
         * @param {string} options.assigneeType assigneeType
         * @param {string} options.assignee assignee
         * @param {string} options.realAssigneeType realAssigneeType
         * @param {string} options.realAssignee realAssignee
         * @param {string} options.isAssigneeTypeValid isAssigneeTypeValid
         * @param {string} options.project project
         * @param {string} options.projectId projectId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.create = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('create', 'POST', 'rest/api/2/component', options);
        });
        /**
         * Delete a project component.The new component applied to issues whose 'id' component will be deleted.
         *                     If this value is null, then the 'id' component is simply removed from the related isues.
         *
         * @method delete
         * @memberOf Component#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.moveIssuesTo moveIssuesTo The new component applied to issues whose 'id' component will be deleted.
                         If this value is null, then the 'id' component is simply removed from the related isues.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.delete = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('delete', 'DELETE', 'rest/api/2/component/:id', options);
        });
        /**
         * Returns a project component.
         *
         * @method findById
         * @memberOf Component#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.findById = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('findById', 'GET', 'rest/api/2/component/:id', options);
        });
        /**
         * Returns counts of issues related to this component.
         *
         * @method getComponentRelatedIssues
         * @memberOf Component#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getComponentRelatedIssues = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getComponentRelatedIssues', 'GET', 'rest/api/2/component/:id/relatedIssueCounts', options);
        });
        /**
         * Modify a component via PUT. Any fields present in the PUT will override existing values. As a convenience, if a field
         * is not present, it is silently ignored.
         *
         * If leadUserName is an empty string ("") the component lead will be removed.
         *
         * @method update
         * @memberOf Component#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.name name
         * @param {string} options.description description
         * @param {string} options.lead lead
         * @param {string} options.leadUserName leadUserName
         * @param {string} options.assigneeType assigneeType
         * @param {string} options.assignee assignee
         * @param {string} options.realAssigneeType realAssigneeType
         * @param {string} options.realAssignee realAssignee
         * @param {string} options.isAssigneeTypeValid isAssigneeTypeValid
         * @param {string} options.project project
         * @param {string} options.projectId projectId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.update = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('update', 'PUT', 'rest/api/2/component/:id', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.Component = Component;
