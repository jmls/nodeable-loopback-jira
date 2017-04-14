"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseResource_1 = require("./baseResource");
/**
 * Attachment
 *
 * @constructor Attachment
 * @property {IConnector} connector the jira connector instance
 */
class Attachment extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Remove an attachment from an issue.
         *
         * @method deleteById
         * @memberOf Attachment#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.deleteById = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "id": args[0],
                "token": args[1]
            };
            return this.makeRequest('deleteById', 'DELETE', 'rest/api/2/attachment/:id', options, callback);
        };
        /**
         * Tries to expand an attachment. Output is human-readable and subject to change.
         *
         * @method expandForHumans
         * @memberOf Attachment#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.expandForHumans = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "id": args[0],
                "token": args[1]
            };
            return this.makeRequest('expandForHumans', 'GET', 'rest/api/2/attachment/:id/expand/human', options, callback);
        };
        /**
         * Tries to expand an attachment. Output is raw and should be backwards-compatible through the course of time.
         *
         * @method expandForMachines
         * @memberOf Attachment#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.expandForMachines = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "id": args[0],
                "token": args[1]
            };
            return this.makeRequest('expandForMachines', 'GET', 'rest/api/2/attachment/:id/expand/raw', options, callback);
        };
        /**
         * Returns the meta-data for an attachment, including the URI of the actual attached file.
         *
         * @method findById
         * @memberOf Attachment#
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
            return this.makeRequest('findById', 'GET', 'rest/api/2/attachment/:id', options, callback);
        };
        /**
         * Returns the meta information for an attachments, specifically if they are enabled and the maximum upload size
         * allowed.
         *
         * @method getAttachmentMeta
         * @memberOf Attachment#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getAttachmentMeta = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "token": args[0]
            };
            return this.makeRequest('getAttachmentMeta', 'GET', 'rest/api/2/attachment/meta', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Attachment = Attachment;
