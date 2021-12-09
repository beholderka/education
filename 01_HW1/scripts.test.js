const assert = require('assert')
const script1 = require('./script1.js');



describe("fEven", function() {

   it("а - четное, значит а*б=2*3=6", function() {
       assert.equal(script1.fEven(2, 3), 6);
   });

    it("а - не четное, значит а+б=1+3=4", function() {
        assert.equal(script1.fEven(1, 3), 4);
    });

    it("а - строка, значит false", function() {
        assert.equal(script1.fEven('1', 3), false);
    });

    it("b - строка, значит false", function() {
        assert.equal(script1.fEven(1, '2'), false);
    });


});

describe("fCoard", function() {

    it("(2,3)  -  1) ", function() {
        assert.equal(script1.fCoard(2, 3), 1);
    });

    it("(-1,3) - 2)", function() {
        assert.equal(script1.fCoard(-1, 3), 2);
    });

    it("(2,-3)  -  4) ", function() {
        assert.equal(script1.fCoard(2, -3), 4);
    });

    it("(-1,-3) - 3)", function() {
        assert.equal(script1.fCoard(-1, -3), 3);
    });

    it("а - строка, значит false", function() {
        assert.equal(script1.fCoard('1', 3), false);
    });

    it("b - строка, значит false", function() {
        assert.equal(script1.fCoard(1, '2'), false);
    });


});