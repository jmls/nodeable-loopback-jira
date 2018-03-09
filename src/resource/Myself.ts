import {baseResource} from './baseResource';

/**
 * Myself Currently logged user resource
 *
 * @constructor Myself
 * @property {IConnector} connector the jira connector instance
 */

export class Myself extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Modify caller password.
     *
     * @method changeMyPassword
     * @memberOf Myself#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.password password 
     * @param {string} options.currentPassword currentPassword 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    changeMyPassword = async options => {

        return this.makeRequest('changeMyPassword','PUT','rest/api/2/myself/password',options)
    };
    
    /**
     * Returns currently logged user. This resource cannot be accessed anonymously.
     *
     * @method getUser
     * @memberOf Myself#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getUser = async options => {

        return this.makeRequest('getUser','GET','rest/api/2/myself',options)
    };
    
    /**
     * Modify currently logged user. The "value" fields present will override the existing value.
     * Fields skipped in request will not be changed. Only email and display name can be change that way.
     * Requires user password.
     *
     * @method updateUser
     * @memberOf Myself#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.key key 
     * @param {string} options.name name 
     * @param {string} options.password password 
     * @param {string} options.emailAddress emailAddress 
     * @param {string} options.displayName displayName 
     * @param {string} options.notification notification 
     * @param {string} options.applicationKeys applicationKeys 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    updateUser = async options => {

        return this.makeRequest('updateUser','PUT','rest/api/2/myself',options)
    };
    

}
