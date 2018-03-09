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
 * ClusterZdu
 *
 * @constructor ClusterZdu
 * @property {IConnector} connector the jira connector instance
 */
class ClusterZdu extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         *
         *
         * @method approveUpgrade
         * @memberOf ClusterZdu#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.approveUpgrade = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('approveUpgrade', 'POST', 'rest/api/2/cluster/zdu/approve', options);
        });
        /**
         *
         *
         * @method cancelUpgrade
         * @memberOf ClusterZdu#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.cancelUpgrade = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('cancelUpgrade', 'POST', 'rest/api/2/cluster/zdu/cancel', options);
        });
        /**
         *
         *
         * @method getState
         * @memberOf ClusterZdu#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getState = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getState', 'GET', 'rest/api/2/cluster/zdu/state', options);
        });
        /**
         *
         *
         * @method setReadyToUpgrade
         * @memberOf ClusterZdu#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.setReadyToUpgrade = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('setReadyToUpgrade', 'POST', 'rest/api/2/cluster/zdu/start', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.ClusterZdu = ClusterZdu;
