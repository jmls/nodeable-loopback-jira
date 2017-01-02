'use strict';

module.exports = (modelName) => {
    const config = require('./config.json');
    const Jira = require('../');
    const loopback = require('loopback');
    const app = loopback();
    const jira = new Jira(app,config);

    const should = require('should');

    let resource = require('../lib/resource/baseResource').baseResource;

    let Model = app.models[modelName];
    let jiraModelName = Model.settings.jiraModelName;

    describe(`Jira`, () => {
        it('should have a modelName setting',  (done) => {
            should.exist(Model.modelName);
            done();
        });

        it(`should have a valid ${modelName} resource`,  (done) => {
            should.exist(jira.resource[jiraModelName]);
            done();
        });

    });

    describe(`the ${modelName} api`, () => {

        it('should be a valid object',  (done) => {
            should.exist(Model);
            done();
        });

        it(`should be called ${modelName}`,  (done) => {
            Model.modelName.should.be.equal(modelName);
            done();
        });

        it(`should have methods defined in the resource`,  (done) => {

            let methods = jira.resource[jiraModelName].methods;
            should.exist(methods);
            done();
        });

        it(`should have a valid methods defined in the resource`,  (done) => {
            let methods = jira.resource[jiraModelName].methods;
            should.exist(methods);

            Object.keys(methods).forEach((key) => {
                let method = Model[key];
                should.exist(method,`failed to find method ${key} on the ${modelName} model`);
            });

            done();
        });

        it(`each valid method should have a path`,  (done) => {
            let methods = jira.resource[jiraModelName].methods;

            should.exist(methods);

            Object.keys(methods).forEach((key) => {
                should.exist(methods[key].path,`${key} missing path`);
            });

            done();
        });

        it(`should have a remote method defined or not depending on the public property`,  (done) => {
            let methods = jira.resource[jiraModelName].methods;
            should.exist(methods);

            Object.keys(methods).forEach((key) => {
                let method = methods[key];

                if (!method.public) {
                    should.not.exist(Model.sharedClass.findMethodByName(key),`model ${modelName} has remote method ${key} defined when marked as not public`);
                } else {
                    should.exist(Model.sharedClass.findMethodByName(key),`model ${modelName} is missing remote method ${key}`);
                }

            });

            done();
        });
    });
};
