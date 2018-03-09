import {baseResource} from './baseResource';

/**
 * Project 
 *
 * @constructor Project
 * @property {IConnector} connector the jira connector instance
 */

export class Project extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Creates a new project.
     *
     * @method create
     * @memberOf Project#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.key key 
     * @param {string} options.name name 
     * @param {string} options.projectTypeKey projectTypeKey 
     * @param {string} options.projectTemplateKey projectTemplateKey 
     * @param {string} options.description description 
     * @param {string} options.lead lead 
     * @param {string} options.url url 
     * @param {string} options.assigneeType assigneeType 
     * @param {string} options.avatarId avatarId 
     * @param {string} options.issueSecurityScheme issueSecurityScheme 
     * @param {string} options.permissionScheme permissionScheme 
     * @param {string} options.notificationScheme notificationScheme 
     * @param {string} options.categoryId categoryId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    create = async options => {

        return this.makeRequest('create','POST','rest/api/2/project',options)
    };
    
    /**
     * Converts temporary avatar into a real avatar
     *
     * @method createAvatarFromTemporary
     * @memberOf Project#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectIdOrKey projectIdOrKey 
     * @param {string} options.cropperWidth cropperWidth 
     * @param {string} options.cropperOffsetX cropperOffsetX 
     * @param {string} options.cropperOffsetY cropperOffsetY 
     * @param {string} options.url url 
     * @param {string} options.needsCropping needsCropping 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    createAvatarFromTemporary = async options => {

        return this.makeRequest('createAvatarFromTemporary','POST','rest/api/2/project/:projectIdOrKey/avatar',options)
    };
    
    /**
     * Deletes avatar
     *
     * @method deleteAvatar
     * @memberOf Project#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectIdOrKey projectIdOrKey 
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    deleteAvatar = async options => {

        return this.makeRequest('deleteAvatar','DELETE','rest/api/2/project/:projectIdOrKey/avatar/:id',options)
    };
    
    /**
     * Deletes a project.
     *
     * @method deleteById
     * @memberOf Project#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectIdOrKey projectIdOrKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    deleteById = async options => {

        return this.makeRequest('deleteById','DELETE','rest/api/2/project/:projectIdOrKey',options)
    };
    
    /**
     * Returns all projects which are visible for the currently logged in user. If no user is logged in, it returns the
     * list of projects that are visible when using anonymous access.the parameters to expandif this parameter is set then only projects recently accessed by the current user (if not logged in then based on HTTP session) will be returned (maximum count limited to the specified number but no more than 20).
     *
     * @method find
     * @memberOf Project#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.expand expand the parameters to expand
     * @param {string} options.recent recent if this parameter is set then only projects recently accessed by the current user (if not logged in then based on HTTP session) will be returned (maximum count limited to the specified number but no more than 20).
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    find = async options => {

        return this.makeRequest('find','GET','rest/api/2/project',options)
    };
    
    /**
     * Contains a full representation of a project in JSON format.
     * 
     * All project keys associated with the project will only be returned if expand=projectKeys.
     * the parameters to expand
     *
     * @method findById
     * @memberOf Project#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectIdOrKey projectIdOrKey 
     * @param {string} options.expand expand the parameters to expand
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    findById = async options => {

        return this.makeRequest('findById','GET','rest/api/2/project/:projectIdOrKey',options)
    };
    
    /**
     * Returns all avatars which are visible for the currently logged in user.  The avatars are grouped into
     * system and custom.
     *
     * @method getAllAvatars
     * @memberOf Project#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectIdOrKey projectIdOrKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getAllAvatars = async options => {

        return this.makeRequest('getAllAvatars','GET','rest/api/2/project/:projectIdOrKey/avatars',options)
    };
    
    /**
     * Get all issue types with valid status values for a project
     *
     * @method getAllStatuses
     * @memberOf Project#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectIdOrKey projectIdOrKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getAllStatuses = async options => {

        return this.makeRequest('getAllStatuses','GET','rest/api/2/project/:projectIdOrKey/statuses',options)
    };
    
    /**
     * Contains a full representation of a the specified project's components.
     *
     * @method getProjectComponents
     * @memberOf Project#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectIdOrKey projectIdOrKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getProjectComponents = async options => {

        return this.makeRequest('getProjectComponents','GET','rest/api/2/project/:projectIdOrKey/components',options)
    };
    
    /**
     * Contains a full representation of a the specified project's versions.the parameters to expand
     *
     * @method getProjectVersions
     * @memberOf Project#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectIdOrKey projectIdOrKey 
     * @param {string} options.expand expand the parameters to expand
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getProjectVersions = async options => {

        return this.makeRequest('getProjectVersions','GET','rest/api/2/project/:projectIdOrKey/versions',options)
    };
    
    /**
     * Returns all versions for the specified project. Results are paginated.
     * 
     * Results can be ordered by the following fields:
     * 
     * sequence
     * name
     * startDate
     * releaseDate
     * 
     * the page offset, if not specified then defaults to 0how many results on the page should be included. Defaults to 50.ordering of the results.the parameters to expand
     *
     * @method getProjectVersionsPaginated
     * @memberOf Project#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectIdOrKey projectIdOrKey 
     * @param {string} options.startAt startAt the page offset, if not specified then defaults to 0
     * @param {string} options.maxResults maxResults how many results on the page should be included. Defaults to 50.
     * @param {string} options.orderBy orderBy ordering of the results.
     * @param {string} options.expand expand the parameters to expand
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getProjectVersionsPaginated = async options => {

        return this.makeRequest('getProjectVersionsPaginated','GET','rest/api/2/project/:projectIdOrKey/version',options)
    };
    
    /**
     * Creates temporary avatarname of file being uploadedsize of file
     *
     * @method storeTemporaryAvatar
     * @memberOf Project#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectIdOrKey projectIdOrKey 
     * @param {string} options.filename filename name of file being uploaded
     * @param {string} options.size size size of file
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    storeTemporaryAvatar = async options => {

        return this.makeRequest('storeTemporaryAvatar','POST','rest/api/2/project/:projectIdOrKey/avatar/temporary',options)
    };
    
    /**
     * Creates temporary avatar using multipart. The response is sent back as JSON stored in a textarea. This is because
     * the client uses remote iframing to submit avatars using multipart. So we must send them a valid HTML page back from
     * which the client parses the JSON.
     *
     * @method storeTemporaryAvatarUsingMultiPart
     * @memberOf Project#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectIdOrKey projectIdOrKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    storeTemporaryAvatarUsingMultiPart = async options => {

        return this.makeRequest('storeTemporaryAvatarUsingMultiPart','POST','rest/api/2/project/:projectIdOrKey/avatar/temporary',options)
    };
    
    /**
     * Updates a project.
     * 
     * Only non null values sent in JSON will be updated in the project.
     * Values available for the assigneeType field are: "PROJECT_LEAD" and "UNASSIGNED".the parameters to expand in returned project
     *
     * @method update
     * @memberOf Project#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectIdOrKey projectIdOrKey 
     * @param {string} options.expand expand the parameters to expand in returned project
     * @param {string} options.key key 
     * @param {string} options.name name 
     * @param {string} options.projectTypeKey projectTypeKey 
     * @param {string} options.projectTemplateKey projectTemplateKey 
     * @param {string} options.description description 
     * @param {string} options.lead lead 
     * @param {string} options.url url 
     * @param {string} options.assigneeType assigneeType 
     * @param {string} options.avatarId avatarId 
     * @param {string} options.issueSecurityScheme issueSecurityScheme 
     * @param {string} options.permissionScheme permissionScheme 
     * @param {string} options.notificationScheme notificationScheme 
     * @param {string} options.categoryId categoryId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    update = async options => {

        return this.makeRequest('update','PUT','rest/api/2/project/:projectIdOrKey',options)
    };
    
    /**
     * 
     *
     * @method updateProjectAvatar
     * @memberOf Project#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectIdOrKey projectIdOrKey 
     * @param {string} options.id id 
     * @param {string} options.owner owner 
     * @param {string} options.isSystemAvatar isSystemAvatar 
     * @param {string} options.isSelected isSelected 
     * @param {string} options.isDeletable isDeletable 
     * @param {string} options.urls urls 
     * @param {string} options.selected selected 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    updateProjectAvatar = async options => {

        return this.makeRequest('updateProjectAvatar','PUT','rest/api/2/project/:projectIdOrKey/avatar',options)
    };
    
    /**
     * Updates the type of a project.
     *
     * @method updateProjectType
     * @memberOf Project#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectIdOrKey projectIdOrKey 
     * @param {string} options.newProjectTypeKey newProjectTypeKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    updateProjectType = async options => {

        return this.makeRequest('updateProjectType','PUT','rest/api/2/project/:projectIdOrKey/type/:newProjectTypeKey',options)
    };
    

}
