import {baseResource} from './baseResource';

/**
 * Upgrade REST resource for executing and querying delayed upgrades.
 *
 * @constructor Upgrade
 * @property {IConnector} connector the jira connector instance
 */

export class Upgrade extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns the result of the last upgrade task.
     *
     * Returns {@link javax.ws.rs.core.Response#seeOther(java.net.URI)} if still running.
     *
     * @method getUpgradeResult
     * @memberOf Upgrade#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getUpgradeResult = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getUpgradeResult','GET','rest/api/2/upgrade',options,callback)
    };
    
    /**
     * Runs any pending delayed upgrade tasks.  Need Admin permissions to do this.
     *
     * @method runUpgradesNow
     * @memberOf Upgrade#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    runUpgradesNow = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('runUpgradesNow','POST','rest/api/2/upgrade',options,callback)
    };
    

}
