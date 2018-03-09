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
 * Groupuserpicker
 *
 * @constructor Groupuserpicker
 * @property {IConnector} connector the jira connector instance
 */
class Groupuserpicker extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
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
         * @return {Promise.<any>} result of api call
         */
        this.findUsersAndGroups = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('findUsersAndGroups', 'GET', 'rest/api/2/groupuserpicker', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.Groupuserpicker = Groupuserpicker;
