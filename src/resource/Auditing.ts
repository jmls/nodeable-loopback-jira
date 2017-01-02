import {baseResource} from './baseResource';

/**
 * Auditing Resource representing the auditing records
 *
 * @constructor Auditing
 * @property {IConnector} connector the jira connector instance
 */

export class Auditing extends baseResource {

    constructor (connector:IConnector,Model:any,settings:any) {
        super(connector,Model,settings);
        this.methods = [];
        this.register();
    }

    
    /**
     * Store a record in Audit Log
     *
     * @method addRecord
     * @memberOf Auditing#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.id id 
     * @param {string} options.summary summary 
     * @param {string} options.remoteAddress remoteAddress 
     * @param {string} options.authorKey authorKey 
     * @param {string} options.created created 
     * @param {string} options.category category 
     * @param {string} options.eventSource eventSource 
     * @param {string} options.description description 
     * @param {string} options.objectItem objectItem 
     * @param {string} options.changedValues changedValues 
     * @param {string} options.associatedItems associatedItems 
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    addRecord = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "data": args[0]
            
        };

        return this.makeRequest('addRecord','POST','rest/api/2/auditing/record',options,callback)
    };
    
    /**
     * Returns auditing records filtered using provided parameters- the number of record from which search starts- maximum number of returned results (if is limit is  1000, it will be set do default value: 1000)- text query; each record that will be returned must contain the provided text in one of its fields- timestamp in past; 'from' must be less or equal 'to', otherwise the result set will be empty
     *               only records that where created in the same moment or after the 'from' timestamp will be provided in response- timestamp in past; 'from' must be less or equal 'to', otherwise the result set will be empty
     *               only records that where created in the same moment or earlier than the 'to' timestamp will be provided in response
     *
     * @method getRecords
     * @memberOf Auditing#
     * @param {Object} options An object containing options to pass to the Jira API.
     * @param {string} options.offset offset - the number of record from which search starts
     * @param {string} options.limit limit - maximum number of returned results (if is limit is  1000, it will be set do default value: 1000)
     * @param {string} options.filter filter - text query; each record that will be returned must contain the provided text in one of its fields
     * @param {string} options.from from - timestamp in past; 'from' must be less or equal 'to', otherwise the result set will be empty
               only records that where created in the same moment or after the 'from' timestamp will be provided in response
     * @param {string} options.to to - timestamp in past; 'from' must be less or equal 'to', otherwise the result set will be empty
               only records that where created in the same moment or earlier than the 'to' timestamp will be provided in response
     * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
     * @param [callback] if supplied, called with result of api call
     * @return {Promise.<any>} result of api call
     */

    getRecords = (...args : any[]):Promise<any> => {
        let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;

        let options = ((typeof args[0]) === 'object') ? args[0] : {
             "offset": args[0],
             "limit": args[1],
             "filter": args[2],
             "from": args[3],
             "to": args[4],
             "token": args[5]
            
        };

        return this.makeRequest('getRecords','GET','rest/api/2/auditing/record',options,callback)
    };
    

}
