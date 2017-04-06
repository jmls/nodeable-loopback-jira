const debug = require('debug')('loopback:connector:jira.security');
const _secret = Symbol('secret');
const crypto = require("crypto-extra");
const nJwt = require('njwt');

/**
 * Represents a security client for the Jira Connector
 *
 * @constructor Security
 * @property {ISecurity} settings
 * @property {ISecurity.secret} secret to use
 */

export class Security implements ISecurity {

    private storedToken;

    constructor (settings:any) {
        this[_secret] = settings.secret || crypto.generateKey();
    }

    /**
     * decrypt the supplied data using an optional secret
     * @param {string} data The data to be encrypted
     * @param {string} secret The secret to use (defaults to class secret)
     * @return {string} the decrypted data
     */

    decrypt = (data:string,secret:string = this[_secret]):string => {
        return crypto.decrypt(data,secret);
    }

    /**
     * encrypt the supplied data using an optional secret
     * @param {string} data The data to be encrypted
     * @param {string} secret The secret to use (defaults to class secret)
     * @return {string} the encrypted data
     */

    encrypt = (data:string, secret:string = this[_secret]):string => {
        return crypto.encrypt(data,secret);
    }

    /**
     * generate a JWT using data and an optional secret
     * @param {*} data The data to be stored in the JWT
     * @param {string} secret The secret to use (defaults to class secret)
     * @return {string} the compacted jwt
     */

    generateToken = (data:any, secret:string = this[_secret]):string => {
        let jwt = nJwt.create(data,secret);

        return jwt.compact();
    }

    /**
     * get the decrypted sessionid from a token
     * @param {string} token The token to store
     * @param {string} secret The secret to use (defaults to class secret)
     * @return {string} the auth string
     */

    getSessionId = (token:string,secret:string = this[_secret]):string => {
        let result = this.validateToken(token,secret);

        if (!result) {
            throw new Error("invalid token");
        }

        if (!result || !result.session.sessionId) {
            throw new Error("invalid sessionId");
        }

        return this.decrypt(result.session.sessionId,secret);
    }

    /**
     * get a previouly stored token
     * @return {string} the stored jwt
     */

    getToken = ():string => {
        return this.storedToken;
    }

    /**
     * remove a default token
     * @return {boolean} result true if a stored token was removed, false if there was no token to remove
     */

    removeToken = ():boolean => {
        if (!this.storedToken) {
            return false;
        }

        delete this.storedToken;

        return true;
    }

    /**
     * set a default token
     * only jwt tokens are allowed
     * only tokens sealed with the same secret as the parameter or default key are allowed
     * @param {string} token The token to store
     * @return {string} the stored jwt
     */

    setToken = (token:string,secret:string = this[_secret]):void => {
        debug("setToken");

        if (!this.validateToken(token,secret)) {
            debug("token not validated");
            return;
        }

        debug("token stored");
        this.storedToken = token;
    }

    /**
     * validate the supplied JWT using an optional secret
     * @param {*} data The JWT to be validated
     * @param {string} secret The secret to use (defaults to class secret)
     * @return {*} the jwt.body property
     */

    validateToken = (data:any, secret:string = this[_secret]):any => {

        try{
          return nJwt.verify(data,secret).body;
        }

        catch(e) {
            return null;
        }
    }


}
