"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const baseResource_1 = require("./baseResource");
/**
 * JqlAutocompletedata Resource for auto complete data for searches.
 *
 * @constructor JqlAutocompletedata
 * @property {IConnector} connector the jira connector instance
 */
class JqlAutocompletedata extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Returns the auto complete data required for JQL searches.
         *
         * @method getAutoComplete
         * @memberOf JqlAutocompletedata#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getAutoComplete = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getAutoComplete', 'GET', 'rest/api/2/jql/autocompletedata', options);
        });
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
        this.getFieldAutoCompleteForQueryString = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getFieldAutoCompleteForQueryString', 'GET', 'rest/api/2/jql/autocompletedata/suggestions', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.JqlAutocompletedata = JqlAutocompletedata;
