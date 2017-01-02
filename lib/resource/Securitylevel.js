"use strict";
const baseResource_1 = require('./baseResource');
/**
 * Securitylevel
 *
 * @constructor Securitylevel
 * @property {IConnector} connector the jira connector instance
 */
class Securitylevel extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Returns a full representation of the security level that has the given id.
         *
         * @method getIssuesecuritylevel
         * @memberOf Securitylevel#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getIssuesecuritylevel = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "id": args[0],
                "token": args[1]
            };
            return this.makeRequest('getIssuesecuritylevel', 'GET', 'rest/api/2/securitylevel/:id', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Securitylevel = Securitylevel;
