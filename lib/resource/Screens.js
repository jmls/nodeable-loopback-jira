"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseResource_1 = require("./baseResource");
/**
 * Screens
 *
 * @constructor Screens
 * @property {IConnector} connector the jira connector instance
 */
class Screens extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Adds field to the given tab.
         *
         * @method addField
         * @memberOf Screens#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.screenId screenId
         * @param {string} options.tabId tabId
         * @param {string} options.fieldId fieldId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.addField = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('addField', 'POST', 'rest/api/2/screens/:screenId/tabs/:tabId/fields', options, callback);
        };
        /**
         * Adds field or custom field to the default tab
         *
         * @method addFieldToDefaultScreen
         * @memberOf Screens#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.fieldId fieldId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.addFieldToDefaultScreen = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('addFieldToDefaultScreen', 'POST', 'rest/api/2/screens/addToDefault/:fieldId', options, callback);
        };
        /**
         * Creates tab for given screen
         *
         * @method addTab
         * @memberOf Screens#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.screenId screenId
         * @param {string} options.id id
         * @param {string} options.name name
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.addTab = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('addTab', 'POST', 'rest/api/2/screens/:screenId/tabs', options, callback);
        };
        /**
         * Deletes tab to give screen
         *
         * @method deleteTab
         * @memberOf Screens#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.screenId screenId
         * @param {string} options.tabId tabId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.deleteTab = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('deleteTab', 'DELETE', 'rest/api/2/screens/:screenId/tabs/:tabId', options, callback);
        };
        /**
         * Gets all fields for a given tabthe key of the project; this parameter is optional
         *
         * @method getAllFields
         * @memberOf Screens#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.screenId screenId
         * @param {string} options.tabId tabId
         * @param {string} options.projectKey projectKey the key of the project; this parameter is optional
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getAllFields = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('getAllFields', 'GET', 'rest/api/2/screens/:screenId/tabs/:tabId/fields', options, callback);
        };
        /**
         * Returns a list of all tabs for the given screenthe key of the project; this parameter is optional
         *
         * @method getAllTabs
         * @memberOf Screens#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.screenId screenId
         * @param {string} options.projectKey projectKey the key of the project; this parameter is optional
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getAllTabs = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('getAllTabs', 'GET', 'rest/api/2/screens/:screenId/tabs', options, callback);
        };
        /**
         * Gets available fields for screen. i.e ones that haven't already been added.
         *
         * @method getFieldsToAdd
         * @memberOf Screens#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.screenId screenId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getFieldsToAdd = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('getFieldsToAdd', 'GET', 'rest/api/2/screens/:screenId/availableFields', options, callback);
        };
        /**
         * Moves field on the given tab
         *
         * @method moveField
         * @memberOf Screens#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.screenId screenId
         * @param {string} options.tabId tabId
         * @param {string} options.id id
         * @param {string} options.after after
         * @param {string} options.position position
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.moveField = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('moveField', 'POST', 'rest/api/2/screens/:screenId/tabs/:tabId/fields/:id/move', options, callback);
        };
        /**
         * Moves tab position
         *
         * @method moveTab
         * @memberOf Screens#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.screenId screenId
         * @param {string} options.tabId tabId
         * @param {string} options.pos pos
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.moveTab = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('moveTab', 'POST', 'rest/api/2/screens/:screenId/tabs/:tabId/move/:pos', options, callback);
        };
        /**
         * Removes field from given tab
         *
         * @method removeField
         * @memberOf Screens#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.screenId screenId
         * @param {string} options.tabId tabId
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.removeField = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('removeField', 'DELETE', 'rest/api/2/screens/:screenId/tabs/:tabId/fields/:id', options, callback);
        };
        /**
         * Renames tab on given screen
         *
         * @method renameTab
         * @memberOf Screens#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.screenId screenId
         * @param {string} options.tabId tabId
         * @param {string} options.id id
         * @param {string} options.name name
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.renameTab = (...args) => {
            if (args.length === 0) {
                throw new Error("options must be passed");
            }
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {};
            return this.makeRequest('renameTab', 'PUT', 'rest/api/2/screens/:screenId/tabs/:tabId', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Screens = Screens;
