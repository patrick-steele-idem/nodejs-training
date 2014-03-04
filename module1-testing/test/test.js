var chai = require('chai');
chai.Assertion.includeStack = true;
var expect = require('chai').expect;

describe('module1' , function() {

    it('should add two numbers', function() {
        var add = require('../').add;
        expect(add(2, 2)).to.equal(4);
        expect(add(2, 5)).to.not.equal(4);
    });

    it('should multiply two numbers', function() {
        var multiply = require('../').multiply;
        expect(multiply(2, 5)).to.equal(10);
    });

});

