import {baseResource} from './baseResource';

/**
 * Universal_avatar 
 *
 * @constructor Universal_avatar
 * @property {IConnector} connector the jira connector instance
 */

export class Universal_avatar extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * 
     *
     * @method createAvatarFromTemporary
     * @memberOf Universal_avatar#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.type type 
     * @param {string} options.owningObjectId owningObjectId 
     * @param {string} options.cropperWidth cropperWidth 
     * @param {string} options.cropperOffsetX cropperOffsetX 
     * @param {string} options.cropperOffsetY cropperOffsetY 
     * @param {string} options.url url 
     * @param {string} options.needsCropping needsCropping 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    createAvatarFromTemporary = async options => {

        return this.makeRequest('createAvatarFromTemporary','POST','rest/api/2/universal_avatar/type/:type/owner/:owningObjectId/avatar',options)
    };
    
    /**
     * Deletes avatar
     *
     * @method deleteAvatar
     * @memberOf Universal_avatar#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.type type 
     * @param {string} options.owningObjectId owningObjectId 
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    deleteAvatar = async options => {

        return this.makeRequest('deleteAvatar','DELETE','rest/api/2/universal_avatar/type/:type/owner/:owningObjectId/avatar/:id',options)
    };
    
    /**
     * 
     *
     * @method getAvatars
     * @memberOf Universal_avatar#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.type type 
     * @param {string} options.owningObjectId owningObjectId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getAvatars = async options => {

        return this.makeRequest('getAvatars','GET','rest/api/2/universal_avatar/type/:type/owner/:owningObjectId',options)
    };
    
    /**
     * Creates temporary avatarname of file being uploadedsize of file
     *
     * @method storeTemporaryAvatar
     * @memberOf Universal_avatar#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.type type 
     * @param {string} options.owningObjectId owningObjectId 
     * @param {string} options.filename filename name of file being uploaded
     * @param {string} options.size size size of file
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    storeTemporaryAvatar = async options => {

        return this.makeRequest('storeTemporaryAvatar','POST','rest/api/2/universal_avatar/type/:type/owner/:owningObjectId/temp',options)
    };
    
    /**
     * 
     *
     * @method storeTemporaryAvatarUsingMultiPart
     * @memberOf Universal_avatar#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.type type 
     * @param {string} options.owningObjectId owningObjectId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    storeTemporaryAvatarUsingMultiPart = async options => {

        return this.makeRequest('storeTemporaryAvatarUsingMultiPart','POST','rest/api/2/universal_avatar/type/:type/owner/:owningObjectId/temp',options)
    };
    

}
