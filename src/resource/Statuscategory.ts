import {baseResource} from './baseResource';

/**
 * Statuscategory 
 *
 * @constructor Statuscategory
 * @property {IConnector} connector the jira connector instance
 */

export class Statuscategory extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns a list of all status categories
     *
     * @method getStatusCategories
     * @memberOf Statuscategory#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getStatusCategories = async options => {

        return this.makeRequest('getStatusCategories','GET','rest/api/2/statuscategory',options)
    };
    
    /**
     * Returns a full representation of the StatusCategory having the given id or key
     *
     * @method getStatusCategory
     * @memberOf Statuscategory#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.idOrKey idOrKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getStatusCategory = async options => {

        return this.makeRequest('getStatusCategory','GET','rest/api/2/statuscategory/:idOrKey',options)
    };
    

}
