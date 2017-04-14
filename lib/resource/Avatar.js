"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.createAvatarFromTemporary = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "type": args[0],
                "data": args[1]
            };
            return this.makeRequest('createAvatarFromTemporary', 'POST', 'rest/api/2/avatar/:type/temporaryCrop', options, callback);
        };
        /**
         * Returns all system avatars of the given type.
         *
         * @method getAllSystemAvatars
         * @memberOf Avatar#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.type type
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getAllSystemAvatars = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "type": args[0],
                "token": args[1]
            };
            return this.makeRequest('getAllSystemAvatars', 'GET', 'rest/api/2/avatar/:type/system', options, callback);
        };
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
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.storeTemporaryAvatar = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "type": args[0],
                "filename": args[1],
                "size": args[2],
                "token": args[3]
            };
            return this.makeRequest('storeTemporaryAvatar', 'POST', 'rest/api/2/avatar/:type/temporary', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Avatar = Avatar;
