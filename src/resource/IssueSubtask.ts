import {baseResource} from './baseResource';

/**
 * IssueSubtask 
 *
 * @constructor IssueSubtask
 * @property {IConnector} connector the jira connector instance
 */

export class IssueSubtask extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * 
     *
     * @method canMoveSubTask
     * @memberOf IssueSubtask#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    canMoveSubTask = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('canMoveSubTask','GET','rest/api/2/issue/:issueIdOrKey/subtask/move',options,callback)
    };
    
    /**
     * Returns an issue's subtask list
     *
     * @method getSubTasks
     * @memberOf IssueSubtask#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getSubTasks = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('getSubTasks','GET','rest/api/2/issue/:issueIdOrKey/subtask',options,callback)
    };
    
    /**
     * Reorders an issue's subtasks by moving the subtask at index "from"
     * to index "to".
     *
     * @method moveSubTasks
     * @memberOf IssueSubtask#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.issueIdOrKey issueIdOrKey 
     * @param {string} options.current current 
     * @param {string} options.original original 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    moveSubTasks = (...args : any[]):Promise<any> => {

        if (args.length === 0) {
            throw new Error("options must be passed");
        }

        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {}

        return this.makeRequest('moveSubTasks','POST','rest/api/2/issue/:issueIdOrKey/subtask/move',options,callback)
    };
    

}
