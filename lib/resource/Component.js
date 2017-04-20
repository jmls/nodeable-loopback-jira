"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.create = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('create', 'POST', 'rest/api/2/component', options, callback);
        };
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
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.delete = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('delete', 'DELETE', 'rest/api/2/component/:id', options, callback);
        };
        /**
         * Returns a project component.
         *
         * @method findById
         * @memberOf Component#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.findById = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('findById', 'GET', 'rest/api/2/component/:id', options, callback);
        };
        /**
         * Returns counts of issues related to this component.
         *
         * @method getComponentRelatedIssues
         * @memberOf Component#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getComponentRelatedIssues = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('getComponentRelatedIssues', 'GET', 'rest/api/2/component/:id/relatedIssueCounts', options, callback);
        };
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
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.update = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('update', 'PUT', 'rest/api/2/component/:id', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Component = Component;
