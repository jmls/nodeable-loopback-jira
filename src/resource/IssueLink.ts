import {baseResource} from './baseResource';

/**
 * IssueLink The Link Issue Resource provides functionality to manage issue links.
 *
 * @constructor IssueLink
 * @property {IConnector} connector the jira connector instance
 */

export class IssueLink extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Deletes an issue link with the specified id.
     * To be able to delete an issue link you must be able to view both issues and must have the link issue permission
     * for at least one of the issues.
     *
     * @method deleteById
     * @memberOf IssueLink#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.linkId linkId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    deleteById = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('deleteById','DELETE','rest/api/2/issueLink/:linkId',options,callback)
    };
    
    /**
     * Returns an issue link with the specified id.
     *
     * @method findById
     * @memberOf IssueLink#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.linkId linkId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    findById = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('findById','GET','rest/api/2/issueLink/:linkId',options,callback)
    };
    
    /**
     * Creates an issue link between two issues.
     * The user requires the link issue permission for the issue which will be linked to another issue.
     * The specified link type in the request is used to create the link and will create a link from the first issue
     * to the second issue using the outward description. It also create a link from the second issue to the first issue using the
     * inward description of the issue link type.
     * It will add the supplied comment to the first issue. The comment can have a restriction who can view it.
     * If group is specified, only users of this group can view this comment, if roleLevel is specified only users who have the specified role can view this comment.
     * The user who creates the issue link needs to belong to the specified group or have the specified role.
     *
     * @method linkIssues
     * @memberOf IssueLink#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.type type 
     * @param {string} options.inwardIssue inwardIssue 
     * @param {string} options.outwardIssue outwardIssue 
     * @param {string} options.comment comment 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    linkIssues = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('linkIssues','POST','rest/api/2/issueLink',options,callback)
    };
    

}
