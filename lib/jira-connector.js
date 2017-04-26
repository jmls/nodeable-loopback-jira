"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require('debug')('loopback:connector:jira.jira-connector');
// load all the generated resources
const resources = require("./resource");
const request = require('request');
const changeCase = require('change-case');
debug("preparing initialize function");
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
        this.login = (options = {}) => {
            debug("login");
            let jiraAuth;
            return new Promise((resolve, reject) => {
                return this.makeRequest({
                    method: 'POST',
                    path: 'rest/auth/1/session',
                    ignoreAuth: true,
                    body: options
                }).then((result) => {
                    if (result.statusCode) {
                        debug("err", result);
                        return reject(result);
                    }
                    jiraAuth = Buffer.from(`${options.username}:${options.password}`, 'utf8').toString('base64');
                    return this.resource.User.findById({
                        username: options.username,
                        expand: 'groups',
                        token: jiraAuth
                    });
                }).then((user) => {
                    if (user.statusCode) {
                        debug("err", user);
                        return reject(user);
                    }
                    let tokenData = {
                        key: user.key,
                        name: user.name,
                        emailAddress: user.emailAddress,
                        displayName: user.displayName,
                        applicationRoles: user.applicationRoles,
                        groups: user.groups,
                        jiraAuth
                    };
                    return resolve(tokenData);
                })
                    .catch((e) => {
                    debug("unable to login", e);
                    return reject(e);
                });
            });
        };
        /**
         * logout a user
         * @param {string} username the user name
         * @param {function} [callback] The callback function
         */
        this.logout = (username, callback) => {
            debug("logout not implemented");
            return new Promise((resolve, reject) => {
                return callback ? callback(null, {}) : reject("invalid token");
            });
        };
        /**
         * make a request to the jira host
         * @param {object} requestOptions the request options
         * @param {function} [callback] The callback function
         */
        this.makeRequest = (requestOptions = {}, callback) => {
            // require('request-debug')(this.request)
            debug(`makeRequest`, requestOptions);
            let requestOpts = {
                method: requestOptions.method,
                json: true,
                followAllRedirects: true,
                body: requestOptions.body,
                qs: requestOptions.qs,
                headers: {},
                uri: `${this.baseUrl}/${requestOptions.path}`
            };
            if (requestOptions.tokenRequired) {
                if (!requestOptions.token) {
                    let err = { statusCode: 401, message: 'no token supplied' };
                    return Promise.reject(err);
                }
                requestOpts.headers.Authorization = `Basic ${requestOptions.token}`;
            }
            return new Promise((resolve, reject) => {
                this.request(requestOpts, function (err, response, body) {
                    if (err) {
                        return callback ? callback(err) : reject(err);
                    }
                    if (response.statusCode > 299 || response.statusCode < 200) {
                        body = body || {};
                        let err = {
                            statusCode: response.statusCode,
                            message: body.errorMessages && body.errorMessages.length > 0 ? body.errorMessages : body.errors
                        };
                        return callback ? callback(null, err) : resolve(err);
                    }
                    return callback ? callback(null, body) : resolve(body);
                });
            });
        };
        debug("instantiating jira class");
        this._models = {};
        this.settings = settings;
        this.request = settings.request || request;
        this.name = settings.name || '';
        this.prefix = settings.prefix || 'Jira';
        this.resource = {};
        this.baseUrl = `${settings.protocol || 'https'}://${settings.host || 'jira'}`;
        // loop through all the resources, creating a model for each one
        Object.keys(resources).forEach((key) => {
            let jiraModelName = changeCase.pascalCase(`${this.prefix}${key}`);
            let Model = app.loopback.createModel(jiraModelName, {}, { base: 'Model', jiraModelName: key });
            let jiraName = key;
            this.resource[jiraName] = new resources[jiraName](this, Model, this.settings);
            app.model(Model, { public: this.resource[jiraName].definition.public, dataSource: false });
        });
        debug("jira loaded");
    }
};
