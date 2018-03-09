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
 * ProjectCategory
 *
 * @constructor ProjectCategory
 * @property {IConnector} connector the jira connector instance
 */
class ProjectCategory extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Create a project category via POST.
         *
         * @method create
         * @memberOf ProjectCategory#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.name name
         * @param {string} options.description description
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.create = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('create', 'POST', 'rest/api/2/projectCategory', options);
        });
        /**
         * Delete a project category.
         *
         * @method deleteById
         * @memberOf ProjectCategory#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.deleteById = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('deleteById', 'DELETE', 'rest/api/2/projectCategory/:id', options);
        });
        /**
         * Returns all project categories
         *
         * @method find
         * @memberOf ProjectCategory#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.find = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('find', 'GET', 'rest/api/2/projectCategory', options);
        });
        /**
         * Contains a representation of a project category in JSON format.
         *
         * @method getProjectCategoryById
         * @memberOf ProjectCategory#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getProjectCategoryById = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getProjectCategoryById', 'GET', 'rest/api/2/projectCategory/:id', options);
        });
        /**
         * Modify a project category via PUT. Any fields present in the PUT will override existing values. As a convenience, if a field
         * is not present, it is silently ignored.
         *
         * @method update
         * @memberOf ProjectCategory#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.id id
         * @param {string} options.name name
         * @param {string} options.description description
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.update = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('update', 'PUT', 'rest/api/2/projectCategory/:id', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.ProjectCategory = ProjectCategory;
