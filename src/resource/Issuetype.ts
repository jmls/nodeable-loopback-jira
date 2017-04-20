import {baseResource} from './baseResource';

/**
 * Issuetype 
 *
 * @constructor Issuetype
 * @property {IConnector} connector the jira connector instance
 */

export class Issuetype extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Converts temporary avatar into a real avatar
     *
     * @method createAvatarFromTemporary
     * @memberOf Issuetype#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.cropperWidth cropperWidth 
     * @param {string} options.cropperOffsetX cropperOffsetX 
     * @param {string} options.cropperOffsetY cropperOffsetY 
     * @param {string} options.url url 
     * @param {string} options.needsCropping needsCropping 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    createAvatarFromTemporary = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('createAvatarFromTemporary','POST','rest/api/2/issuetype/:id/avatar',options,callback)
    };
    
    /**
     * Creates an issue type from a JSON representation and adds the issue newly created issue type to the default issue
     * type scheme.
     *
     * @method createIssueType
     * @memberOf Issuetype#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.name name 
     * @param {string} options.description description 
     * @param {string} options.type type 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    createIssueType = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('createIssueType','POST','rest/api/2/issuetype',options,callback)
    };
    
    /**
     * Deletes the specified issue type. If the issue type has any associated issues, these issues will be migrated to
     * the alternative issue type specified in the parameter. You can determine the alternative issue types by calling
     * the /rest/api/2/issuetype/{id}/alternatives resource.the id of an issue type to which issues associated with the removed issue type will be migrated.
     *
     * @method deleteIssueType
     * @memberOf Issuetype#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.alternativeIssueTypeId alternativeIssueTypeId the id of an issue type to which issues associated with the removed issue type will be migrated.
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

        return this.makeRequest('deleteIssueType','DELETE','rest/api/2/issuetype/:id',options,callback)
    };
    
    /**
     * Returns a list of all alternative issue types for the given issue type id. The list will contain these issues types, to which
     * issues assigned to the given issue type can be migrated. The suitable alternatives are issue types which are assigned
     * to the same workflow, the same field configuration and the same screen scheme.
     *
     * @method getAlternativeIssueTypes
     * @memberOf Issuetype#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getAlternativeIssueTypes = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getAlternativeIssueTypes','GET','rest/api/2/issuetype/:id/alternatives',options,callback)
    };
    
    /**
     * Returns a list of all issue types visible to the user
     *
     * @method getIssueAllTypes
     * @memberOf Issuetype#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getIssueAllTypes = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getIssueAllTypes','GET','rest/api/2/issuetype',options,callback)
    };
    
    /**
     * Returns a full representation of the issue type that has the given id.
     *
     * @method getIssueType
     * @memberOf Issuetype#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
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

        return this.makeRequest('getIssueType','GET','rest/api/2/issuetype/:id',options,callback)
    };
    
    /**
     * Creates temporary avatar. Creating a temporary avatar is part of a 3-step process in uploading a new
     * avatar for an issue type: upload, crop, confirm.
     * 
     * The following examples shows these three steps using curl.
     * The cookies (session) need to be preserved between requests, hence the use of -b and -c.
     * The id created in step 2 needs to be passed to step 3
     * (you can simply pass the whole response of step 2 as the request of step 3).
     * 
     * 
     * curl -c cookiejar.txt -X POST -u admin:admin -H "X-Atlassian-Token: no-check" \
     *   -H "Content-Type: image/png" --data-binary @mynewavatar.png \
     *   'http://localhost:8090/jira/rest/api/2/issuetype/1/avatar/temporary?filename=mynewavatar.png'
     *
     * curl -b cookiejar.txt -X POST -u admin:admin -H "X-Atlassian-Token: no-check" \
     *   -H "Content-Type: application/json" --data '{"cropperWidth": "65","cropperOffsetX": "10","cropperOffsetY": "16"}' \
     *   -o tmpid.json \
     *   http://localhost:8090/jira/rest/api/2/issuetype/1/avatar
     *
     * curl -b cookiejar.txt -X PUT -u admin:admin -H "X-Atlassian-Token: no-check" \
     *   -H "Content-Type: application/json" --data-binary @tmpid.json \
     *   http://localhost:8090/jira/rest/api/2/issuetype/1/avatar
     * name of file being uploadedsize of file
     *
     * @method storeTemporaryAvatar
     * @memberOf Issuetype#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.filename filename name of file being uploaded
     * @param {string} options.size size size of file
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    storeTemporaryAvatar = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('storeTemporaryAvatar','POST','rest/api/2/issuetype/:id/avatar/temporary',options,callback)
    };
    
    /**
     * Creates temporary avatar using multipart. The response is sent back as JSON stored in a textarea. This is because
     * the client uses remote iframing to submit avatars using multipart. So we must send them a valid HTML page back from
     * which the client parses the JSON from.
     * 
     * Creating a temporary avatar is part of a 3-step process in uploading a new
     * avatar for an issue type: upload, crop, confirm. This endpoint allows you to use a multipart upload
     * instead of sending the image directly as the request body.
     * 
     * You *must* use "avatar" as the name of the upload parameter:
     * 
     * curl -c cookiejar.txt -X POST -u admin:admin -H "X-Atlassian-Token: no-check" \
     *   -F "avatar=@mynewavatar.png;type=image/png" \
     *   'http://localhost:8090/jira/rest/api/2/issuetype/1/avatar/temporary'
     * 
     *
     * @method storeTemporaryAvatarUsingMultiPart
     * @memberOf Issuetype#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    storeTemporaryAvatarUsingMultiPart = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('storeTemporaryAvatarUsingMultiPart','POST','rest/api/2/issuetype/:id/avatar/temporary',options,callback)
    };
    
    /**
     * Updates the specified issue type from a JSON representation.
     *
     * @method updateIssueType
     * @memberOf Issuetype#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.name name 
     * @param {string} options.description description 
     * @param {string} options.avatarId avatarId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    updateIssueType = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('updateIssueType','PUT','rest/api/2/issuetype/:id',options,callback)
    };
    

}
