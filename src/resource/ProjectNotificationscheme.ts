import {baseResource} from './baseResource';

/**
 * ProjectNotificationscheme Resource for associating notification schemes and projects.
 *
 * @constructor ProjectNotificationscheme
 * @property {IConnector} connector the jira connector instance
 */

export class ProjectNotificationscheme extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Gets a notification scheme associated with the project.
     * Follow the documentation of /notificationscheme/{id} resource for all details about returned value.
     *
     * @method getNotificationScheme
     * @memberOf ProjectNotificationscheme#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectKeyOrId projectKeyOrId 
     * @param {string} options.expand expand 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getNotificationScheme = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "projectKeyOrId": args[0],
             "expand": args[1],
             "token": args[2]
            
        };

        return this.makeRequest('getNotificationScheme','GET','rest/api/2/project/:projectKeyOrId/notificationscheme',options,callback)
    };
    

}
