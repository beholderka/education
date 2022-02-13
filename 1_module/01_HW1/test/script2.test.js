const assert = require('assert')
const script2 = require('../sctipt2.js');

describe("script2", function () {
    describe("fSumEval", function () {
        it("а - четное, значит а*б=2*3=6", function () {
            assert.deepEqual(script2.fSumEval(), [2450, 49]);
        });

    });


    describe("fPrime", function () {
        it("11 - простое", function () {
            assert.equal(script2.fPrime(11), true);
        });
        it("121 - не простое", function () {
            assert.equal(script2.fPrime(121), false);
        });
        it("-11 - не простое", function () {
            assert.equal(script2.fPrime(-11), false);
        });
        it("-10 - не простое", function () {
            assert.equal(script2.fPrime(-10), false);
        });
        it("2 - не простое", function () {
            assert.equal(script2.fPrime(2), false);
        });
        it("'fd' - не простое", function () {
            assert.equal(script2.fPrime('fd'), false);
        });

    });

    describe("fSqRootSeq", function () {
        it("sqrt(11) = 3", function () {
            assert.equal(script2.fSqRootSeq(11), 3);
        });
        it("sqrt(121) = 11", function () {
            assert.equal(script2.fSqRootSeq(121), 11);
        });
        it("sqrt(-11) = false", function () {
            assert.equal(script2.fSqRootSeq(-11), false);
        });
        it("sqrt(-10) = false", function () {
            assert.equal(script2.fSqRootSeq(-10), false);
        });
        it("sqrt(2) = 1", function () {
            assert.equal(script2.fSqRootSeq(2), 1);
        });
        it("sqrt('fd') = false", function () {
            assert.equal(script2.fSqRootSeq('fd'), false);
        });

    });

    describe("fSqRootBinary", function () {
        it("sqrt(11) = 3", function () {
            assert.equal(script2.fSqRootBinary(11), 3);
        });
        it("sqrt(121) = 11", function () {
            assert.equal(script2.fSqRootBinary(121), 11);
        });
        it("sqrt(-11) = false", function () {
            assert.equal(script2.fSqRootBinary(-11), false);
        });
        it("sqrt(-10) = false", function () {
            assert.equal(script2.fSqRootBinary(-10), false);
        });
        it("sqrt(2) = 1", function () {
            assert.equal(script2.fSqRootBinary(2), 1);
        });
        it("sqrt('fd') = false", function () {
            assert.equal(script2.fSqRootBinary('fd'), false);
        });
    });

    describe("fFactorial", function () {
        it("11! = 39916800", function () {
            assert.equal(script2.fFactorial(11), 39916800);
        });
        it("3! = 6", function () {
            assert.equal(script2.fFactorial(3), 6);
        });
        it("-11! = false", function () {
            assert.equal(script2.fFactorial(-11), false);
        });
        it("-10! = false", function () {
            assert.equal(script2.fFactorial(-10), false);
        });
        it("1! = 1", function () {
            assert.equal(script2.fFactorial(1), 1);
        });
        it("'fd'! = false", function () {
            assert.equal(script2.fFactorial('fd'), false);
        });
    });

    describe("fSumNumber", function () {
        it("1+1=2", function () {
            assert.equal(script2.fSumNumber(11), 2);
        });
        it("3+0+0=3", function () {
            assert.equal(script2.fSumNumber(300), 3);
        });
        it("-11 1+1=2", function () {
            assert.equal(script2.fSumNumber(-11), 2);
        });
        it("'fd' = false", function () {
            assert.equal(script2.fSumNumber('fd'), false);
        });
    });

    describe("fReflection", function () {
        it("12 - 21", function () {
            assert.equal(script2.fReflection(12), 21);
        });
        it("300 - 3", function () {
            assert.equal(script2.fReflection(300), 3);
        });
        it("-1341 - 1431", function () {
            assert.equal(script2.fReflection(-1341), 1431);
        });
        it("'fd' = false", function () {
            assert.equal(script2.fReflection('fd'), false);
        });
    });
});
