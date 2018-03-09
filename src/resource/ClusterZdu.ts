import {baseResource} from './baseResource';

/**
 * ClusterZdu 
 *
 * @constructor ClusterZdu
 * @property {IConnector} connector the jira connector instance
 */

export class ClusterZdu extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * 
     *
     * @method approveUpgrade
     * @memberOf ClusterZdu#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    approveUpgrade = async options => {

        return this.makeRequest('approveUpgrade','POST','rest/api/2/cluster/zdu/approve',options)
    };
    
    /**
     * 
     *
     * @method cancelUpgrade
     * @memberOf ClusterZdu#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    cancelUpgrade = async options => {

        return this.makeRequest('cancelUpgrade','POST','rest/api/2/cluster/zdu/cancel',options)
    };
    
    /**
     * 
     *
     * @method getState
     * @memberOf ClusterZdu#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getState = async options => {

        return this.makeRequest('getState','GET','rest/api/2/cluster/zdu/state',options)
    };
    
    /**
     * 
     *
     * @method setReadyToUpgrade
     * @memberOf ClusterZdu#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    setReadyToUpgrade = async options => {

        return this.makeRequest('setReadyToUpgrade','POST','rest/api/2/cluster/zdu/start',options)
    };
    

}
