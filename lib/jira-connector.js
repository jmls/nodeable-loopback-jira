"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require('debug')('loopback:connector:jira.jira-connector');
const security_1 = require("./security");
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
         * @param {string} username The user name
         * @param {string} password The user password
         * @param {string} id session id to use
         * @param {function} [callback] The callback function
         */
        this.login = (...args) => {
            debug("login");
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                username: args[0],
                password: args[1],
                sessionId: args[2]
            };
            let sessionData;
            return new Promise((resolve, reject) => {
                return this.makeRequest({
                    method: 'POST',
                    path: 'rest/auth/1/session',
                    ignoreAuth: true,
                    body: options
                }).then((result) => {
                    sessionData = result;
                    sessionData.session.sessionId = this.security.encrypt(Buffer.from(`${options.username}:${options.password}`, 'utf8').toString('base64'));
                    let token = this.security.generateToken(sessionData);
                    return this.resource.User.findById({
                        username: options.username,
                        token
                    });
                }).then((user) => {
                    let tokenData = {
                        key: user.key,
                        name: user.name,
                        emailAddress: user.emailAddress,
                        displayName: user.displayName,
                        applicationRoles: user.applicationRoles,
                        session: sessionData.session
                    };
                    tokenData.session.jwt = this.security.generateToken(tokenData);
                    delete tokenData.session.sessionId;
                    debug("login successful");
                    return callback ? callback(null, tokenData) : resolve(tokenData);
                })
                    .catch((e) => {
                    debug("unable to login", e);
                    return callback ? callback(e) : reject(e);
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
            debug(`makeRequest`);
            let requestOpts = {
                method: requestOptions.method,
                json: true,
                followAllRedirects: true,
                token: requestOptions.token,
                body: requestOptions.body,
                qs: requestOptions.qs,
                headers: {},
                uri: `${this.baseUrl}/${requestOptions.path}`
            };
            if (!requestOpts.token) {
                requestOpts.token = this.security.getToken();
            }
            let sessionId;
            if (requestOptions.tokenRequired) {
                try {
                    sessionId = this.security.getSessionId(requestOpts.token);
                }
                catch (e) {
                    if (requestOptions.tokenRequired) {
                        let err = { statusCode: 401, message: 'no token supplied' };
                        return callback ? callback(err) : Promise.reject(err);
                    }
                }
                if (sessionId) {
                    requestOpts.headers.Authorization = `Basic ${sessionId}`;
                }
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
        this.security = new security_1.Security(settings);
        this.baseUrl = `${settings.protocol || 'https'}://${settings.host || 'jira'}`;
        // loop through all the resources, creating a model for each one
        Object.keys(resources).forEach((key) => {
            let jiraModelName = changeCase.pascalCase(`${this.prefix}${key}`);
            let Model = app.loopback.createModel(jiraModelName, {}, { base: 'Model', jiraModelName: key });
            let jiraName = key;
            this.resource[jiraName] = new resources[jiraName](this, Model, this.settings);
            app.model(Model, { public: this.resource[jiraName].definition.public, dataSource: false });
        });
        app.use('/api/token/refresh', (req, res) => {
            let jwt;
            if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
                jwt = req.headers.authorization.split(' ')[1];
            }
            else if (req.query) {
                jwt = req.query.token || req.query.access_token;
            }
            this.security.refreshToken(jwt)
                .then((token) => {
                return res.status(200).json({ token });
            })
                .catch((e) => {
                return res.status(406).send(e.message);
            });
        });
        debug("jira loaded");
    }
};
