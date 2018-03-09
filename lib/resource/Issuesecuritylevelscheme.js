"use strict";
const baseResource_1 = require("./baseResource");
/**
 * Issuesecuritylevelscheme Resource for associating permission schemes and projects.
 *
 * @constructor Issuesecuritylevelscheme
 * @property {IConnector} connector the jira connector instance
 */
class Issuesecuritylevelscheme extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Returns the issue security scheme for project.
         *
         * @method getIssueSecurityScheme
         * @memberOf Issuesecuritylevelscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectKeyOrId projectKeyOrId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getIssueSecurityScheme = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "projectKeyOrId": args[0],
                "token": args[1]
            };
            return this.makeRequest('getIssueSecurityScheme', 'GET', 'rest/api/2/project/:projectKeyOrId/issuesecuritylevelscheme', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Issuesecuritylevelscheme = Issuesecuritylevelscheme;
