'use strict';

const should = require('should');
const ValidatorLib = require('../lib/validator');

let validator = new ValidatorLib.Validator();

describe('the Validator component', () => {

    it('should have a custom upperCase method',  (done) => {
        validator.should.have.a.property('isUpperCase');
        done();
    });

    it('isUpperCase should validate an uppercase string',  (done) => {
        validator.isUpperCase('FOO',null,'testField').should.be.true();
        done();
    });

    it('isUpperCase should fail to validate a mixed case string',  (done) => {
        validator.isUpperCase('FOObar',null,'testField').should.be.false();
        done();
    });

    it('should have a custom lowerCase method',  (done) => {
        validator.should.have.a.property('isUpperCase');
        done();
    });

    it('isLowerCase should validate an uppercase string',  (done) => {
        validator.isLowerCase('foo',null,'testField').should.be.true();
        done();
    });

    it('isLowerCase should fail to validate a mixed case string',  (done) => {
        validator.isLowerCase('fooBar',null,'testField').should.be.false();
        done();
    });

    it('validation should pass with this test',  (done) => {

        validator.validate({
            name: 'abc',
            email: 'foo@address.com'
        }, {
            name: ['size:3','isLowerCase'],
            email: 'required|email'

        }).should.be.true();

        done();
    });

    it('validation should fail with this test',  (done) => {

        validator.validate({
            name: 'A',
            email: 'foo@address.com'
        }, {
            name: 'size:3',
            email: 'required|email'

        }).should.not.be.true();

        done();
    });


});

