import {baseResource} from './baseResource';

/**
 * Worklog 
 *
 * @constructor Worklog
 * @property {IConnector} connector the jira connector instance
 */

export class Worklog extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns worklogs id and delete time of worklogs that was deleted since given time.
     * The returns set of worklogs is limited to 1000 elements.
     * This API will not return worklogs deleted during last minute.Default: 0a date time in unix timestamp format since when deleted worklogs will be returned.
     *
     * @method getIdsOfWorklogsDeletedSince
     * @memberOf Worklog#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.since since Default: 0a date time in unix timestamp format since when deleted worklogs will be returned.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getIdsOfWorklogsDeletedSince = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getIdsOfWorklogsDeletedSince','GET','rest/api/2/worklog/deleted',options,callback)
    };
    
    /**
     * Returns worklogs id and update time of worklogs that was updated since given time.
     * The returns set of worklogs is limited to 1000 elements.
     * This API will not return worklogs updated during last minute.Default: 0a date time in unix timestamp format since when updated worklogs will be returned.
     *
     * @method getIdsOfWorklogsModifiedSince
     * @memberOf Worklog#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.since since Default: 0a date time in unix timestamp format since when updated worklogs will be returned.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getIdsOfWorklogsModifiedSince = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getIdsOfWorklogsModifiedSince','GET','rest/api/2/worklog/updated',options,callback)
    };
    
    /**
     * Returns worklogs for given worklog ids. Only worklogs to which the calling user has permissions, will be included in the result.
     * The returns set of worklogs is limited to 1000 elements.
     *
     * @method getWorklogsForIds
     * @memberOf Worklog#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.ids ids 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getWorklogsForIds = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getWorklogsForIds','POST','rest/api/2/worklog/list',options,callback)
    };
    

}
