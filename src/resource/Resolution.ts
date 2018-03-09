import {baseResource} from './baseResource';

/**
 * Resolution 
 *
 * @constructor Resolution
 * @property {IConnector} connector the jira connector instance
 */

export class Resolution extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns a resolution.
     *
     * @method findById
     * @memberOf Resolution#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    findById = async options => {

        return this.makeRequest('findById','GET','rest/api/2/resolution/:id',options)
    };
    
    /**
     * Returns a list of all resolutions.
     *
     * @method getResolutions
     * @memberOf Resolution#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getResolutions = async options => {

        return this.makeRequest('getResolutions','GET','rest/api/2/resolution',options)
    };
    

}
