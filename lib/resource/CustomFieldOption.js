"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseResource_1 = require("./baseResource");
/**
 * CustomFieldOption
 *
 * @constructor CustomFieldOption
 * @property {IConnector} connector the jira connector instance
 */
class CustomFieldOption extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Returns a full representation of the Custom Field Option that has the given id.
         *
         * @method findById
         * @memberOf CustomFieldOption#
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
            return this.makeRequest('findById', 'GET', 'rest/api/2/customFieldOption/:id', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.CustomFieldOption = CustomFieldOption;
