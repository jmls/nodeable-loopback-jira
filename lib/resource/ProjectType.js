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
         * @return {Promise.<any>} result of api call
         */
        this.find = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('find', 'GET', 'rest/api/2/project/type', options);
        });
        /**
         * Returns the project type with the given key, if it is accessible to the logged in user.
         * This takes into account whether the user is licensed on the Application that defines the project type.
         *
         * @method getAccessibleProjectTypeByKey
         * @memberOf ProjectType#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectTypeKey projectTypeKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getAccessibleProjectTypeByKey = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getAccessibleProjectTypeByKey', 'GET', 'rest/api/2/project/type/:projectTypeKey/accessible', options);
        });
        /**
         * Returns the project type with the given key.
         *
         * @method getProjectTypeByKey
         * @memberOf ProjectType#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.projectTypeKey projectTypeKey
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getProjectTypeByKey = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getProjectTypeByKey', 'GET', 'rest/api/2/project/type/:projectTypeKey', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.ProjectType = ProjectType;
