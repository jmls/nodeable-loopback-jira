import {baseResource} from './baseResource';

/**
 * Groupuserpicker 
 *
 * @constructor Groupuserpicker
 * @property {IConnector} connector the jira connector instance
 */

export class Groupuserpicker extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns a list of users and groups matching query with highlighting. This resource cannot be accessed
     * anonymously.A string used to search username, Name or e-mail addressthe maximum number of users to return (defaults to 50). The maximum allowed value is 1000. If
     *                    you specify a value that is higher than this number, your search results will be truncated.The custom field id, if this request comes from a custom field, such as a user picker. Optional.The list of project ids to further restrict the search
     *                    This parameter can occur multiple times to pass in multiple project ids.
     *                    Comma separated value is not supported.
     *                    This parameter is only used when fieldId is present.The list of issue type ids to further restrict the search.
     *                    This parameter can occur multiple times to pass in multiple issue type ids.
     *                    Comma separated value is not supported.
     *                    Special values such as -1 (all standard issue types), -2 (all subtask issue types) are supported.
     *                    This parameter is only used when fieldId is present.
     *
     * @method findUsersAndGroups
     * @memberOf Groupuserpicker#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.query query A string used to search username, Name or e-mail address
     * @param {string} options.maxResults maxResults the maximum number of users to return (defaults to 50). The maximum allowed value is 1000. If
                    you specify a value that is higher than this number, your search results will be truncated.
     * @param {string} options.showAvatar showAvatar 
     * @param {string} options.fieldId fieldId The custom field id, if this request comes from a custom field, such as a user picker. Optional.
     * @param {string} options.projectId projectId The list of project ids to further restrict the search
                    This parameter can occur multiple times to pass in multiple project ids.
                    Comma separated value is not supported.
                    This parameter is only used when fieldId is present.
     * @param {string} options.issueTypeId issueTypeId The list of issue type ids to further restrict the search.
                    This parameter can occur multiple times to pass in multiple issue type ids.
                    Comma separated value is not supported.
                    Special values such as -1 (all standard issue types), -2 (all subtask issue types) are supported.
                    This parameter is only used when fieldId is present.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    findUsersAndGroups = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('findUsersAndGroups','GET','rest/api/2/groupuserpicker',options,callback)
    };
    

}
