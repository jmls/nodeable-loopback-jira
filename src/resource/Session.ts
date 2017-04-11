import {baseResource} from './baseResource';

/**
 * Session Implement a REST resource for acquiring a session cookie.
 *
 * @constructor Session
 * @property {IConnector} connector the jira connector instance
 */

export class Session extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Returns information about the currently authenticated user's session. If the caller is not authenticated they
     * will get a 401 Unauthorized status code.
     *
     * @method currentUser
     * @memberOf Session#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    currentUser = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "token": args[0]
            
        };

        return this.makeRequest('currentUser','GET','rest/auth/1/session',options,callback)
    };
    
    /**
     * Creates a new session for a user in JIRA. Once a session has been successfully created it can be used to access
     *     * any of JIRA's remote APIs and also the web UI by passing the appropriate HTTP Cookie header.
     *     * 
     *     * Note that it is generally preferrable to use HTTP BASIC authentication with the REST API. However, this resource
     *     * may be used to mimic the behaviour of JIRA's log-in page (e.g. to display log-in errors to a user).
     *     * Note that the response contains the Set-Cookie HTTP headers that must be honoured by the
     *     * caller. If you are using a cookie-aware HTTP client then it will handle all Set-Cookie headers
     *     * automatically. This is important because setting the JSESSIONID cookie alone may not be
     *     * sufficient for the authentication to work.Schema{"id":"https://docs.atlassian.com/jira/REST/schema/auth-success#","title":"Auth Success","type":"object","properties":{"session":{"title":"Session Info","type":"object","properties":{"name":{"type":"string"},"value":{"type":"string"}},"additionalProperties":false},"loginInfo":{"title":"Login Info","type":"object","properties":{"failedLoginCount":{"type":"integer"},"loginCount":{"type":"integer"},"lastFailedLoginTime":{"type":"string"},"previousLoginTime":{"type":"string"}},"additionalProperties":false}},"additionalProperties":false}
     *
     * @method login
     * @memberOf Session#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.username username 
     * @param {string} options.password password 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    login = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "data": args[0]
            
        };

        return this.makeRequest('login','POST','rest/auth/1/session',options,callback)
    };
    
    /**
     * Logs the current user out of JIRA, destroying the existing session, if any.
     *
     * @method logout
     * @memberOf Session#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    logout = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "token": args[0]
            
        };

        return this.makeRequest('logout','DELETE','rest/auth/1/session',options,callback)
    };
    

}
