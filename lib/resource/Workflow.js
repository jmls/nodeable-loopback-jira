"use strict";
const baseResource_1 = require('./baseResource');
/**
 * Workflow REST resource for retrieving workflows.
 *
 * @constructor Workflow
 * @property {IConnector} connector the jira connector instance
 */
class Workflow extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Add a new property to a transition. Trying to add a property that already
         * exists will fail.the name of the property to add.the name of the workflow to use.the type of workflow to use. Can either be "live" or "draft".
         *
         * @method createProperty
         * @memberOf Workflow#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.key key the name of the property to add.
         * @param {string} options.workflowName workflowName the name of the workflow to use.
         * @param {string} options.workflowMode workflowMode the type of workflow to use. Can either be "live" or "draft".
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.createProperty = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "id": args[0],
                "key": args[1],
                "workflowName": args[2],
                "workflowMode": args[3],
                "token": args[4]
            };
            return this.makeRequest('createProperty', 'POST', 'rest/api/2/workflow/:id/properties', options, callback);
        };
        /**
         * Delete a property from the passed transition on the passed workflow. It is not an error to delete a property that
         * does not exist.the name of the property to add.the name of the workflow to use.the type of workflow to use. Can either be "live" or "draft".
         *
         * @method deleteProperty
         * @memberOf Workflow#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.key key the name of the property to add.
         * @param {string} options.workflowName workflowName the name of the workflow to use.
         * @param {string} options.workflowMode workflowMode the type of workflow to use. Can either be "live" or "draft".
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.deleteProperty = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "id": args[0],
                "key": args[1],
                "workflowName": args[2],
                "workflowMode": args[3],
                "token": args[4]
            };
            return this.makeRequest('deleteProperty', 'DELETE', 'rest/api/2/workflow/:id/properties', options, callback);
        };
        /**
         * Returns all workflows.
         *
         * @method find
         * @memberOf Workflow#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.workflowName workflowName
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.find = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "workflowName": args[0],
                "token": args[1]
            };
            return this.makeRequest('find', 'GET', 'rest/api/2/workflow', options, callback);
        };
        /**
         * Return the property or properties associated with a transition.some keys under the "jira." prefix are editable, some are not. Set this to true
         *                            in order to include the non-editable keys in the response.the name of the property key to query. Can be left off the query to return all properties.the name of the workflow to use.the type of workflow to use. Can either be "live" or "draft".
         *
         * @method getProperties
         * @memberOf Workflow#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.includeReservedKeys includeReservedKeys some keys under the "jira." prefix are editable, some are not. Set this to true
                                in order to include the non-editable keys in the response.
         * @param {string} options.key key the name of the property key to query. Can be left off the query to return all properties.
         * @param {string} options.workflowName workflowName the name of the workflow to use.
         * @param {string} options.workflowMode workflowMode the type of workflow to use. Can either be "live" or "draft".
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getProperties = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "id": args[0],
                "includeReservedKeys": args[1],
                "key": args[2],
                "workflowName": args[3],
                "workflowMode": args[4],
                "token": args[5]
            };
            return this.makeRequest('getProperties', 'GET', 'rest/api/2/workflow/:id/properties', options, callback);
        };
        /**
         * Update/add new property to a transition. Trying to update a property that does
         * not exist will result in a new property being added.the name of the property to add.the name of the workflow to use.the type of workflow to use. Can either be "live" or "draft".
         *
         * @method updateProperty
         * @memberOf Workflow#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.id id
         * @param {string} options.key key the name of the property to add.
         * @param {string} options.workflowName workflowName the name of the workflow to use.
         * @param {string} options.workflowMode workflowMode the type of workflow to use. Can either be "live" or "draft".
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.updateProperty = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "id": args[0],
                "key": args[1],
                "workflowName": args[2],
                "workflowMode": args[3],
                "token": args[4]
            };
            return this.makeRequest('updateProperty', 'PUT', 'rest/api/2/workflow/:id/properties', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Workflow = Workflow;
