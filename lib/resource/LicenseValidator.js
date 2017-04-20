"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseResource_1 = require("./baseResource");
/**
 * LicenseValidator
 *
 * @constructor LicenseValidator
 * @property {IConnector} connector the jira connector instance
 */
class LicenseValidator extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         *
         *
         * @method validate
         * @memberOf LicenseValidator#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.validate = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('validate', 'POST', 'rest/api/2/licenseValidator', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.LicenseValidator = LicenseValidator;
