"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const debug = require('debug')('loopback:connector:jira.jira-connector');
// load all the generated resources
const resources = require("./resource");
const request = require("request-promise-native");
const changeCase = require('change-case');
debug('preparing initialize function');
module.exports = class JiraConnector {
    /**
     * jira class constructor
     * @param {IJiraConfig} [settings] settings used by the connector
     */
    constructor(app, settings) {
        /**
         * login a user and get a sessionId
         * @param {Object} options An object containing options to pass to the login API.
         * @param {string} options.username The user name
         * @param {string} options.password The user password
         */
        this.login = (options = {}) => __awaiter(this, void 0, void 0, function* () {
            debug('login');
            const result = yield this.makeRequest({
                method: 'POST',
                path: 'rest/auth/1/session',
                ignoreAuth: true,
                body: options
            }).catch(e => {
                debug('unable to login', e);
                throw e;
            });
            const jiraAuth = Buffer.from(`${options.username}:${options.password}`, 'utf8').toString('base64');
            const user = yield this.resource.User.findById({
                username: options.username,
                expand: 'groups',
                token: jiraAuth
            }).catch(e => {
                debug('unable to login, cannot find user', e);
                throw e;
            });
            const tokenData = {
                key: user.key,
                name: user.name,
                emailAddress: user.emailAddress,
                displayName: user.displayName,
                applicationRoles: user.applicationRoles,
                groups: user.groups,
                jiraAuth
            };
            return tokenData;
        });
        /**
         * logout a user
         * @param {string} username the user name
         */
        this.logout = (username) => __awaiter(this, void 0, void 0, function* () {
            debug('logout not implemented');
            return;
        });
        /**
         * make a request to the jira host
         * @param {object} requestOptions the request options
         * @param {function} [callback] The callback function
         */
        this.makeRequest = (requestOptions = {}) => __awaiter(this, void 0, void 0, function* () {
            // require('request-debug')(this.request)
            debug(`makeRequest`, requestOptions);
            let requestOpts = {
                method: requestOptions.method,
                json: true,
                followAllRedirects: true,
                body: requestOptions.body,
                qs: requestOptions.qs,
                headers: {},
                uri: `${this.baseUrl}/${requestOptions.path}`,
                resolveWithFullResponse: true
            };
            if (requestOptions.tokenRequired) {
                if (!requestOptions.token) {
                    let err = { statusCode: 401, message: 'no token supplied' };
                    return Promise.reject(err);
                }
                requestOpts.headers.cookie = `${requestOptions.token}`;
            }
            const response = yield this.request(requestOpts).catch(e => {
                debug('request error', e);
                throw e;
            });
            if (response.statusCode > 299 || response.statusCode < 200) {
                debug('response statusCode error', response);
                throw new Error('response failed');
            }
            debug(response);
            return response.body;
        });
        debug('instantiating jira class');
        this._models = {};
        this.settings = settings;
        this.request = settings.request || request;
        this.name = settings.name || '';
        this.prefix = settings.prefix || 'Jira';
        this.resource = {};
        this.baseUrl = `${settings.protocol || 'https'}://${settings.host ||
            'jira:8080'}`;
        // loop through all the resources, creating a model for each one
        Object.keys(resources).forEach(key => {
            debug('loading model', key);
            let jiraModelName = changeCase.pascalCase(`${this.prefix}${key}`);
            let Model = app.loopback.createModel(jiraModelName, {}, { base: 'Model', jiraModelName: key });
            let jiraName = key;
            this.resource[jiraName] = new resources[jiraName](this, Model, this.settings);
            app.model(Model, {
                public: this.resource[jiraName].definition.public,
                dataSource: false
            });
        });
        debug('jira loaded');
    }
};
