import {baseResource} from './baseResource';

/**
 * Group 
 *
 * @constructor Group
 * @property {IConnector} connector the jira connector instance
 */

export class Group extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Adds given user to a group.
     * 
     * Returns the current state of the group.A name of requested group.
     *
     * @method addUserToGroup
     * @memberOf Group#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.groupname groupname A name of requested group.
     * @param {string} options.name name 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    addUserToGroup = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('addUserToGroup','POST','rest/api/2/group/user',options,callback)
    };
    
    /**
     * Creates a group by given group parameter
     * 
     * Returns REST representation for the requested group.
     *
     * @method create
     * @memberOf Group#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.name name 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    create = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('create','POST','rest/api/2/group',options,callback)
    };
    
    /**
     * Deletes a group by given group parameter.
     * 
     * Returns no content(mandatory) The name of the group to delete.If you delete a group and content is restricted to that group, the content will be hidden from all users. 
     * To prevent this, use this parameter to specify a different group to transfer the restrictions (comments and worklogs only) to.
     *
     * @method deleteById
     * @memberOf Group#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.groupname groupname (mandatory) The name of the group to delete.
     * @param {string} options.swapGroup swapGroup If you delete a group and content is restricted to that group, the content will be hidden from all users. 
 To prevent this, use this parameter to specify a different group to transfer the restrictions (comments and worklogs only) to.
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

        return this.makeRequest('deleteById','DELETE','rest/api/2/group',options,callback)
    };
    
    /**
     * Returns REST representation for the requested group. Allows to get list of active users belonging to the
     * specified group and its subgroups if "users" expand option is provided. You can page through users list by using
     * indexes in expand param. For example to get users from index 10 to index 15 use "users[10:15]" expand value. This
     * will return 6 users (if there are at least 16 users in this group). Indexes are 0-based and inclusive.
     * 
     * This resource is deprecated, please use group/member API instead.A name of requested group.List of fields to expand. Currently only available expand is "users".
     *
     * @method findById
     * @memberOf Group#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.groupname groupname A name of requested group.
     * @param {string} options.expand expand List of fields to expand. Currently only available expand is "users".
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

        return this.makeRequest('findById','GET','rest/api/2/group',options,callback)
    };
    
    /**
     * This resource returns a paginated list of users who are members of the specified group and its subgroups.
     * Users in the page are ordered by user names. User of this resource is required to have sysadmin or admin permissions.a name of the group for which members will be returned.Default: falseinactive users will be included in the response if set to true.Default: 0the index of the first user in group to return (0 based).Default: 50the maximum number of users to return (max 50).
     *
     * @method getUsersFromGroup
     * @memberOf Group#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.groupname groupname a name of the group for which members will be returned.
     * @param {string} options.includeInactiveUsers includeInactiveUsers Default: falseinactive users will be included in the response if set to true.
     * @param {string} options.startAt startAt Default: 0the index of the first user in group to return (0 based).
     * @param {string} options.maxResults maxResults Default: 50the maximum number of users to return (max 50).
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getUsersFromGroup = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getUsersFromGroup','GET','rest/api/2/group/member',options,callback)
    };
    
    /**
     * Removes given user from a group.
     * 
     * Returns no contentA name of requested group.User to remove from a group
     *
     * @method removeUserFromGroup
     * @memberOf Group#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.groupname groupname A name of requested group.
     * @param {string} options.username username User to remove from a group
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    removeUserFromGroup = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('removeUserFromGroup','DELETE','rest/api/2/group/user',options,callback)
    };
    

}
