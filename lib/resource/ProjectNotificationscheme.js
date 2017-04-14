"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseResource_1 = require("./baseResource");
/**
 * ProjectNotificationscheme Resource for associating notification schemes and projects.
 *
 * @constructor ProjectNotificationscheme
 * @property {IConnector} connector the jira connector instance
 */
class ProjectNotificationscheme extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Gets a notification scheme associated with the project.
         * Follow the documentation of /notificationscheme/{id} resource for all details about returned value.
         *
         * @method getNotificationScheme
         * @memberOf ProjectNotificationscheme#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectKeyOrId projectKeyOrId
         * @param {string} options.expand expand
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getNotificationScheme = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "projectKeyOrId": args[0],
                "expand": args[1],
                "token": args[2]
            };
            return this.makeRequest('getNotificationScheme', 'GET', 'rest/api/2/project/:projectKeyOrId/notificationscheme', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.ProjectNotificationscheme = ProjectNotificationscheme;
