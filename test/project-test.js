'use strict';
const config = require('./config.json');
const Jira = require('../');
const loopback = require('loopback');
const app = loopback();
const jira = new Jira(app,config);

const faker = require('faker');
const should = require('should');

const User = app.models.JiraUser;

const modelName = "JiraProject";
const Model = app.models[modelName];

let fakeName = faker.random.word().replace(/ /g,'').replace(/-/g,'').replace(/_/g,'');

let goodData = {
    projectTypeKey: 'software',
    key: fakeName.toUpperCase().substring(0,10),
    description: "sample description",
    name: fakeName,
    lead: config.users.normal.username
};

let badData = [{
    projectTypeKey: 'software',
    key: 'CAMBRIDGESHIRE',
    description: "sample description",
    name: 'CAMBRIDGESHIRE',
    lead: config.users.normal.username
},
{
    projectTypeKey: 'software',
    key: 'C',
    description: "sample description",
    name: 'C',
    lead: config.users.normal.username
},
{
    projectTypeKey: 'software',
    key: 'DemoName',
    description: "sample description",
    name: 'DemoName',
    lead: config.users.normal.username
},
{
    projectTypeKey: 'software',
    description: "sample description",
    name: 'nokey',
    lead: config.users.normal.username
}];

require('./common-tests')(modelName);

describe(`when testing the ${modelName} api, `, () => {
    let token;

    before((done) => {
        User.login(config.users.admin).then((result) => {
            token = result.session.jwt;
            return done();
        }).catch((e) => {
            done(e);
        });
    });

    it(`should retrieve an array of records.`,  function() {
        return Model.find({token}).should.be.fulfilled();
    });

});

describe(`when testing the ${modelName} api, `, () => {
    let token;

    before((done) => {
        User.login(config.users.admin).then((result) => {
            token = result.session.jwt;
            return done();
        }).catch((e) => {
            done(e);
        });
    });

    badData.forEach((data) => {
        it(`should not be able to create a new ${modelName}, using ${data.key}`,  function() {

            let newData = Object.assign({},data);
            newData.token = token;
            return Model.create(newData).should.be.rejectedWith({statusCode: 422});
        });
    });

    it(`should be able to create a new ${modelName}, using ${goodData.key}`,  function() {
        let newData = Object.assign({},goodData);
        newData.token = token;
        return Model.create(newData).should.be.fulfilled();
    });

    it(`should retrieve the newly created record .`,  (done) => {
        Model.findById({token, projectIdOrKey: goodData.key}).then((result) => {
            return done(Array.isArray(result) ? 'must not be an array' : null);
        }).catch((e) => {
            return done(e.message);
        });
    });

    it(`should retrieve an array of records.`,  function() {
        return Model.find({token}).should.be.fulfilled();
    });


    it(`should be able to delete the created ${modelName}, using ${goodData.key}`,  function() {
        return Model.deleteById({token, projectIdOrKey: goodData.key}).should.be.fulfilled();
    });

    it(`should fail to retrieve a single record if no id is passed.`,  () => {
        return Model.findById({token}).should.be.rejected();
    });

});
