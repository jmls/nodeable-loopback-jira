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
         * @return {Promise.<any>} result of api call
         */
        this.addField = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('addField', 'POST', 'rest/api/2/screens/:screenId/tabs/:tabId/fields', options);
        });
        /**
         * Adds field or custom field to the default tab
         *
         * @method addFieldToDefaultScreen
         * @memberOf Screens#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.fieldId fieldId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.addFieldToDefaultScreen = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('addFieldToDefaultScreen', 'POST', 'rest/api/2/screens/addToDefault/:fieldId', options);
        });
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
         * @return {Promise.<any>} result of api call
         */
        this.addTab = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('addTab', 'POST', 'rest/api/2/screens/:screenId/tabs', options);
        });
        /**
         * Deletes tab to give screen
         *
         * @method deleteTab
         * @memberOf Screens#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.screenId screenId
         * @param {string} options.tabId tabId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.deleteTab = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('deleteTab', 'DELETE', 'rest/api/2/screens/:screenId/tabs/:tabId', options);
        });
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
         * @return {Promise.<any>} result of api call
         */
        this.getAllFields = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getAllFields', 'GET', 'rest/api/2/screens/:screenId/tabs/:tabId/fields', options);
        });
        /**
         * Returns a list of all tabs for the given screenthe key of the project; this parameter is optional
         *
         * @method getAllTabs
         * @memberOf Screens#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.screenId screenId
         * @param {string} options.projectKey projectKey the key of the project; this parameter is optional
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getAllTabs = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getAllTabs', 'GET', 'rest/api/2/screens/:screenId/tabs', options);
        });
        /**
         * Gets available fields for screen. i.e ones that haven't already been added.
         *
         * @method getFieldsToAdd
         * @memberOf Screens#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.screenId screenId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getFieldsToAdd = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getFieldsToAdd', 'GET', 'rest/api/2/screens/:screenId/availableFields', options);
        });
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
         * @return {Promise.<any>} result of api call
         */
        this.moveField = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('moveField', 'POST', 'rest/api/2/screens/:screenId/tabs/:tabId/fields/:id/move', options);
        });
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
         * @return {Promise.<any>} result of api call
         */
        this.moveTab = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('moveTab', 'POST', 'rest/api/2/screens/:screenId/tabs/:tabId/move/:pos', options);
        });
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
         * @return {Promise.<any>} result of api call
         */
        this.removeField = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('removeField', 'DELETE', 'rest/api/2/screens/:screenId/tabs/:tabId/fields/:id', options);
        });
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
         * @return {Promise.<any>} result of api call
         */
        this.renameTab = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('renameTab', 'PUT', 'rest/api/2/screens/:screenId/tabs/:tabId', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.Screens = Screens;
