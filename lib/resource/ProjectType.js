"use strict";
const baseResource_1 = require("./baseResource");
/**
 * ProjectType
 *
 * @constructor ProjectType
 * @property {IConnector} connector the jira connector instance
 */
class ProjectType extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Returns all the project types defined on the JIRA instance, not taking into account whether
         * the license to use those project types is valid or not.
         *
         * @method find
         * @memberOf ProjectType#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.find = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "token": args[0]
            };
            return this.makeRequest('find', 'GET', 'rest/api/2/project/type', options, callback);
        };
        /**
         * Returns the project type with the given key, if it is accessible to the logged in user.
         * This takes into account whether the user is licensed on the Application that defines the project type.
         *
         * @method getAccessibleProjectTypeByKey
         * @memberOf ProjectType#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectTypeKey projectTypeKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getAccessibleProjectTypeByKey = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "projectTypeKey": args[0],
                "token": args[1]
            };
            return this.makeRequest('getAccessibleProjectTypeByKey', 'GET', 'rest/api/2/project/type/:projectTypeKey/accessible', options, callback);
        };
        /**
         * Returns the project type with the given key.
         *
         * @method getProjectTypeByKey
         * @memberOf ProjectType#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectTypeKey projectTypeKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getProjectTypeByKey = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "projectTypeKey": args[0],
                "token": args[1]
            };
            return this.makeRequest('getProjectTypeByKey', 'GET', 'rest/api/2/project/type/:projectTypeKey', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.ProjectType = ProjectType;
