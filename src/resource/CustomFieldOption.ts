import {baseResource} from './baseResource';

/**
 * CustomFieldOption 
 *
 * @constructor CustomFieldOption
 * @property {IConnector} connector the jira connector instance
 */

export class CustomFieldOption extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns a full representation of the Custom Field Option that has the given id.
     *
     * @method findById
     * @memberOf CustomFieldOption#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    findById = async options => {

        return this.makeRequest('findById','GET','rest/api/2/customFieldOption/:id',options)
    };
    

}
