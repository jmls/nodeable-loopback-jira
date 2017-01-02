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
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    validate = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
            
        };

        return this.makeRequest('validate','POST','rest/api/2/licenseValidator',options,callback)
    };
    

}
