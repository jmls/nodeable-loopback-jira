import {baseResource} from './baseResource';

/**
 * ProjectType 
 *
 * @constructor ProjectType
 * @property {IConnector} connector the jira connector instance
 */

export class ProjectType extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns all the project types defined on the JIRA instance, not taking into account whether
     * the license to use those project types is valid or not.
     *
     * @method find
     * @memberOf ProjectType#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    find = async options => {

        return this.makeRequest('find','GET','rest/api/2/project/type',options)
    };
    
    /**
     * Returns the project type with the given key, if it is accessible to the logged in user.
     * This takes into account whether the user is licensed on the Application that defines the project type.
     *
     * @method getAccessibleProjectTypeByKey
     * @memberOf ProjectType#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectTypeKey projectTypeKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getAccessibleProjectTypeByKey = async options => {

        return this.makeRequest('getAccessibleProjectTypeByKey','GET','rest/api/2/project/type/:projectTypeKey/accessible',options)
    };
    
    /**
     * Returns the project type with the given key.
     *
     * @method getProjectTypeByKey
     * @memberOf ProjectType#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.projectTypeKey projectTypeKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getProjectTypeByKey = async options => {

        return this.makeRequest('getProjectTypeByKey','GET','rest/api/2/project/type/:projectTypeKey',options)
    };
    

}
