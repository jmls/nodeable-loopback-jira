const debug = require('debug')('loopback:connector:jira.validator');
const ValidatorJS = require('validatorjs');

/**
 * Represents a validator library for the Jira Connector
 *
 * @constructor Validator
 */

export class Validator implements IValidator {

    constructor () {
        ValidatorJS.register("isUpperCase",this.isUpperCase,"The :attribute field is not in upperCase")
        ValidatorJS.register("isLowerCase",this.isLowerCase,"The :attribute field is not in lowerCase")
    }

    /**
     * ensure data is uppercase
     * @param {*} value The value to be validated
     * @param {*} requirement requirement parameter defaults to null
     * @param {string} attribute the attribute to validate
     * @return {string} the encrypted data
     */

    isUpperCase = (value:any, requirement:any = null, attribute:string):boolean => {
        return value.toUpperCase() == value;
    }

    /**
     * ensure data is lowerCase
     * @param {*} value The value to be validated
     * @param {*} requirement requirement parameter defaults to null
     * @param {string} attribute the attribute to validate
     * @return {string} the encrypted data
     */

    isLowerCase = (value:any, requirement:any = null, attribute:string):boolean => {
        return value.toLowerCase() == value;
    }

    /**
     * validate data with the ruleset
     * @param {Object} data The data to be validated
     * @param {Object} rules the rules object
     * @return {boolean|array} the validation result (true === passed, array === list of errors)
     */

    validate = (data:Object, rules:Object):boolean|Object => {
        let result = new ValidatorJS(data,rules);
        return result.passes() ? true : result.errors.errors;
    }


}
