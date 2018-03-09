import {baseResource} from './baseResource';

/**
 * Configuration 
 *
 * @constructor Configuration
 * @property {IConnector} connector the jira connector instance
 */

export class Configuration extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns the information if the optional features in JIRA are enabled or disabled. If the time tracking is enabled,
     * it also returns the detailed information about time tracking configuration.
     *
     * @method findById
     * @memberOf Configuration#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    findById = async options => {

        return this.makeRequest('findById','GET','rest/api/2/configuration',options)
    };
    

}
