import {baseResource} from './baseResource';

/**
 * Securitylevel 
 *
 * @constructor Securitylevel
 * @property {IConnector} connector the jira connector instance
 */

export class Securitylevel extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns a full representation of the security level that has the given id.
     *
     * @method getIssuesecuritylevel
     * @memberOf Securitylevel#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getIssuesecuritylevel = async options => {

        return this.makeRequest('getIssuesecuritylevel','GET','rest/api/2/securitylevel/:id',options)
    };
    

}
