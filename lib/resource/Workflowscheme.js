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
 * Workflowscheme
 *
 * @constructor Workflowscheme
 * @property {IConnector} connector the jira connector instance
 */
class Workflowscheme extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Create a draft for the passed scheme. The draft will be a copy of the state of the parent.
         *
         * @method createDraftForParent
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.createDraftForParent = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('createDraftForParent', 'POST', 'rest/api/2/workflowscheme/:id/createdraft', options);
        });
        /**
         * Create a new workflow scheme.
         *
         * The body contains a representation of the new scheme. Values not passed are assumed to be set to their defaults.
         *
         * @method createScheme
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.name name
         * @param {string} options.description description
         * @param {string} options.defaultWorkflow defaultWorkflow
         * @param {string} options.issueTypeMappings issueTypeMappings
         * @param {string} options.originalDefaultWorkflow originalDefaultWorkflow
         * @param {string} options.originalIssueTypeMappings originalIssueTypeMappings
         * @param {string} options.draft draft
         * @param {string} options.lastModifiedUser lastModifiedUser
         * @param {string} options.lastModified lastModified
         * @param {string} options.updateDraftIfNeeded updateDraftIfNeeded
         * @param {string} options.issueTypes issueTypes
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.createScheme = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('createScheme', 'POST', 'rest/api/2/workflowscheme', options);
        });
        /**
         * Remove the default workflow from the passed workflow scheme.when true will create and return a draft when the workflow scheme cannot be edited
         *                            (e.g. when it is being used by a project).
         *
         * @method deleteDefault
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.updateDraftIfNeeded updateDraftIfNeeded when true will create and return a draft when the workflow scheme cannot be edited
                                (e.g. when it is being used by a project).
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.deleteDefault = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('deleteDefault', 'DELETE', 'rest/api/2/workflowscheme/:id/default', options);
        });
        /**
         * Delete the passed draft workflow scheme.
         *
         * @method deleteDraftById
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.deleteDraftById = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('deleteDraftById', 'DELETE', 'rest/api/2/workflowscheme/:id/draft', options);
        });
        /**
         * Remove the default workflow from the passed draft workflow scheme.
         *
         * @method deleteDraftDefault
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.deleteDraftDefault = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('deleteDraftDefault', 'DELETE', 'rest/api/2/workflowscheme/:id/draft/default', options);
        });
        /**
         * Remove the specified issue type mapping from the draft scheme.
         *
         * @method deleteDraftIssueType
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.issueType issueType
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.deleteDraftIssueType = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('deleteDraftIssueType', 'DELETE', 'rest/api/2/workflowscheme/:id/draft/issuetype/:issueType', options);
        });
        /**
         * Delete the passed workflow from the draft workflow scheme.the name of the workflow to delete.
         *
         * @method deleteDraftWorkflowMapping
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.workflowName workflowName the name of the workflow to delete.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.deleteDraftWorkflowMapping = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('deleteDraftWorkflowMapping', 'DELETE', 'rest/api/2/workflowscheme/:id/draft/workflow', options);
        });
        /**
         * Remove the specified issue type mapping from the scheme.when true will create and return a draft when the workflow scheme cannot be edited
         *                            (e.g. when it is being used by a project).
         *
         * @method deleteIssueType
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.issueType issueType
         * @param {string} options.updateDraftIfNeeded updateDraftIfNeeded when true will create and return a draft when the workflow scheme cannot be edited
                                (e.g. when it is being used by a project).
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.deleteIssueType = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('deleteIssueType', 'DELETE', 'rest/api/2/workflowscheme/:id/issuetype/:issueType', options);
        });
        /**
         * Delete the passed workflow scheme.
         *
         * @method deleteScheme
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.deleteScheme = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('deleteScheme', 'DELETE', 'rest/api/2/workflowscheme/:id', options);
        });
        /**
         * Delete the passed workflow from the workflow scheme.the name of the workflow to delete.flag to indicate if a draft should be created if necessary to delete the workflow
         *                            from the scheme.
         *
         * @method deleteWorkflowMapping
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.workflowName workflowName the name of the workflow to delete.
         * @param {string} options.updateDraftIfNeeded updateDraftIfNeeded flag to indicate if a draft should be created if necessary to delete the workflow
                                from the scheme.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.deleteWorkflowMapping = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('deleteWorkflowMapping', 'DELETE', 'rest/api/2/workflowscheme/:id/workflow', options);
        });
        /**
         * Returns the requested workflow scheme to the caller.Default: falsewhen true indicates that a scheme's draft, if it exists, should be queried instead of
         *                            the scheme itself.
         *
         * @method getById
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.returnDraftIfExists returnDraftIfExists Default: falsewhen true indicates that a scheme's draft, if it exists, should be queried instead of
                                the scheme itself.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getById = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getById', 'GET', 'rest/api/2/workflowscheme/:id', options);
        });
        /**
         * Return the default workflow from the passed workflow scheme.Default: falsewhen true indicates that a scheme's draft, if it exists, should be queried instead of
         *                            the scheme itself.
         *
         * @method getDefault
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.returnDraftIfExists returnDraftIfExists Default: falsewhen true indicates that a scheme's draft, if it exists, should be queried instead of
                                the scheme itself.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getDefault = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getDefault', 'GET', 'rest/api/2/workflowscheme/:id/default', options);
        });
        /**
         * Returns the requested draft workflow scheme to the caller.
         *
         * @method getDraftById
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getDraftById = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getDraftById', 'GET', 'rest/api/2/workflowscheme/:id/draft', options);
        });
        /**
         * Return the default workflow from the passed draft workflow scheme to the caller.
         *
         * @method getDraftDefault
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getDraftDefault = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getDraftDefault', 'GET', 'rest/api/2/workflowscheme/:id/draft/default', options);
        });
        /**
         * Returns the issue type mapping for the passed draft workflow scheme.
         *
         * @method getDraftIssueType
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.issueType issueType
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getDraftIssueType = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getDraftIssueType', 'GET', 'rest/api/2/workflowscheme/:id/draft/issuetype/:issueType', options);
        });
        /**
         * Returns the draft workflow mappings or requested mapping to the caller.the workflow mapping to return. Null can be passed to return all mappings. Must be a valid workflow name.
         *
         * @method getDraftWorkflow
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.workflowName workflowName the workflow mapping to return. Null can be passed to return all mappings. Must be a valid workflow name.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getDraftWorkflow = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getDraftWorkflow', 'GET', 'rest/api/2/workflowscheme/:id/draft/workflow', options);
        });
        /**
         * Returns the issue type mapping for the passed workflow scheme.Default: falsewhen true indicates that a scheme's draft, if it exists, should be queried instead of
         *                            the scheme itself.
         *
         * @method getIssueType
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.issueType issueType
         * @param {string} options.returnDraftIfExists returnDraftIfExists Default: falsewhen true indicates that a scheme's draft, if it exists, should be queried instead of
                                the scheme itself.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getIssueType = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getIssueType', 'GET', 'rest/api/2/workflowscheme/:id/issuetype/:issueType', options);
        });
        /**
         * Returns the workflow mappings or requested mapping to the caller for the passed scheme.the workflow mapping to return. Null can be passed to return all mappings. Must be a valid workflow name.Default: falsewhen true indicates that a scheme's draft, if it exists, should be queried instead of
         *                            the scheme itself.
         *
         * @method getWorkflow
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.workflowName workflowName the workflow mapping to return. Null can be passed to return all mappings. Must be a valid workflow name.
         * @param {string} options.returnDraftIfExists returnDraftIfExists Default: falsewhen true indicates that a scheme's draft, if it exists, should be queried instead of
                                the scheme itself.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getWorkflow = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getWorkflow', 'GET', 'rest/api/2/workflowscheme/:id/workflow', options);
        });
        /**
         * Set the issue type mapping for the passed draft scheme.
         *
         * The passed representation can have its updateDraftIfNeeded flag set to true to indicate that
         * the draft should be created/updated when the actual scheme cannot be edited.
         *
         * @method setDraftIssueType
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.issueType issueType
         * @param {string} options.issueType issueType
         * @param {string} options.workflow workflow
         * @param {string} options.updateDraftIfNeeded updateDraftIfNeeded
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.setDraftIssueType = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('setDraftIssueType', 'PUT', 'rest/api/2/workflowscheme/:id/draft/issuetype/:issueType', options);
        });
        /**
         * Set the issue type mapping for the passed scheme.
         *
         * The passed representation can have its updateDraftIfNeeded flag set to true to indicate that
         * the draft should be created/updated when the actual scheme cannot be edited.
         *
         * @method setIssueType
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.issueType issueType
         * @param {string} options.issueType issueType
         * @param {string} options.workflow workflow
         * @param {string} options.updateDraftIfNeeded updateDraftIfNeeded
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.setIssueType = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('setIssueType', 'PUT', 'rest/api/2/workflowscheme/:id/issuetype/:issueType', options);
        });
        /**
         * Update the passed workflow scheme.
         *
         * The body of the request is a representation of the workflow scheme. Values not passed are assumed to indicate
         * no change for that field.
         *
         * The passed representation can have its updateDraftIfNeeded flag set to true to indicate that the draft
         * should be created and/or updated when the actual scheme cannot be edited (e.g. when the scheme is being used by
         * a project). Values not appearing the body will not be touched.
         *
         * @method update
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.id id
         * @param {string} options.name name
         * @param {string} options.description description
         * @param {string} options.defaultWorkflow defaultWorkflow
         * @param {string} options.issueTypeMappings issueTypeMappings
         * @param {string} options.originalDefaultWorkflow originalDefaultWorkflow
         * @param {string} options.originalIssueTypeMappings originalIssueTypeMappings
         * @param {string} options.draft draft
         * @param {string} options.lastModifiedUser lastModifiedUser
         * @param {string} options.lastModified lastModified
         * @param {string} options.updateDraftIfNeeded updateDraftIfNeeded
         * @param {string} options.issueTypes issueTypes
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.update = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('update', 'PUT', 'rest/api/2/workflowscheme/:id', options);
        });
        /**
         * Set the default workflow for the passed workflow scheme.
         *
         * The passed representation can have its
         * updateDraftIfNeeded flag set to true to indicate that the draft should be created/updated when the actual scheme
         * cannot be edited.
         *
         * @method updateDefault
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.workflow workflow
         * @param {string} options.updateDraftIfNeeded updateDraftIfNeeded
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.updateDefault = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('updateDefault', 'PUT', 'rest/api/2/workflowscheme/:id/default', options);
        });
        /**
         * Update a draft workflow scheme. The draft will created if necessary.
         *
         * The body is a representation of the workflow scheme. Values not passed are assumed to indicate no change for that field.
         *
         * @method updateDraft
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.id id
         * @param {string} options.name name
         * @param {string} options.description description
         * @param {string} options.defaultWorkflow defaultWorkflow
         * @param {string} options.issueTypeMappings issueTypeMappings
         * @param {string} options.originalDefaultWorkflow originalDefaultWorkflow
         * @param {string} options.originalIssueTypeMappings originalIssueTypeMappings
         * @param {string} options.draft draft
         * @param {string} options.lastModifiedUser lastModifiedUser
         * @param {string} options.lastModified lastModified
         * @param {string} options.updateDraftIfNeeded updateDraftIfNeeded
         * @param {string} options.issueTypes issueTypes
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.updateDraft = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('updateDraft', 'PUT', 'rest/api/2/workflowscheme/:id/draft', options);
        });
        /**
         * Set the default workflow for the passed draft workflow scheme.
         *
         * @method updateDraftDefault
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.workflow workflow
         * @param {string} options.updateDraftIfNeeded updateDraftIfNeeded
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.updateDraftDefault = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('updateDraftDefault', 'PUT', 'rest/api/2/workflowscheme/:id/draft/default', options);
        });
        /**
         * Update the draft scheme to include the passed mapping.
         *
         * The body is a representation of the workflow mapping.
         * Values not passed are assumed to indicate no change for that field.the name of the workflow mapping to update.
         *
         * @method updateDraftWorkflowMapping
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.workflowName workflowName the name of the workflow mapping to update.
         * @param {string} options.workflow workflow
         * @param {string} options.issueTypes issueTypes
         * @param {string} options.defaultMapping defaultMapping
         * @param {string} options.updateDraftIfNeeded updateDraftIfNeeded
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.updateDraftWorkflowMapping = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('updateDraftWorkflowMapping', 'PUT', 'rest/api/2/workflowscheme/:id/draft/workflow', options);
        });
        /**
         * Update the scheme to include the passed mapping.
         *
         * The body is a representation of the workflow mapping.
         * Values not passed are assumed to indicate no change for that field.
         *
         * The passed representation can have its updateDraftIfNeeded flag set to true to indicate that the draft
         * should be created/updated when the actual scheme cannot be edited.the name of the workflow mapping to update.
         *
         * @method updateWorkflowMapping
         * @memberOf Workflowscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.workflowName workflowName the name of the workflow mapping to update.
         * @param {string} options.workflow workflow
         * @param {string} options.issueTypes issueTypes
         * @param {string} options.defaultMapping defaultMapping
         * @param {string} options.updateDraftIfNeeded updateDraftIfNeeded
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.updateWorkflowMapping = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('updateWorkflowMapping', 'PUT', 'rest/api/2/workflowscheme/:id/workflow', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.Workflowscheme = Workflowscheme;
