import {baseResource} from './baseResource';

/**
 * ReindexRequest REST resource for querying and executing reindex requests.
 *
 * @constructor ReindexRequest
 * @property {IConnector} connector the jira connector instance
 */

export class ReindexRequest extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Retrieves the progress of a single reindex request.
     *
     * @method getProgress
     * @memberOf ReindexRequest#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.requestId requestId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getProgress = async options => {

        return this.makeRequest('getProgress','GET','rest/api/2/reindex/request/:requestId',options)
    };
    
    /**
     * Retrieves the progress of a multiple reindex requests.  Only reindex requests that actually exist will be returned
     * in the results.the reindex request IDs.
     *
     * @method getProgressBulk
     * @memberOf ReindexRequest#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.requestId requestId the reindex request IDs.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getProgressBulk = async options => {

        return this.makeRequest('getProgressBulk','GET','rest/api/2/reindex/request/bulk',options)
    };
    
    /**
     * Executes any pending reindex requests.  Returns a JSON array containing the IDs of the reindex requests
     * that are being processed.  Execution is asynchronous - progress of the returned tasks can be monitored through
     * other REST calls.
     *
     * @method processRequests
     * @memberOf ReindexRequest#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    processRequests = async options => {

        return this.makeRequest('processRequests','POST','rest/api/2/reindex/request',options)
    };
    

}
