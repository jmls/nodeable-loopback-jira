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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    createAvatarFromTemporary = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "type": args[0],
             "owningObjectId": args[1],
             "data": args[2]
            
        };

        return this.makeRequest('createAvatarFromTemporary','POST','rest/api/2/universal_avatar/type/:type/owner/:owningObjectId/avatar',options,callback)
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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    deleteAvatar = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "type": args[0],
             "owningObjectId": args[1],
             "id": args[2],
             "token": args[3]
            
        };

        return this.makeRequest('deleteAvatar','DELETE','rest/api/2/universal_avatar/type/:type/owner/:owningObjectId/avatar/:id',options,callback)
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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getAvatars = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "type": args[0],
             "owningObjectId": args[1],
             "token": args[2]
            
        };

        return this.makeRequest('getAvatars','GET','rest/api/2/universal_avatar/type/:type/owner/:owningObjectId',options,callback)
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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    storeTemporaryAvatar = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "type": args[0],
             "owningObjectId": args[1],
             "filename": args[2],
             "size": args[3],
             "token": args[4]
            
        };

        return this.makeRequest('storeTemporaryAvatar','POST','rest/api/2/universal_avatar/type/:type/owner/:owningObjectId/temp',options,callback)
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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    storeTemporaryAvatarUsingMultiPart = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "type": args[0],
             "owningObjectId": args[1],
             "token": args[2]
            
        };

        return this.makeRequest('storeTemporaryAvatarUsingMultiPart','POST','rest/api/2/universal_avatar/type/:type/owner/:owningObjectId/temp',options,callback)
    };
    

}
