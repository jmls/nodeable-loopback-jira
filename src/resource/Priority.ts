import {baseResource} from './baseResource';

/**
 * Priority 
 *
 * @constructor Priority
 * @property {IConnector} connector the jira connector instance
 */

export class Priority extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns an issue priority.
     *
     * @method findById
     * @memberOf Priority#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    findById = async options => {

        return this.makeRequest('findById','GET','rest/api/2/priority/:id',options)
    };
    
    /**
     * Returns a list of all issue priorities.
     *
     * @method getPriorities
     * @memberOf Priority#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getPriorities = async options => {

        return this.makeRequest('getPriorities','GET','rest/api/2/priority',options)
    };
    

}
