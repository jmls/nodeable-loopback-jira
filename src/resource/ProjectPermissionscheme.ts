import {baseResource} from './baseResource';

/**
 * ProjectPermissionscheme Resource for associating permission schemes and projects.
 *
 * @constructor ProjectPermissionscheme
 * @property {IConnector} connector the jira connector instance
 */

export class ProjectPermissionscheme extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Assigns a permission scheme with a project.
     *
     * @method assignPermissionScheme
     * @memberOf ProjectPermissionscheme#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectKeyOrId projectKeyOrId 
     * @param {string} options.expand expand 
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    assignPermissionScheme = async options => {

        return this.makeRequest('assignPermissionScheme','PUT','rest/api/2/project/:projectKeyOrId/permissionscheme',options)
    };
    
    /**
     * Gets a permission scheme assigned with a project.
     *
     * @method getAssignedPermissionScheme
     * @memberOf ProjectPermissionscheme#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectKeyOrId projectKeyOrId 
     * @param {string} options.expand expand 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getAssignedPermissionScheme = async options => {

        return this.makeRequest('getAssignedPermissionScheme','GET','rest/api/2/project/:projectKeyOrId/permissionscheme',options)
    };
    

}
