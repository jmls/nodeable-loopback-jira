import {baseResource} from './baseResource';

/**
 * JqlAutocompletedata Resource for auto complete data for searches.
 *
 * @constructor JqlAutocompletedata
 * @property {IConnector} connector the jira connector instance
 */

export class JqlAutocompletedata extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns the auto complete data required for JQL searches.
     *
     * @method getAutoComplete
     * @memberOf JqlAutocompletedata#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getAutoComplete = async options => {

        return this.makeRequest('getAutoComplete','GET','rest/api/2/jql/autocompletedata',options)
    };
    
    /**
     * Returns auto complete suggestions for JQL search.the field name for which the suggestions are generated.the portion of the field value that has already been provided by the user.the predicate for which the suggestions are generated. Suggestions are generated only for: "by", "from" and "to".the portion of the predicate value that has already been provided by the user.
     *
     * @method getFieldAutoCompleteForQueryString
     * @memberOf JqlAutocompletedata#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.fieldName fieldName the field name for which the suggestions are generated.
     * @param {string} options.fieldValue fieldValue the portion of the field value that has already been provided by the user.
     * @param {string} options.predicateName predicateName the predicate for which the suggestions are generated. Suggestions are generated only for: "by", "from" and "to".
     * @param {string} options.predicateValue predicateValue the portion of the predicate value that has already been provided by the user.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getFieldAutoCompleteForQueryString = async options => {

        return this.makeRequest('getFieldAutoCompleteForQueryString','GET','rest/api/2/jql/autocompletedata/suggestions',options)
    };
    

}
