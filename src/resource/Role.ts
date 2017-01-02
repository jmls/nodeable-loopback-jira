import {baseResource} from './baseResource';

/**
 * Role 
 *
 * @constructor Role
 * @property {IConnector} connector the jira connector instance
 */

export class Role extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Adds default actors to the given role. The request data should contain a list of usernames or a list of groups to add.
     *
     * @method addProjectRoleActorsToRole
     * @memberOf Role#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.user user 
     * @param {string} options.group group 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    addProjectRoleActorsToRole = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "id": args[0],
             "data": args[1]
            
        };

        return this.makeRequest('addProjectRoleActorsToRole','POST','rest/api/2/role/:id/actors',options,callback)
    };
    
    /**
     * Creates a new ProjectRole to be available in JIRA.
     * The created role does not have any default actors assigned.
     *
     * @method createProjectRole
     * @memberOf Role#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.description description 
     * @param {string} options.name name 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    createProjectRole = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "data": args[0]
            
        };

        return this.makeRequest('createProjectRole','POST','rest/api/2/role',options,callback)
    };
    
    /**
     * Deletes a role. May return 403 in the futureif given, removes a role even if it is used in scheme by replacing the role with the given one
     *
     * @method deleteProjectRole
     * @memberOf Role#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.swap swap if given, removes a role even if it is used in scheme by replacing the role with the given one
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    deleteProjectRole = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "id": args[0],
             "swap": args[1],
             "token": args[2]
            
        };

        return this.makeRequest('deleteProjectRole','DELETE','rest/api/2/role/:id',options,callback)
    };
    
    /**
     * Removes default actor from the given role.if given, removes an actor from given roleif given, removes an actor from given role
     *
     * @method deleteProjectRoleActorsFromRole
     * @memberOf Role#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.user user if given, removes an actor from given role
     * @param {string} options.group group if given, removes an actor from given role
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    deleteProjectRoleActorsFromRole = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "id": args[0],
             "user": args[1],
             "group": args[2],
             "token": args[3]
            
        };

        return this.makeRequest('deleteProjectRoleActorsFromRole','DELETE','rest/api/2/role/:id/actors',options,callback)
    };
    
    /**
     * Fully updates a roles. Both name and description must be given.
     *
     * @method fullyUpdateProjectRole
     * @memberOf Role#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.description description 
     * @param {string} options.name name 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    fullyUpdateProjectRole = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "id": args[0],
             "data": args[1]
            
        };

        return this.makeRequest('fullyUpdateProjectRole','PUT','rest/api/2/role/:id',options,callback)
    };
    
    /**
     * Gets default actors for the given role.
     *
     * @method getProjectRoleActorsForRole
     * @memberOf Role#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getProjectRoleActorsForRole = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "id": args[0],
             "token": args[1]
            
        };

        return this.makeRequest('getProjectRoleActorsForRole','GET','rest/api/2/role/:id/actors',options,callback)
    };
    
    /**
     * Get all the ProjectRoles available in JIRA. Currently this list is global.
     *
     * @method getProjectRoles
     * @memberOf Role#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getProjectRoles = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "token": args[0]
            
        };

        return this.makeRequest('getProjectRoles','GET','rest/api/2/role',options,callback)
    };
    
    /**
     * Get a specific ProjectRole available in JIRA.
     *
     * @method getProjectRolesById
     * @memberOf Role#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getProjectRolesById = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "id": args[0],
             "token": args[1]
            
        };

        return this.makeRequest('getProjectRolesById','GET','rest/api/2/role/:id',options,callback)
    };
    
    /**
     * Partially updates a roles name or description.
     *
     * @method partialUpdateProjectRole
     * @memberOf Role#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.description description 
     * @param {string} options.name name 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    partialUpdateProjectRole = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "id": args[0],
             "data": args[1]
            
        };

        return this.makeRequest('partialUpdateProjectRole','POST','rest/api/2/role/:id',options,callback)
    };
    

}
