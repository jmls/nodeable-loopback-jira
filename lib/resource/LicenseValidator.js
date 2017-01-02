"use strict";
const baseResource_1 = require('./baseResource');
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
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.validate = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('validate', 'POST', 'rest/api/2/licenseValidator', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.LicenseValidator = LicenseValidator;
