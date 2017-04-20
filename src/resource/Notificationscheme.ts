import {baseResource} from './baseResource';

/**
 * Notificationscheme 
 *
 * @constructor Notificationscheme
 * @property {IConnector} connector the jira connector instance
 */

export class Notificationscheme extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns a full representation of the notification scheme for the given id. This resource will return a
     * notification scheme containing a list of events and recipient configured to receive notifications for these events. Consumer
     * should allow events without recipients to appear in response. User accessing
     * the data is required to have permissions to administer at least one project associated with the requested notification scheme.
     * 
     * Notification recipients can be:
     * 
     * current assignee - the value of the notificationType is CurrentAssignee
     * issue reporter - the value of the notificationType is Reporter
     * current user - the value of the notificationType is CurrentUser
     * project lead - the value of the notificationType is ProjectLead
     * component lead - the value of the notificationType is ComponentLead
     * all watchers - the value of the notification type is AllWatchers
     * configured user - the value of the notification type is User. Parameter will contain key of the user. Information about the user will be provided
     * if user expand parameter is used. 
     * configured group - the value of the notification type is Group. Parameter will contain name of the group. Information about the group will be provided
     * if group expand parameter is used. 
     * configured email address - the value of the notification type is EmailAddress, additionally information about the email will be provided.
     * users or users in groups in the configured custom fields - the value of the notification type is UserCustomField or GroupCustomField. Parameter
     * will contain id of the custom field. Information about the field will be provided if field expand parameter is used. 
     * configured project role - the value of the notification type is ProjectRole. Parameter will contain project role id. Information about the project role
     * will be provided if projectRole expand parameter is used. 
     * 
     * Please see the example for reference.
     * 
     *
     * @method getNotificationScheme
     * @memberOf Notificationscheme#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.expand expand 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getNotificationScheme = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getNotificationScheme','GET','rest/api/2/notificationscheme/:id',options,callback)
    };
    
    /**
     * Returns a paginated list of notification schemes. In order to access notification scheme, the calling user is
     * required to have permissions to administer at least one project associated with the requested notification scheme. Each scheme contains
     * a list of events and recipient configured to receive notifications for these events. Consumer should allow events without recipients to appear in response.
     * The list is ordered by the scheme's name.
     * Follow the documentation of /notificationscheme/{id} resource for all details about returned value.the index of the first notification scheme to return (0 based).the maximum number of notification schemes to return (max 50).
     *
     * @method getNotificationSchemes
     * @memberOf Notificationscheme#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.startAt startAt the index of the first notification scheme to return (0 based).
     * @param {string} options.maxResults maxResults the maximum number of notification schemes to return (max 50).
     * @param {string} options.expand expand 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getNotificationSchemes = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getNotificationSchemes','GET','rest/api/2/notificationscheme',options,callback)
    };
    

}
