import {baseResource} from './baseResource';

/**
 * IssueAttachments Issue attachments
 *
 * @constructor IssueAttachments
 * @property {IConnector} connector the jira connector instance
 */

export class IssueAttachments extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Add one or more attachments to an issue.
     * 
     * This resource expects a multipart post. The media-type multipart/form-data is defined in RFC 1867. Most client
     * libraries have classes that make dealing with multipart posts simple. For instance, in Java the Apache HTTP Components
     * library provides a
     * MultiPartEntity
     * that makes it simple to submit a multipart POST.
     * 
     * In order to protect against XSRF attacks, because this method accepts multipart/form-data, it has XSRF protection
     * on it.  This means you must submit a header of X-Atlassian-Token: no-check with the request, otherwise it will be
     * blocked.
     * 
     * The name of the multipart/form-data parameter that contains attachments must be "file"
     * 
     * A simple example to upload a file called "myfile.txt" to issue REST-123:
     * curl -D- -u admin:admin -X POST -H "X-Atlassian-Token: no-check" -F "file=@myfile.txt" http://myhost/rest/api/2/issue/TEST-123/attachments
     *
     * @method addAttachment
     * @memberOf IssueAttachments#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    addAttachment = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('addAttachment','POST','rest/api/2/issue/:issueIdOrKey/attachments',options,callback)
    };
    

}
