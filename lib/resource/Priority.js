"use strict";
const baseResource_1 = require("./baseResource");
/**
 * Priority
 *
 * @constructor Priority
 * @property {IConnector} connector the jira connector instance
 */
class Priority extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Returns an issue priority.
         *
         * @method findById
         * @memberOf Priority#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.findById = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "id": args[0],
                "token": args[1]
            };
            return this.makeRequest('findById', 'GET', 'rest/api/2/priority/:id', options, callback);
        };
        /**
         * Returns a list of all issue priorities.
         *
         * @method getPriorities
         * @memberOf Priority#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getPriorities = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "token": args[0]
            };
            return this.makeRequest('getPriorities', 'GET', 'rest/api/2/priority', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Priority = Priority;
