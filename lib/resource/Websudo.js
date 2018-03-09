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
 * Websudo
 *
 * @constructor Websudo
 * @property {IConnector} connector the jira connector instance
 */
class Websudo extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * This method invalidates the any current WebSudo session.
         *
         * @method release
         * @memberOf Websudo#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.release = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('release', 'DELETE', 'rest/auth/1/websudo', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.Websudo = Websudo;
