import {baseResource} from './baseResource';

/**
 * LicenseValidator 
 *
 * @constructor LicenseValidator
 * @property {IConnector} connector the jira connector instance
 */

export class LicenseValidator extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * 
     *
     * @method validate
     * @memberOf LicenseValidator#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    validate = async options => {

        return this.makeRequest('validate','POST','rest/api/2/licenseValidator',options)
    };
    

}
