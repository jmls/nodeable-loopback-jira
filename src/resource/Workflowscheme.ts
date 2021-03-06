import {baseResource} from './baseResource';

/**
 * Workflowscheme 
 *
 * @constructor Workflowscheme
 * @property {IConnector} connector the jira connector instance
 */

export class Workflowscheme extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Create a draft for the passed scheme. The draft will be a copy of the state of the parent.
     *
     * @method createDraftForParent
     * @memberOf Workflowscheme#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    createDraftForParent = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('createDraftForParent','POST','rest/api/2/workflowscheme/:id/createdraft',options,callback)
    };
    
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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    createScheme = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('createScheme','POST','rest/api/2/workflowscheme',options,callback)
    };
    
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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    deleteDefault = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('deleteDefault','DELETE','rest/api/2/workflowscheme/:id/default',options,callback)
    };
    
    /**
     * Delete the passed draft workflow scheme.
     *
     * @method deleteDraftById
     * @memberOf Workflowscheme#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    deleteDraftById = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('deleteDraftById','DELETE','rest/api/2/workflowscheme/:id/draft',options,callback)
    };
    
    /**
     * Remove the default workflow from the passed draft workflow scheme.
     *
     * @method deleteDraftDefault
     * @memberOf Workflowscheme#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    deleteDraftDefault = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('deleteDraftDefault','DELETE','rest/api/2/workflowscheme/:id/draft/default',options,callback)
    };
    
    /**
     * Remove the specified issue type mapping from the draft scheme.
     *
     * @method deleteDraftIssueType
     * @memberOf Workflowscheme#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.issueType issueType 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    deleteDraftIssueType = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('deleteDraftIssueType','DELETE','rest/api/2/workflowscheme/:id/draft/issuetype/:issueType',options,callback)
    };
    
    /**
     * Delete the passed workflow from the draft workflow scheme.the name of the workflow to delete.
     *
     * @method deleteDraftWorkflowMapping
     * @memberOf Workflowscheme#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.workflowName workflowName the name of the workflow to delete.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    deleteDraftWorkflowMapping = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('deleteDraftWorkflowMapping','DELETE','rest/api/2/workflowscheme/:id/draft/workflow',options,callback)
    };
    
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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    deleteIssueType = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('deleteIssueType','DELETE','rest/api/2/workflowscheme/:id/issuetype/:issueType',options,callback)
    };
    
    /**
     * Delete the passed workflow scheme.
     *
     * @method deleteScheme
     * @memberOf Workflowscheme#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    deleteScheme = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('deleteScheme','DELETE','rest/api/2/workflowscheme/:id',options,callback)
    };
    
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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    deleteWorkflowMapping = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('deleteWorkflowMapping','DELETE','rest/api/2/workflowscheme/:id/workflow',options,callback)
    };
    
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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getById = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getById','GET','rest/api/2/workflowscheme/:id',options,callback)
    };
    
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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getDefault = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getDefault','GET','rest/api/2/workflowscheme/:id/default',options,callback)
    };
    
    /**
     * Returns the requested draft workflow scheme to the caller.
     *
     * @method getDraftById
     * @memberOf Workflowscheme#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getDraftById = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getDraftById','GET','rest/api/2/workflowscheme/:id/draft',options,callback)
    };
    
    /**
     * Return the default workflow from the passed draft workflow scheme to the caller.
     *
     * @method getDraftDefault
     * @memberOf Workflowscheme#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getDraftDefault = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getDraftDefault','GET','rest/api/2/workflowscheme/:id/draft/default',options,callback)
    };
    
    /**
     * Returns the issue type mapping for the passed draft workflow scheme.
     *
     * @method getDraftIssueType
     * @memberOf Workflowscheme#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.issueType issueType 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getDraftIssueType = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getDraftIssueType','GET','rest/api/2/workflowscheme/:id/draft/issuetype/:issueType',options,callback)
    };
    
    /**
     * Returns the draft workflow mappings or requested mapping to the caller.the workflow mapping to return. Null can be passed to return all mappings. Must be a valid workflow name.
     *
     * @method getDraftWorkflow
     * @memberOf Workflowscheme#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.workflowName workflowName the workflow mapping to return. Null can be passed to return all mappings. Must be a valid workflow name.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getDraftWorkflow = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getDraftWorkflow','GET','rest/api/2/workflowscheme/:id/draft/workflow',options,callback)
    };
    
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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getIssueType = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getIssueType','GET','rest/api/2/workflowscheme/:id/issuetype/:issueType',options,callback)
    };
    
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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getWorkflow = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getWorkflow','GET','rest/api/2/workflowscheme/:id/workflow',options,callback)
    };
    
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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    setDraftIssueType = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('setDraftIssueType','PUT','rest/api/2/workflowscheme/:id/draft/issuetype/:issueType',options,callback)
    };
    
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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    setIssueType = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('setIssueType','PUT','rest/api/2/workflowscheme/:id/issuetype/:issueType',options,callback)
    };
    
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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    update = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('update','PUT','rest/api/2/workflowscheme/:id',options,callback)
    };
    
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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    updateDefault = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('updateDefault','PUT','rest/api/2/workflowscheme/:id/default',options,callback)
    };
    
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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    updateDraft = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('updateDraft','PUT','rest/api/2/workflowscheme/:id/draft',options,callback)
    };
    
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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    updateDraftDefault = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('updateDraftDefault','PUT','rest/api/2/workflowscheme/:id/draft/default',options,callback)
    };
    
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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    updateDraftWorkflowMapping = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('updateDraftWorkflowMapping','PUT','rest/api/2/workflowscheme/:id/draft/workflow',options,callback)
    };
    
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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    updateWorkflowMapping = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('updateWorkflowMapping','PUT','rest/api/2/workflowscheme/:id/workflow',options,callback)
    };
    

}
