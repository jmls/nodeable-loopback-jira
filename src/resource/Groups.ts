import {baseResource} from './baseResource';

/**
 * Groups REST endpoint for searching groups in a group picker
 *
 * @constructor Groups
 * @property {IConnector} connector the jira connector instance
 */

export class Groups extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns groups with substrings matching a given query. This is mainly for use with
     * the group picker, so the returned groups contain html to be used as picker suggestions.
     * The groups are also wrapped in a single response object that also contains a header for
     * use in the picker, specifically Showing X of Y matching groups.
     * 
     * The number of groups returned is limited by the system property "jira.ajax.autocomplete.limit"
     * 
     * The groups will be unique and sorted.a String to match groups agains
     *
     * @method find
     * @memberOf Groups#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.query query a String to match groups agains
     * @param {string} options.exclude exclude 
     * @param {string} options.maxResults maxResults 
     * @param {string} options.userName userName 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    find = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('find','GET','rest/api/2/groups/picker',options,callback)
    };
    

}
