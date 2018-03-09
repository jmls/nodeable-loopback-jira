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
         * @return {Promise.<any>} result of api call
         */
        this.getUpgradeResult = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getUpgradeResult', 'GET', 'rest/api/2/upgrade', options);
        });
        /**
         * Runs any pending delayed upgrade tasks.  Need Admin permissions to do this.
         *
         * @method runUpgradesNow
         * @memberOf Upgrade#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.runUpgradesNow = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('runUpgradesNow', 'POST', 'rest/api/2/upgrade', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.Upgrade = Upgrade;
