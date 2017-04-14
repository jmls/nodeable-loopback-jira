"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseResource_1 = require("./baseResource");
/**
 * Password REST resource for operations related to passwords and the password policy.
 *
 * @constructor Password
 * @property {IConnector} connector the jira connector instance
 */
class Password extends baseResource_1.baseResource {
    constructor(connector, Model, settings) {
        super(connector, Model, settings);
        /**
         * Returns the list of requirements for the current password policy. For example, "The password must have at least 10 characters.",
         * "The password must not be similar to the user's name or email address.", etc.Default: falsewhether or not the user will be required to enter their current password.  Use
         *                       {@code false} (the default) if this is a new user or if an administrator is forcibly changing
         *                       another user's password.
         *
         * @method getPasswordPolicy
         * @memberOf Password#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.hasOldPassword hasOldPassword Default: falsewhether or not the user will be required to enter their current password.  Use
                           {@code false} (the default) if this is a new user or if an administrator is forcibly changing
                           another user's password.
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.getPasswordPolicy = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "hasOldPassword": args[0],
                "token": args[1]
            };
            return this.makeRequest('getPasswordPolicy', 'GET', 'rest/api/2/password/policy', options, callback);
        };
        /**
         * Returns a list of statements explaining why the password policy would disallow a proposed password for a new user.
         *
         * You can use this method to test the password policy validation. This could be done prior to an action
         * where a new user and related password are created, using methods like the ones in
         * UserService.
         * For example, you could use this to validate a password in a create user form in the user interface, as the user enters it.
         * The username and new password must be not empty to perform the validation.
         * Note, this method will help you validate against the policy only. It won't check any other validations that might be performed
         * when creating a new user, e.g. checking whether a user with the same name already exists.
         *
         *
         * @method policyCheckCreateUser
         * @memberOf Password#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.username username
         * @param {string} options.displayName displayName
         * @param {string} options.emailAddress emailAddress
         * @param {string} options.password password
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.policyCheckCreateUser = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "data": args[0]
            };
            return this.makeRequest('policyCheckCreateUser', 'POST', 'rest/api/2/password/policy/createUser', options, callback);
        };
        /**
         * Returns a list of statements explaining why the password policy would disallow a proposed new password for a user with an existing password.
         *
         * You can use this method to test the password policy validation. This could be done prior to an action where the password
         * is actually updated, using methods like ChangePassword
         * or ResetPassword.
         * For example, you could use this to validate a password in a change password form in the user interface, as the user enters it.
         * The user must exist and the username and new password must be not empty, to perform the validation.
         * Note, this method will help you validate against the policy only. It won't check any other validations that might be performed
         * when submitting a password change/reset request, e.g. verifying whether the old password is valid.
         *
         *
         * @method policyCheckUpdateUser
         * @memberOf Password#
         * @param {Object} options An object containing options to pass to the Jira API.
         * @param {string} options.username username
         * @param {string} options.oldPassword oldPassword
         * @param {string} options.newPassword newPassword
         * @param {string} options.token token The token to use for authentication. This token is supplied on a sucessful login. If not supplied, the default token (if set) is used
         * @param [callback] if supplied, called with result of api call
         * @return {Promise.<any>} result of api call
         */
        this.policyCheckUpdateUser = (...args) => {
            let callback = ((typeof args[args.length - 1]) === 'function') ? args.pop() : null;
            let options = ((typeof args[0]) === 'object') ? args[0] : {
                "data": args[0]
            };
            return this.makeRequest('policyCheckUpdateUser', 'POST', 'rest/api/2/password/policy/updateUser', options, callback);
        };
        this.methods = [];
        this.register();
    }
}
exports.Password = Password;
