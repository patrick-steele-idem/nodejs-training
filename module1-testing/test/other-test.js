var chai = require('chai');
chai.Assertion.includeStack = true;
var expect = require('chai').expect;

describe('module1 - other tests' , function() {

    it('should do something', function(done) {
        setTimeout(function() {
            expect(1).to.equal(2);
            done(); 
        }, 1000);
    });

});

