"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseResource_1 = require("./baseResource");
/**
 * Projectvalidate
 *
 * @constructor Projectvalidate
 * @property {IConnector} connector the jira connector instance
 */
class Projectvalidate extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Validates a project key.the project key
         *
         * @method getProject
         * @memberOf Projectvalidate#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.key key the project key
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getProject = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "key": args[0],
                "token": args[1]
            };
            return this.makeRequest('getProject', 'GET', 'rest/api/2/projectvalidate/key', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Projectvalidate = Projectvalidate;
