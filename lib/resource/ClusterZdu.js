"use strict";
const baseResource_1 = require("./baseResource");
/**
 * ClusterZdu
 *
 * @constructor ClusterZdu
 * @property {IConnector} connector the jira connector instance
 */
class ClusterZdu extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         *
         *
         * @method approveUpgrade
         * @memberOf ClusterZdu#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.approveUpgrade = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "token": args[0]
            };
            return this.makeRequest('approveUpgrade', 'POST', 'rest/api/2/cluster/zdu/approve', options, callback);
        };
        /**
         *
         *
         * @method cancelUpgrade
         * @memberOf ClusterZdu#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.cancelUpgrade = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "token": args[0]
            };
            return this.makeRequest('cancelUpgrade', 'POST', 'rest/api/2/cluster/zdu/cancel', options, callback);
        };
        /**
         *
         *
         * @method getState
         * @memberOf ClusterZdu#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getState = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "token": args[0]
            };
            return this.makeRequest('getState', 'GET', 'rest/api/2/cluster/zdu/state', options, callback);
        };
        /**
         *
         *
         * @method setReadyToUpgrade
         * @memberOf ClusterZdu#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.setReadyToUpgrade = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "token": args[0]
            };
            return this.makeRequest('setReadyToUpgrade', 'POST', 'rest/api/2/cluster/zdu/start', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.ClusterZdu = ClusterZdu;
