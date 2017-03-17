"use strict";
const baseResource_1 = require("./baseResource");
/**
 * ServerInfo
 *
 * @constructor ServerInfo
 * @property {IConnector} connector the jira connector instance
 */
class ServerInfo extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Returns general information about the current JIRA server.
         *
         * @method findById
         * @memberOf ServerInfo#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.doHealthCheck doHealthCheck
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.findById = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "doHealthCheck": args[0],
                "token": args[1]
            };
            return this.makeRequest('findById', 'GET', 'rest/api/2/serverInfo', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.ServerInfo = ServerInfo;
