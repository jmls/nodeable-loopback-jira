import {baseResource} from './baseResource';

/**
 * Component 
 *
 * @constructor Component
 * @property {IConnector} connector the jira connector instance
 */

export class Component extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Create a component via POST.
     *
     * @method create
     * @memberOf Component#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.name name 
     * @param {string} options.description description 
     * @param {string} options.lead lead 
     * @param {string} options.leadUserName leadUserName 
     * @param {string} options.assigneeType assigneeType 
     * @param {string} options.assignee assignee 
     * @param {string} options.realAssigneeType realAssigneeType 
     * @param {string} options.realAssignee realAssignee 
     * @param {string} options.isAssigneeTypeValid isAssigneeTypeValid 
     * @param {string} options.project project 
     * @param {string} options.projectId projectId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    create = async options => {

        return this.makeRequest('create','POST','rest/api/2/component',options)
    };
    
    /**
     * Delete a project component.The new component applied to issues whose 'id' component will be deleted.
     *                     If this value is null, then the 'id' component is simply removed from the related isues.
     *
     * @method delete
     * @memberOf Component#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.moveIssuesTo moveIssuesTo The new component applied to issues whose 'id' component will be deleted.
                     If this value is null, then the 'id' component is simply removed from the related isues.
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    delete = async options => {

        return this.makeRequest('delete','DELETE','rest/api/2/component/:id',options)
    };
    
    /**
     * Returns a project component.
     *
     * @method findById
     * @memberOf Component#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    findById = async options => {

        return this.makeRequest('findById','GET','rest/api/2/component/:id',options)
    };
    
    /**
     * Returns counts of issues related to this component.
     *
     * @method getComponentRelatedIssues
     * @memberOf Component#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    getComponentRelatedIssues = async options => {

        return this.makeRequest('getComponentRelatedIssues','GET','rest/api/2/component/:id/relatedIssueCounts',options)
    };
    
    /**
     * Modify a component via PUT. Any fields present in the PUT will override existing values. As a convenience, if a field
     * is not present, it is silently ignored.
     * 
     * If leadUserName is an empty string ("") the component lead will be removed.
     *
     * @method update
     * @memberOf Component#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.name name 
     * @param {string} options.description description 
     * @param {string} options.lead lead 
     * @param {string} options.leadUserName leadUserName 
     * @param {string} options.assigneeType assigneeType 
     * @param {string} options.assignee assignee 
     * @param {string} options.realAssigneeType realAssigneeType 
     * @param {string} options.realAssignee realAssignee 
     * @param {string} options.isAssigneeTypeValid isAssigneeTypeValid 
     * @param {string} options.project project 
     * @param {string} options.projectId projectId 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @return {Promise.<any>} result of api call
     */

    update = async options => {

        return this.makeRequest('update','PUT','rest/api/2/component/:id',options)
    };
    

}
