"use strict";
const baseResource_1 = require('./baseResource');
/**
 * Upgrade REST resource for executing and querying delayed upgrades.
 *
 * @constructor Upgrade
 * @property {IConnector} connector the jira connector instance
 */
class Upgrade extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Returns the result of the last upgrade task.
         *
         * Returns {@link javax.ws.rs.core.Response#seeOther(java.net.URI)} if still running.
         *
         * @method getUpgradeResult
         * @memberOf Upgrade#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getUpgradeResult = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "token": args[0]
            };
            return this.makeRequest('getUpgradeResult', 'GET', 'rest/api/2/upgrade', options, callback);
        };
        /**
         * Runs any pending delayed upgrade tasks.  Need Admin permissions to do this.
         *
         * @method runUpgradesNow
         * @memberOf Upgrade#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.runUpgradesNow = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "token": args[0]
            };
            return this.makeRequest('runUpgradesNow', 'POST', 'rest/api/2/upgrade', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Upgrade = Upgrade;
