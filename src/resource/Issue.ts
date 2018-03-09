import {baseResource} from './baseResource';

/**
 * Issue 
 *
 * @constructor Issue
 * @property {IConnector} connector the jira connector instance
 */

export class Issue extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Adds a new comment to an issue.optional flags: renderedBody (provides body rendered in HTML)
     *
     * @method addComment
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.expand expand optional flags: renderedBody (provides body rendered in HTML)
     * @param {string} options.id id 
     * @param {string} options.author author 
     * @param {string} options.body body 
     * @param {string} options.renderedBody renderedBody 
     * @param {string} options.updateAuthor updateAuthor 
     * @param {string} options.created created 
     * @param {string} options.updated updated 
     * @param {string} options.visibility visibility 
     * @param {string} options.properties properties 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    addComment = async options => {

        return this.makeRequest('addComment','POST','rest/api/2/issue/:issueIdOrKey/comment',options)
    };
    
    /**
     * Cast your vote in favour of an issue.
     *
     * @method addVote
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    addVote = async options => {

        return this.makeRequest('addVote','POST','rest/api/2/issue/:issueIdOrKey/votes',options)
    };
    
    /**
     * Adds a user to an issue's watcher list.
     *
     * @method addWatcher
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    addWatcher = async options => {

        return this.makeRequest('addWatcher','POST','rest/api/2/issue/:issueIdOrKey/watchers',options)
    };
    
    /**
     * Adds a new worklog entry to an issue.(optional) allows you to provide specific instructions to update the remaining time estimate of the issue.  Valid values are
     *                       
     *                       "new" - sets the estimate to a specific value
     *                       "leave"- leaves the estimate as is
     *                       "manual" - specify a specific amount to increase remaining estimate by
     *                       "auto"- Default option.  Will automatically adjust the value based on the new timeSpent specified on the worklog (required when "new" is selected for adjustEstimate) the new value for the remaining estimate field. e.g. "2d"(required when "manual" is selected for adjustEstimate) the amount to reduce the remaining estimate by e.g. "2d"
     *
     * @method addWorklog
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.adjustEstimate adjustEstimate (optional) allows you to provide specific instructions to update the remaining time estimate of the issue.  Valid values are
                       
                       "new" - sets the estimate to a specific value
                       "leave"- leaves the estimate as is
                       "manual" - specify a specific amount to increase remaining estimate by
                       "auto"- Default option.  Will automatically adjust the value based on the new timeSpent specified on the worklog 
     * @param {string} options.newEstimate newEstimate (required when "new" is selected for adjustEstimate) the new value for the remaining estimate field. e.g. "2d"
     * @param {string} options.reduceBy reduceBy (required when "manual" is selected for adjustEstimate) the amount to reduce the remaining estimate by e.g. "2d"
     * @param {string} options.author author 
     * @param {string} options.updateAuthor updateAuthor 
     * @param {string} options.comment comment 
     * @param {string} options.created created 
     * @param {string} options.updated updated 
     * @param {string} options.visibility visibility 
     * @param {string} options.started started 
     * @param {string} options.timeSpent timeSpent 
     * @param {string} options.timeSpentSeconds timeSpentSeconds 
     * @param {string} options.id id 
     * @param {string} options.issueId issueId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    addWorklog = async options => {

        return this.makeRequest('addWorklog','POST','rest/api/2/issue/:issueIdOrKey/worklog',options)
    };
    
    /**
     * Assigns an issue to a user.
     * You can use this resource to assign issues when the user submitting the request has the assign permission but not the
     * edit issue permission.
     * If the name is "-1" automatic assignee is used.  A null name will remove the assignee.
     *
     * @method assign
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.key key 
     * @param {string} options.name name 
     * @param {string} options.emailAddress emailAddress 
     * @param {string} options.avatarUrls avatarUrls 
     * @param {string} options.displayName displayName 
     * @param {string} options.active active 
     * @param {string} options.timeZone timeZone 
     * @param {string} options.locale locale 
     * @param {string} options.groups groups 
     * @param {string} options.applicationRoles applicationRoles 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    assign = async options => {

        return this.makeRequest('assign','PUT','rest/api/2/issue/:issueIdOrKey/assignee',options)
    };
    
    /**
     * Creates an issue or a sub-task from a JSON representation.
     * 
     * The fields that can be set on create, in either the fields parameter or the update parameter can be determined
     * using the /rest/api/2/issue/createmeta resource.
     * If a field is not configured to appear on the create screen, then it will not be in the createmeta, and a field
     * validation error will occur if it is submitted.
     * 
     * Creating a sub-task is similar to creating a regular issue, with two important differences:
     * 
     * the issueType field must correspond to a sub-task issue type (you can use
     * /issue/createmeta to discover sub-task issue types), and
     * you must provide a parent field in the issue create request containing the id or key of the
     * parent issue.
     * 
     *
     * @method create
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.transition transition 
     * @param {string} options.fields fields 
     * @param {string} options.update update 
     * @param {string} options.historyMetadata historyMetadata 
     * @param {string} options.properties properties 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    create = async options => {

        return this.makeRequest('create','POST','rest/api/2/issue',options)
    };
    
    /**
     * Creates issues or sub-tasks from a JSON representation.
     * 
     * Creates many issues in one bulk operation.
     * 
     * Creating a sub-task is similar to creating a regular issue. More details can be found in createIssue section:
     * {@link IssueResource#createIssue(IssueUpdateBean)}}
     *
     * @method createIssues
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueUpdates issueUpdates 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    createIssues = async options => {

        return this.makeRequest('createIssues','POST','rest/api/2/issue/bulk',options)
    };
    
    /**
     * Creates or updates a remote issue link from a JSON representation. If a globalId is provided and a remote issue link
     * exists with that globalId, the remote issue link is updated. Otherwise, the remote issue link is created.
     *
     * @method createOrUpdateRemoteIssueLink
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.globalId globalId 
     * @param {string} options.application application 
     * @param {string} options.relationship relationship 
     * @param {string} options.object object 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    createOrUpdateRemoteIssueLink = async options => {

        return this.makeRequest('createOrUpdateRemoteIssueLink','POST','rest/api/2/issue/:issueIdOrKey/remotelink',options)
    };
    
    /**
     * Delete an issue.
     * 
     * If the issue has subtasks you must set the parameter deleteSubtasks=true to delete the issue.
     * You cannot delete an issue without its subtasks also being deleted.a String of true or false indicating that any subtasks should also be deleted.  If the
     *                       issue has no subtasks this parameter is ignored.  If the issue has subtasks and this parameter is missing or false,
     *                       then the issue will not be deleted and an error will be returned.
     *
     * @method deleteById
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.deleteSubtasks deleteSubtasks a String of true or false indicating that any subtasks should also be deleted.  If the
                       issue has no subtasks this parameter is ignored.  If the issue has subtasks and this parameter is missing or false,
                       then the issue will not be deleted and an error will be returned.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    deleteById = async options => {

        return this.makeRequest('deleteById','DELETE','rest/api/2/issue/:issueIdOrKey',options)
    };
    
    /**
     * Deletes an existing comment .
     *
     * @method deleteComment
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    deleteComment = async options => {

        return this.makeRequest('deleteComment','DELETE','rest/api/2/issue/:issueIdOrKey/comment/:id',options)
    };
    
    /**
     * Delete the remote issue link with the given global id on the issue.the global id of the remote issue link
     *
     * @method deleteRemoteIssueLinkByGlobalId
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.globalId globalId the global id of the remote issue link
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    deleteRemoteIssueLinkByGlobalId = async options => {

        return this.makeRequest('deleteRemoteIssueLinkByGlobalId','DELETE','rest/api/2/issue/:issueIdOrKey/remotelink',options)
    };
    
    /**
     * Delete the remote issue link with the given id on the issue.
     *
     * @method deleteRemoteIssueLinkById
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.linkId linkId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    deleteRemoteIssueLinkById = async options => {

        return this.makeRequest('deleteRemoteIssueLinkById','DELETE','rest/api/2/issue/:issueIdOrKey/remotelink/:linkId',options)
    };
    
    /**
     * Deletes an existing worklog entry.(optional) allows you to provide specific instructions to update the remaining time estimate of the issue.  Valid values are
     *                       
     *                       "new" - sets the estimate to a specific value
     *                       "leave"- leaves the estimate as is
     *                       "manual" - specify a specific amount to increase remaining estimate by
     *                       "auto"- Default option.  Will automatically adjust the value based on the new timeSpent specified on the worklog (required when "new" is selected for adjustEstimate) the new value for the remaining estimate field. e.g. "2d"(required when "manual" is selected for adjustEstimate) the amount to increase the remaining estimate by e.g. "2d"
     *
     * @method deleteWorklog
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.id id 
     * @param {string} options.adjustEstimate adjustEstimate (optional) allows you to provide specific instructions to update the remaining time estimate of the issue.  Valid values are
                       
                       "new" - sets the estimate to a specific value
                       "leave"- leaves the estimate as is
                       "manual" - specify a specific amount to increase remaining estimate by
                       "auto"- Default option.  Will automatically adjust the value based on the new timeSpent specified on the worklog 
     * @param {string} options.newEstimate newEstimate (required when "new" is selected for adjustEstimate) the new value for the remaining estimate field. e.g. "2d"
     * @param {string} options.increaseBy increaseBy (required when "manual" is selected for adjustEstimate) the amount to increase the remaining estimate by e.g. "2d"
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    deleteWorklog = async options => {

        return this.makeRequest('deleteWorklog','DELETE','rest/api/2/issue/:issueIdOrKey/worklog/:id',options)
    };
    
    /**
     * Perform a transition on an issue.
     * When performing the transition you can update or set other issue fields.
     * 
     * The fields that can be set on transtion, in either the fields parameter or the update parameter can be determined
     * using the /rest/api/2/issue/{issueIdOrKey}/transitions?expand=transitions.fields resource.
     * If a field is not configured to appear on the transition screen, then it will not be in the transition metadata, and a field
     * validation error will occur if it is submitted.
     *
     * @method doTransition
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.transition transition 
     * @param {string} options.fields fields 
     * @param {string} options.update update 
     * @param {string} options.historyMetadata historyMetadata 
     * @param {string} options.properties properties 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    doTransition = async options => {

        return this.makeRequest('doTransition','POST','rest/api/2/issue/:issueIdOrKey/transitions',options)
    };
    
    /**
     * Edits an issue from a JSON representation.
     * 
     * The issue can either be updated by setting explicit the field value(s)
     * or by using an operation to change the field value.
     * 
     * The fields that can be updated, in either the fields parameter or the update parameter, can be determined
     * using the /rest/api/2/issue/{issueIdOrKey}/editmeta resource.
     * If a field is not configured to appear on the edit screen, then it will not be in the editmeta, and a field
     * validation error will occur if it is submitted.
     * 
     * Specifying a "field_id": field_value in the "fields" is a shorthand for a "set" operation in the "update" section.
     * Field should appear either in "fields" or "update", not in both.Default: truesend the email with notification that the issue was updated to users that watch it.
     *                    Admin or project admin permissions are required to disable the notification.
     *
     * @method editIssue
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.notifyUsers notifyUsers Default: truesend the email with notification that the issue was updated to users that watch it.
                    Admin or project admin permissions are required to disable the notification.
     * @param {string} options.transition transition 
     * @param {string} options.fields fields 
     * @param {string} options.update update 
     * @param {string} options.historyMetadata historyMetadata 
     * @param {string} options.properties properties 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    editIssue = async options => {

        return this.makeRequest('editIssue','PUT','rest/api/2/issue/:issueIdOrKey',options)
    };
    
    /**
     * Returns a full representation of the issue for the given issue key.
     * 
     * An issue JSON consists of the issue key, a collection of fields,
     * a link to the workflow transition sub-resource, and (optionally) the HTML rendered values of any fields that support it
     * (e.g. if wiki syntax is enabled for the description or comments).
     * 
     * The fields param (which can be specified multiple times) gives a comma-separated list of fields
     * to include in the response. This can be used to retrieve a subset of fields.
     * A particular field can be excluded by prefixing it with a minus.
     * 
     * By default, all (*all) fields are returned in this get-issue resource. Note: the default is different
     * when doing a jql search -- the default there is just navigable fields (*navigable).
     * 
     * *all - include all fields
     * *navigable - include just navigable fields
     * summary,comment - include just the summary and comments
     * -comment - include everything except comments (the default is *all for get-issue)
     * *all,-comment - include everything except comments
     * 
     * 
     * The {@code properties} param is similar to {@code fields} and specifies a comma-separated list of issue
     * properties to include. Unlike {@code fields}, properties are not included by default. To include them all
     * send {@code ?properties=*all}. You can also include only specified properties or exclude some properties
     * with a minus (-) sign.
     * 
     * 
     * {@code *all} - include all properties
     * {@code *all, -prop1} - include all properties except {@code prop1} 
     * {@code prop1, prop1} - include {@code prop1} and {@code prop2} properties 
     * 
     * 
     * JIRA will attempt to identify the issue by the issueIdOrKey path parameter. This can be an issue id,
     * or an issue key. If the issue cannot be found via an exact match, JIRA will also look for the issue in a case-insensitive way, or
     * by looking to see if the issue was moved. In either of these cases, the request will proceed as normal (a 302 or other redirect
     * will not be returned). The issue key contained in the response will indicate the current value of issue's key.
     * 
     * The expand param is used to include, hidden by default, parts of response. This can be used to include:
     * 
     * renderedFields - field values in HTML format
     * names - display name of each field
     * schema - schema for each field which describes a type of the field
     * transitions - all possible transitions for the given issue
     * operations - all possibles operations which may be applied on issue
     * editmeta - information about how each field may be edited. It contains field's schema as well.
     * changelog - history of all changes of the given issue
     * versionedRepresentations -
     * REST representations of all fields. Some field may contain more recent versions. RESET representations are numbered.
     * The greatest number always represents the most recent version. It is recommended that the most recent version is used.
     * version for these fields which provide a more recent REST representation.
     * After including versionedRepresentations "fields" field become hidden.
     * the list of fields to return for the issue. By default, all fields are returned.the list of properties to return for the issue. By default no properties are returned.
     *
     * @method findById
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.fields fields the list of fields to return for the issue. By default, all fields are returned.
     * @param {string} options.expand expand 
     * @param {string} options.properties properties the list of properties to return for the issue. By default no properties are returned.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    findById = async options => {

        return this.makeRequest('findById','GET','rest/api/2/issue/:issueIdOrKey',options)
    };
    
    /**
     * Returns a single comment.optional flags: renderedBody (provides body rendered in HTML)
     *
     * @method getComment
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.id id 
     * @param {string} options.expand expand optional flags: renderedBody (provides body rendered in HTML)
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getComment = async options => {

        return this.makeRequest('getComment','GET','rest/api/2/issue/:issueIdOrKey/comment/:id',options)
    };
    
    /**
     * Returns all comments for an issue.
     * 
     * Results can be ordered by the "created" field which means the date a comment was added.
     * the page offset, if not specified then defaults to 0how many results on the page should be included. Defaults to 50.ordering of the results.optional flags: renderedBody (provides body rendered in HTML)
     *
     * @method getComments
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.startAt startAt the page offset, if not specified then defaults to 0
     * @param {string} options.maxResults maxResults how many results on the page should be included. Defaults to 50.
     * @param {string} options.orderBy orderBy ordering of the results.
     * @param {string} options.expand expand optional flags: renderedBody (provides body rendered in HTML)
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getComments = async options => {

        return this.makeRequest('getComments','GET','rest/api/2/issue/:issueIdOrKey/comment',options)
    };
    
    /**
     * Returns the meta data for creating issues. This includes the available projects, issue types and fields,
     * including field types and whether or not those fields are required.
     * Projects will not be returned if the user does not have permission to create issues in that project.
     * 
     * The fields in the createmeta correspond to the fields in the create screen for the project/issuetype.
     * Fields not in the screen will not be in the createmeta.
     * 
     * Fields will only be returned if expand=projects.issuetypes.fields.
     * 
     * The results can be filtered by project and/or issue type, given by the query params.combined with the projectKeys param, lists the projects with which to filter the results. If absent, all projects are returned.
     *                       This parameter can be specified multiple times, and/or be a comma-separated list.
     *                       Specifiying a project that does not exist (or that you cannot create issues in) is not an error, but it will not be in the results.combined with the projectIds param, lists the projects with which to filter the results. If null, all projects are returned.
     *                       This parameter can be specified multiple times, and/or be a comma-separated list.
     *                       Specifiying a project that does not exist (or that you cannot create issues in) is not an error, but it will not be in the results.combinded with issuetypeNames, lists the issue types with which to filter the results. If null, all issue types are returned.
     *                       This parameter can be specified multiple times, and/or be a comma-separated list.
     *                       Specifiying an issue type that does not exist is not an error.combinded with issuetypeIds, lists the issue types with which to filter the results. If null, all issue types are returned.
     *                       This parameter can be specified multiple times, but is NOT interpreted as a comma-separated list.
     *                       Specifiying an issue type that does not exist is not an error.
     *
     * @method getCreateIssueMeta
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectIds projectIds combined with the projectKeys param, lists the projects with which to filter the results. If absent, all projects are returned.
                       This parameter can be specified multiple times, and/or be a comma-separated list.
                       Specifiying a project that does not exist (or that you cannot create issues in) is not an error, but it will not be in the results.
     * @param {string} options.projectKeys projectKeys combined with the projectIds param, lists the projects with which to filter the results. If null, all projects are returned.
                       This parameter can be specified multiple times, and/or be a comma-separated list.
                       Specifiying a project that does not exist (or that you cannot create issues in) is not an error, but it will not be in the results.
     * @param {string} options.issuetypeIds issuetypeIds combinded with issuetypeNames, lists the issue types with which to filter the results. If null, all issue types are returned.
                       This parameter can be specified multiple times, and/or be a comma-separated list.
                       Specifiying an issue type that does not exist is not an error.
     * @param {string} options.issuetypeNames issuetypeNames combinded with issuetypeIds, lists the issue types with which to filter the results. If null, all issue types are returned.
                       This parameter can be specified multiple times, but is NOT interpreted as a comma-separated list.
                       Specifiying an issue type that does not exist is not an error.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getCreateIssueMeta = async options => {

        return this.makeRequest('getCreateIssueMeta','GET','rest/api/2/issue/createmeta',options)
    };
    
    /**
     * Returns the meta data for editing an issue.
     * 
     * The fields in the editmeta correspond to the fields in the edit screen for the issue.
     * Fields not in the screen will not be in the editmeta.
     *
     * @method getEditIssueMeta
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getEditIssueMeta = async options => {

        return this.makeRequest('getEditIssueMeta','GET','rest/api/2/issue/:issueIdOrKey/editmeta',options)
    };
    
    /**
     * Returns suggested issues which match the auto-completion query for the user which executes this request. This REST
     * method will check the user's history and the user's browsing context and select this issues, which match the query.the query.the JQL in context of which the request is executed. Only issues which match this JQL query will be included in results.the key of the issue in context of which the request is executed. The issue which is in context will not be included in the auto-completion result, even if it matches the query.the id of the project in context of which the request is executed. Suggested issues will be only from this project.if set to false, subtasks will not be included in the list.if set to false and request is executed in context of a subtask, the parent issue will not be included in the auto-completion result, even if it matches the query.
     *
     * @method getIssuePickerResource
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.query query the query.
     * @param {string} options.currentJQL currentJQL the JQL in context of which the request is executed. Only issues which match this JQL query will be included in results.
     * @param {string} options.currentIssueKey currentIssueKey the key of the issue in context of which the request is executed. The issue which is in context will not be included in the auto-completion result, even if it matches the query.
     * @param {string} options.currentProjectId currentProjectId the id of the project in context of which the request is executed. Suggested issues will be only from this project.
     * @param {string} options.showSubTasks showSubTasks if set to false, subtasks will not be included in the list.
     * @param {string} options.showSubTaskParent showSubTaskParent if set to false and request is executed in context of a subtask, the parent issue will not be included in the auto-completion result, even if it matches the query.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getIssuePickerResource = async options => {

        return this.makeRequest('getIssuePickerResource','GET','rest/api/2/issue/picker',options)
    };
    
    /**
     * Returns the list of watchers for the issue with the given key.
     *
     * @method getIssueWatchers
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getIssueWatchers = async options => {

        return this.makeRequest('getIssueWatchers','GET','rest/api/2/issue/:issueIdOrKey/watchers',options)
    };
    
    /**
     * Returns all work logs for an issue. 
     * Note: Work logs won't be returned if the Log work field is hidden for the project.
     *
     * @method getIssueWorklog
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getIssueWorklog = async options => {

        return this.makeRequest('getIssueWorklog','GET','rest/api/2/issue/:issueIdOrKey/worklog',options)
    };
    
    /**
     * Get the remote issue link with the given id on the issue.
     *
     * @method getRemoteIssueLinkById
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.linkId linkId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getRemoteIssueLinkById = async options => {

        return this.makeRequest('getRemoteIssueLinkById','GET','rest/api/2/issue/:issueIdOrKey/remotelink/:linkId',options)
    };
    
    /**
     * A REST sub-resource representing the remote issue links on the issue.The id of the remote issue link to be returned.  If null (not provided) all remote links for the
     *                     issue are returned.
     *                     For a fullexplanation of Issue Link fields please refer to
     *                     https://developer.atlassian.com/display/JIRADEV/Fields+in+Remote+Issue+Links
     *
     * @method getRemoteIssueLinks
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.globalId globalId The id of the remote issue link to be returned.  If null (not provided) all remote links for the
                     issue are returned.
                     For a fullexplanation of Issue Link fields please refer to
                     https://developer.atlassian.com/display/JIRADEV/Fields+in+Remote+Issue+Links
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getRemoteIssueLinks = async options => {

        return this.makeRequest('getRemoteIssueLinks','GET','rest/api/2/issue/:issueIdOrKey/remotelink',options)
    };
    
    /**
     * Get a list of the transitions possible for this issue by the current user, along with fields that are required and their types.
     * 
     * Fields will only be returned if expand=transitions.fields.
     * 
     * The fields in the metadata correspond to the fields in the transition screen for that transition.
     * Fields not in the screen will not be in the metadata.
     *
     * @method getTransitions
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.transitionId transitionId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getTransitions = async options => {

        return this.makeRequest('getTransitions','GET','rest/api/2/issue/:issueIdOrKey/transitions',options)
    };
    
    /**
     * A REST sub-resource representing the voters on the issue.
     *
     * @method getVotes
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getVotes = async options => {

        return this.makeRequest('getVotes','GET','rest/api/2/issue/:issueIdOrKey/votes',options)
    };
    
    /**
     * Returns a specific worklog. 
     * Note: The work log won't be returned if the Log work field is hidden for the project.
     *
     * @method getWorklog
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getWorklog = async options => {

        return this.makeRequest('getWorklog','GET','rest/api/2/issue/:issueIdOrKey/worklog/:id',options)
    };
    
    /**
     * Sends a notification (email) to the list or recipients defined in the request.
     *
     * @method notify
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.subject subject 
     * @param {string} options.textBody textBody 
     * @param {string} options.htmlBody htmlBody 
     * @param {string} options.to to 
     * @param {string} options.restrict restrict 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    notify = async options => {

        return this.makeRequest('notify','POST','rest/api/2/issue/:issueIdOrKey/notify',options)
    };
    
    /**
     * Remove your vote from an issue. (i.e. "unvote")
     *
     * @method removeVote
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    removeVote = async options => {

        return this.makeRequest('removeVote','DELETE','rest/api/2/issue/:issueIdOrKey/votes',options)
    };
    
    /**
     * Removes a user from an issue's watcher list.a String containing the name of the user to remove from the watcher list. Must not be null.
     *
     * @method removeWatcher
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.username username a String containing the name of the user to remove from the watcher list. Must not be null.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    removeWatcher = async options => {

        return this.makeRequest('removeWatcher','DELETE','rest/api/2/issue/:issueIdOrKey/watchers',options)
    };
    
    /**
     * Updates an existing comment using its JSON representation.optional flags: renderedBody (provides body rendered in HTML)
     *
     * @method updateComment
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.id id 
     * @param {string} options.expand expand optional flags: renderedBody (provides body rendered in HTML)
     * @param {string} options.id id 
     * @param {string} options.author author 
     * @param {string} options.body body 
     * @param {string} options.renderedBody renderedBody 
     * @param {string} options.updateAuthor updateAuthor 
     * @param {string} options.created created 
     * @param {string} options.updated updated 
     * @param {string} options.visibility visibility 
     * @param {string} options.properties properties 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    updateComment = async options => {

        return this.makeRequest('updateComment','PUT','rest/api/2/issue/:issueIdOrKey/comment/:id',options)
    };
    
    /**
     * Updates a remote issue link from a JSON representation. Any fields not provided are set to null.
     *
     * @method updateRemoteIssueLink
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.linkId linkId 
     * @param {string} options.globalId globalId 
     * @param {string} options.application application 
     * @param {string} options.relationship relationship 
     * @param {string} options.object object 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    updateRemoteIssueLink = async options => {

        return this.makeRequest('updateRemoteIssueLink','PUT','rest/api/2/issue/:issueIdOrKey/remotelink/:linkId',options)
    };
    
    /**
     * Updates an existing worklog entry.
     * Note that:(optional) allows you to provide specific instructions to update the remaining time estimate of the issue.  Valid values are
     *                       
     *                       "new" - sets the estimate to a specific value
     *                       "leave"- leaves the estimate as is
     *                       "auto"- Default option.  Will automatically adjust the value based on the new timeSpent specified on the worklog (required when "new" is selected for adjustEstimate) the new value for the remaining estimate field.
     *
     * @method updateWorklog
     * @memberOf Issue#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.id id 
     * @param {string} options.adjustEstimate adjustEstimate (optional) allows you to provide specific instructions to update the remaining time estimate of the issue.  Valid values are
                       
                       "new" - sets the estimate to a specific value
                       "leave"- leaves the estimate as is
                       "auto"- Default option.  Will automatically adjust the value based on the new timeSpent specified on the worklog 
     * @param {string} options.newEstimate newEstimate (required when "new" is selected for adjustEstimate) the new value for the remaining estimate field.
     * @param {string} options.author author 
     * @param {string} options.updateAuthor updateAuthor 
     * @param {string} options.comment comment 
     * @param {string} options.created created 
     * @param {string} options.updated updated 
     * @param {string} options.visibility visibility 
     * @param {string} options.started started 
     * @param {string} options.timeSpent timeSpent 
     * @param {string} options.timeSpentSeconds timeSpentSeconds 
     * @param {string} options.id id 
     * @param {string} options.issueId issueId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    updateWorklog = async options => {

        return this.makeRequest('updateWorklog','PUT','rest/api/2/issue/:issueIdOrKey/worklog/:id',options)
    };
    

}
