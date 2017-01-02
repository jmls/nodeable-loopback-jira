"use strict";
const baseResource_1 = require('./baseResource');
/**
 * Autocompletedata Resource for auto complete data for searches.
 *
 * @constructor Autocompletedata
 * @property {IConnector} connector the jira connector instance
 */
class Autocompletedata extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Returns the auto complete data required for JQL searches.
         *
         * @method getAutoComplete
         * @memberOf Autocompletedata#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getAutoComplete = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "token": args[0]
            };
            return this.makeRequest('getAutoComplete', 'GET', 'rest/api/2/jql/autocompletedata', options, callback);
        };
        /**
         * Returns auto complete suggestions for JQL search.the field name for which the suggestions are generated.the portion of the field value that has already been provided by the user.the predicate for which the suggestions are generated. Suggestions are generated only for: "by", "from" and "to".the portion of the predicate value that has already been provided by the user.
         *
         * @method getFieldAutoCompleteForQueryString
         * @memberOf Autocompletedata#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.fieldName fieldName the field name for which the suggestions are generated.
         * @param {string} options.fieldValue fieldValue the portion of the field value that has already been provided by the user.
         * @param {string} options.predicateName predicateName the predicate for which the suggestions are generated. Suggestions are generated only for: "by", "from" and "to".
         * @param {string} options.predicateValue predicateValue the portion of the predicate value that has already been provided by the user.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getFieldAutoCompleteForQueryString = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "fieldName": args[0],
                "fieldValue": args[1],
                "predicateName": args[2],
                "predicateValue": args[3],
                "token": args[4]
            };
            return this.makeRequest('getFieldAutoCompleteForQueryString', 'GET', 'rest/api/2/jql/autocompletedata/suggestions', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Autocompletedata = Autocompletedata;
