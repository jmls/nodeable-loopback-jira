'use strict';

const config = require('./config.json');

const host = config.host || "rest.nodeable.localhost.io";
const should = require('should');
const loopback = require('loopback');
const Jira = require('../');

const nJwt = require('njwt');

const app = loopback();

const jira = new Jira(app,config);

describe('Jira', () => {
    before(() => {});

    it('should have a valid licence', () => {
        return app.models.JiraLicenseValidator.validate().should.be.fulfilled();
    });

    it('should have the correct host',  (done) => {
        jira.settings.host.should.be.eql(host);
        done();
    });

    it('should have the correct baseurl',  (done) => {
        jira.baseUrl.should.be.eql(`https://${host}`);
        done();
    });

}),


describe('when testing the Jira security, it', () => {
    before(() => {});

    it('should encrypt a string correctly',  (done) => {
        jira.security.encrypt("foo").should.be.a.String().which.is.not.eql("foo");
        done();
    });

    it('should encrypt a string using a supplied secret',  (done) => {
        jira.security.encrypt("foo","bar");
        done();
    });

    it('should decrypt a string using the default secret',  (done) => {
        let encryptedValue = jira.security.encrypt("foo");
        let decryptedValue = jira.security.decrypt(encryptedValue);

        decryptedValue.should.be.eql('foo');
        done();
    });

    it('should decrypt a string using a supplied secret',  (done) => {
        let encryptedValue = jira.security.encrypt("foo","baz");
        let decryptedValue = jira.security.decrypt(encryptedValue,"baz");

        decryptedValue.should.be.eql('foo');
        done();
    });

    it('should fail to decrypt a string given an incorrect secret',  (done) => {
        let encryptedValue = jira.security.encrypt("foo","baz");
        (() => jira.security.decrypt(encryptedValue,"buz")).should.throw(Error);
        done();
    });

    it('should return a string when creating a jwt',  (done) => {
        let jwt = jira.security.generateToken({ foo: "baz"});
        should.exist(jwt);
        jwt.should.be.a.String();
        done();
    });

    it('should validate a jwt if using the same secret',  (done) => {
        let data = { foo: "baz"};
        let jwt = jira.security.generateToken(data);
        let tokenData = jira.security.validateToken(jwt);

        tokenData.should.have.property('foo').which.is.eql('baz');
        done();
    });


}),

describe('when checking the Jira default tokens, it', () => {
    before(() => {});

    it('should not initially have a default token',  (done) => {
        should.not.exist(jira.security.getToken());
        done();
    });

    it('should only allow a token to be stored',  (done) => {
        jira.security.setToken("foo");
        should.not.exist(jira.security.getToken());
        done();
    });

    it('should not store a token created with a different secret',  (done) => {
        let jwt = jira.security.generateToken({ foo: "baz"},"somesecret");
        jira.security.setToken(jwt);
        should.not.exist(jira.security.getToken());
        done();
    });

    it('should store a token',  (done) => {
        let jwt = jira.security.generateToken({ foo: "baz"},"somesecret");
        jira.security.setToken(jwt,"somesecret");
        jira.security.getToken().should.be.eql(jwt);
        done();
    });

    it('should delete a stored token',  (done) => {
        let jwt = jira.security.generateToken({ foo: "baz"},"somesecret");
        jira.security.setToken(jwt,"somesecret");
        jira.security.removeToken().should.be.true;
        should.not.exist(jira.security.getToken());
        done();
    });

    it('should not fail when removing a non-existant token',  (done) => {
        let jwt = jira.security.generateToken({ foo: "baz"},"somesecret");
        jira.security.setToken(jwt,"somesecret");
        jira.security.removeToken().should.be.true;
        jira.security.removeToken().should.be.false;
        should.not.exist(jira.security.getToken());
        done();
    });
}),

describe('when testing authentication and tokens, it', function () {
    it('should remove the default token',  (done) => {
        jira.security.removeToken().should.be.true;
        done();
    });

    it('should handle an undefined token',  (done) => {
        (() => jira.security.getSessionId()).should.throw(Error,{message: "invalid token"});
        done();
    });

    it('should handle an invalid sessionid in a token',  (done) => {
        let data = { foo: "baz"};
        let jwt = jira.security.generateToken(data,"somesecret");

        (() => jira.security.getSessionId(jwt,"somesecret")).should.throw(Error,{message: "invalid sessionId"});
        done();
    });

    it('should get a sessionid from a token',  (done) => {
        let authId = Buffer.from('baz', 'utf8').toString('base64');
        let data = { sessionId: jira.security.encrypt(authId,"somesecret")};

        let jwt = jira.security.generateToken(data,"somesecret");


        let sessionId = jira.security.getSessionId(jwt,"somesecret");
        sessionId.should.eql(authId);
        done();
    });
});

