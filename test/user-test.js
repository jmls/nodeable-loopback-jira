'use strict';

const config = require('./config.json');
const Jira = require('../');
const loopback = require('loopback');
const app = loopback();
const jira = new Jira(app,config);

const faker = require('faker');
const should = require('should');

const User = app.models.JiraUser;

// let fakeName = faker.random.word().replace(/ /g,'').replace(/-/g,'').replace(/_/g,'');

// let testData = {
//     name: fakeName,
//     displayName: "john Smith",
//     emailAddress: "some@thing.com"
// };

describe('When testing the User login, it ', () => {

    it('should fail with invalid username',  () => {
        return User.login({username: "foo", password: "bar"}).should.be.rejected();
    });

    it('should pass using the "normal" user credentials',  () => {
        return User.login(config.users.normal).should.be.fulfilled();
    });

    it('should return a valid jwt token',  (done) => {
        User.login(config.users.normal).then((result) => {
            result.session.should.have.a.property('jwt');
            result.session.should.not.have.a.property('sessionId');
            result.session.jwt.should.be.a.String();

            let tokenData = jira.security.validateToken(result.session.jwt);

            tokenData.should.have.property('value');
            tokenData.should.have.property('sessionId');

            return done();
        }).catch((e) => {
            return done(e);
        });

    });
});
