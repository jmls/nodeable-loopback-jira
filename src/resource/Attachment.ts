import {baseResource} from './baseResource';

/**
 * Attachment 
 *
 * @constructor Attachment
 * @property {IConnector} connector the jira connector instance
 */

export class Attachment extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Remove an attachment from an issue.
     *
     * @method deleteById
     * @memberOf Attachment#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    deleteById = async options => {

        return this.makeRequest('deleteById','DELETE','rest/api/2/attachment/:id',options)
    };
    
    /**
     * Tries to expand an attachment. Output is human-readable and subject to change.
     *
     * @method expandForHumans
     * @memberOf Attachment#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    expandForHumans = async options => {

        return this.makeRequest('expandForHumans','GET','rest/api/2/attachment/:id/expand/human',options)
    };
    
    /**
     * Tries to expand an attachment. Output is raw and should be backwards-compatible through the course of time.
     *
     * @method expandForMachines
     * @memberOf Attachment#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    expandForMachines = async options => {

        return this.makeRequest('expandForMachines','GET','rest/api/2/attachment/:id/expand/raw',options)
    };
    
    /**
     * Returns the meta-data for an attachment, including the URI of the actual attached file.
     *
     * @method findById
     * @memberOf Attachment#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    findById = async options => {

        return this.makeRequest('findById','GET','rest/api/2/attachment/:id',options)
    };
    
    /**
     * Returns the meta information for an attachments, specifically if they are enabled and the maximum upload size
     * allowed.
     *
     * @method getAttachmentMeta
     * @memberOf Attachment#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getAttachmentMeta = async options => {

        return this.makeRequest('getAttachmentMeta','GET','rest/api/2/attachment/meta',options)
    };
    

}
