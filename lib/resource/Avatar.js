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
 * Avatar
 *
 * @constructor Avatar
 * @property {IConnector} connector the jira connector instance
 */
class Avatar extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Updates the cropping instructions of the temporary avatar.
         *
         * @method createAvatarFromTemporary
         * @memberOf Avatar#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.type type
         * @param {string} options.cropperWidth cropperWidth
         * @param {string} options.cropperOffsetX cropperOffsetX
         * @param {string} options.cropperOffsetY cropperOffsetY
         * @param {string} options.url url
         * @param {string} options.needsCropping needsCropping
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.createAvatarFromTemporary = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('createAvatarFromTemporary', 'POST', 'rest/api/2/avatar/:type/temporaryCrop', options);
        });
        /**
         * Returns all system avatars of the given type.
         *
         * @method getAllSystemAvatars
         * @memberOf Avatar#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.type type
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.getAllSystemAvatars = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('getAllSystemAvatars', 'GET', 'rest/api/2/avatar/:type/system', options);
        });
        /**
         * Creates temporary avatarname of file being uploadedsize of file
         *
         * @method storeTemporaryAvatar
         * @memberOf Avatar#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.type type
         * @param {string} options.filename filename name of file being uploaded
         * @param {string} options.size size size of file
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @return {Promise.<any>} result of api call
         */
        this.storeTemporaryAvatar = (options) => __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('storeTemporaryAvatar', 'POST', 'rest/api/2/avatar/:type/temporary', options);
        });
        this.methods = [];
        this.register();
    }
}
exports.Avatar = Avatar;
