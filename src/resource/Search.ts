import {baseResource} from './baseResource';

/**
 * Search Resource for searches.
 *
 * @constructor Search
 * @property {IConnector} connector the jira connector instance
 */

export class Search extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Searches for issues using JQL.
     * 
     * Sorting
     * the jql parameter is a full JQL
     * expression, and includes an ORDER BY clause.
     * 
     * The fields param (which can be specified multiple times) gives a comma-separated list of fields
     * to include in the response. This can be used to retrieve a subset of fields.
     * A particular field can be excluded by prefixing it with a minus.
     * 
     * By default, only navigable (*navigable) fields are returned in this search resource. Note: the default is different
     * in the get-issue resource -- the default there all fields (*all).
     * 
     * *all - include all fields
     * *navigable - include just navigable fields
     * summary,comment - include just the summary and comments
     * -description - include navigable fields except the description (the default is *navigable for search)
     * *all,-comment - include everything except comments
     * 
     * 
     * GET vs POST:
     * If the JQL query is too large to be encoded as a query param you should instead
     * POST to this resource.
     * 
     * Expanding Issues in the Search Result:
     * It is possible to expand the issues returned by directly specifying the expansion on the expand parameter passed
     * in to this resources.
     * 
     * For instance, to expand the "changelog" for all the issues on the search result, it is neccesary to
     * specify "changelog" as one of the values to expand.
     * a JQL query stringthe index of the first issue to return (0-based)the maximum number of issues to return (defaults to 50). The maximum allowable value is
     *                      dictated by the JIRA property 'jira.search.views.default.max'. If you specify a value that is higher than this
     *                      number, your search results will be truncated.Default: truewhether to validate the JQL querythe list of fields to return for each issue. By default, all navigable fields are returned.A comma-separated list of the parameters to expand.
     *
     * @method search
     * @memberOf Search#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.jql jql a JQL query string
     * @param {string} options.startAt startAt the index of the first issue to return (0-based)
     * @param {string} options.maxResults maxResults the maximum number of issues to return (defaults to 50). The maximum allowable value is
                      dictated by the JIRA property 'jira.search.views.default.max'. If you specify a value that is higher than this
                      number, your search results will be truncated.
     * @param {string} options.validateQuery validateQuery Default: truewhether to validate the JQL query
     * @param {string} options.fields fields the list of fields to return for each issue. By default, all navigable fields are returned.
     * @param {string} options.expand expand A comma-separated list of the parameters to expand.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    search = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('search','GET','rest/api/2/search',options,callback)
    };
    
    /**
     * Performs a search using JQL.
     *
     * @method searchUsingSearchRequest
     * @memberOf Search#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.jql jql 
     * @param {string} options.startAt startAt 
     * @param {string} options.maxResults maxResults 
     * @param {string} options.fields fields 
     * @param {string} options.validateQuery validateQuery 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    searchUsingSearchRequest = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('searchUsingSearchRequest','POST','rest/api/2/search',options,callback)
    };
    

}
