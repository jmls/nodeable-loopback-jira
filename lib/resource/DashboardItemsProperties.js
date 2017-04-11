"use strict";
const baseResource_1 = require("./baseResource");
/**
 * DashboardItemsProperties
 *
 * @constructor DashboardItemsProperties
 * @property {IConnector} connector the jira connector instance
 */
class DashboardItemsProperties extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Removes the property from the dashboard item identified by the key or by the id. Ths user removing the property is required
         * to have permissions to administer the dashboard item.
         *
         * @method deleteProperty
         * @memberOf DashboardItemsProperties#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.dashboardId dashboardId
         * @param {string} options.itemId itemId
         * @param {string} options.propertyKey propertyKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.deleteProperty = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "dashboardId": args[0],
                "itemId": args[1],
                "propertyKey": args[2],
                "token": args[3]
            };
            return this.makeRequest('deleteProperty', 'DELETE', 'rest/api/2/dashboard/:dashboardId/items/:itemId/properties/:propertyKey', options, callback);
        };
        /**
         * Returns the keys of all properties for the dashboard item identified by the id.
         *
         * @method getPropertiesKeys
         * @memberOf DashboardItemsProperties#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.dashboardId dashboardId
         * @param {string} options.itemId itemId
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getPropertiesKeys = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "dashboardId": args[0],
                "itemId": args[1],
                "token": args[2]
            };
            return this.makeRequest('getPropertiesKeys', 'GET', 'rest/api/2/dashboard/:dashboardId/items/:itemId/properties', options, callback);
        };
        /**
         * Returns the value of the property with a given key from the dashboard item identified by the id.
         * The user who retrieves the property is required to have permissions to read the dashboard item.
         *
         * @method getProperty
         * @memberOf DashboardItemsProperties#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.dashboardId dashboardId
         * @param {string} options.itemId itemId
         * @param {string} options.propertyKey propertyKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getProperty = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "dashboardId": args[0],
                "itemId": args[1],
                "propertyKey": args[2],
                "token": args[3]
            };
            return this.makeRequest('getProperty', 'GET', 'rest/api/2/dashboard/:dashboardId/items/:itemId/properties/:propertyKey', options, callback);
        };
        /**
         * Sets the value of the specified dashboard item's property.
         *
         * You can use this resource to store a custom data against the dashboard item identified by the id.
         * The user who stores the data is required to have permissions to administer the dashboard item.
         *
         *
         * @method setProperty
         * @memberOf DashboardItemsProperties#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.dashboardId dashboardId
         * @param {string} options.itemId itemId
         * @param {string} options.propertyKey propertyKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.setProperty = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "dashboardId": args[0],
                "itemId": args[1],
                "propertyKey": args[2],
                "token": args[3]
            };
            return this.makeRequest('setProperty', 'PUT', 'rest/api/2/dashboard/:dashboardId/items/:itemId/properties/:propertyKey', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.DashboardItemsProperties = DashboardItemsProperties;
