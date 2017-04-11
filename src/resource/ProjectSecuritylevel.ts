import {baseResource} from './baseResource';

/**
 * ProjectSecuritylevel Provide security level information of the given project for the current user.
 *
 * @constructor ProjectSecuritylevel
 * @property {IConnector} connector the jira connector instance
 */

export class ProjectSecuritylevel extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns all security levels for the project that the current logged in user has access to.
     * If the user does not have the Set Issue Security permission, the list will be empty.
     *
     * @method getSecurityLevelsForProject
     * @memberOf ProjectSecuritylevel#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectKeyOrId projectKeyOrId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getSecurityLevelsForProject = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "projectKeyOrId": args[0],
             "token": args[1]
            
        };

        return this.makeRequest('getSecurityLevelsForProject','GET','rest/api/2/project/:projectKeyOrId/securitylevel',options,callback)
    };
    

}
