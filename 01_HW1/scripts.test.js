const assert = require('assert')
const script1 = require('./script1.js');
const script2 = require('./sctipt2.js');

//----------------------

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

describe("fSum", function() {

    it("c - отрицательное, a+b=3+3=6", function() {
        assert.equal(script1.fSum(3, 3,-1), 6);
    });

    it("a - отрицательное, c+b=1+3=4", function() {
        assert.equal(script1.fSum(-1, 3,1), 4);
    });
    it("a,b,c - отрицательное, 0", function() {
        assert.equal(script1.fSum(-1, -3,-1), 0);
    });

    it("а - строка, значит false", function() {
        assert.equal(script1.fSum('1', 3,3), false);
    });

    it("b - строка, значит false", function() {
        assert.equal(script1.fSum(1, '2',-1), false);
    });


});

describe("fMax", function() {

    it("Сумма > произведения, значит (3+3-1)+3=8", function() {
        assert.equal(script1.fMax(3, 3,-1), 8);
    });

    it("Произведение > суммы, значит (1*3*2)+3=9", function() {
        assert.equal(script1.fMax(1, 3,2), 9);
    });
    it("Все 0, 0+3=3", function() {
        assert.equal(script1.fMax(0, 0, 0), 3);
    });

    it("а - строка, значит false", function() {
        assert.equal(script1.fMax('1', 3,3), false);
    });

    it("b - строка, значит false", function() {
        assert.equal(script1.fMax(1, '2',-1), false);
    });


});

describe("fGrade", function() {

    it("15 - F", function() {
        assert.equal(script1.fGrade(15), 'F');
    });

    it("30 - E", function() {
        assert.equal(script1.fGrade(30), 'E');
    });
    it("40 - D", function() {
        assert.equal(script1.fGrade(40), 'D');
    });
    it("60 - C", function() {
        assert.equal(script1.fGrade(60), 'C');
    });
    it("75 - B", function() {
        assert.equal(script1.fGrade(75), 'B');
    });
    it("100 - A", function() {
        assert.equal(script1.fGrade(100), 'A');
    });
    it("-3 - false", function() {
        assert.equal(script1.fGrade(-3), false);
    });
    it("102 - false", function() {
        assert.equal(script1.fGrade(102), false);
    });
    it("rate - строка, значит false", function() {
        assert.equal(script1.fGrade('fs'), false);
    });



});


//-----------------------

describe("fSumEval", function() {
    it("а - четное, значит а*б=2*3=6", function() {
        assert.equal(script2.fSumEval(), ['Sum: 2450; Count: 49']);
    });

});


describe("fPrime", function() {
    it("11 - простое", function() {
        assert.equal(script2.fPrime(11), true);
    });
    it("121 - не простое", function() {
        assert.equal(script2.fPrime(121), false);
    });
    it("-11 - не простое", function() {
        assert.equal(script2.fPrime(-11), false);
    });
    it("-10 - не простое", function() {
        assert.equal(script2.fPrime(-10), false);
    });
    it("2 - не простое", function() {
        assert.equal(script2.fPrime(2), false);
    });
    it("'fd' - не простое", function() {
        assert.equal(script2.fPrime('fd'), false);
    });

});

describe("fSqRootSeq", function() {
    it("sqrt(11) = 3", function() {
        assert.equal(script2.fSqRootSeq(11), 3);
    });
    it("sqrt(121) = 11", function() {
        assert.equal(script2.fSqRootSeq(121), 11);
    });
    it("sqrt(-11) = false", function() {
        assert.equal(script2.fSqRootSeq(-11), false);
    });
    it("sqrt(-10) = false", function() {
        assert.equal(script2.fSqRootSeq(-10), false);
    });
    it("sqrt(2) = 1", function() {
        assert.equal(script2.fSqRootSeq(2), 1);
    });
    it("sqrt('fd') = false", function() {
        assert.equal(script2.fSqRootSeq('fd'), false);
    });

});

describe("fSqRootBinary", function() {
    it("sqrt(11) = 3", function() {
        assert.equal(script2.fSqRootBinary(11), 3);
    });
    it("sqrt(121) = 11", function() {
        assert.equal(script2.fSqRootBinary(121), 11);
    });
    it("sqrt(-11) = false", function() {
        assert.equal(script2.fSqRootBinary(-11), false);
    });
    it("sqrt(-10) = false", function() {
        assert.equal(script2.fSqRootBinary(-10), false);
    });
    it("sqrt(2) = 1", function() {
        assert.equal(script2.fSqRootBinary(2), 1);
    });
    it("sqrt('fd') = false", function() {
        assert.equal(script2.fSqRootBinary('fd'), false);
    });
});

describe("fFactorial", function() {
    it("11! = 39916800", function() {
        assert.equal(script2.fFactorial(11), 39916800);
    });
    it("3! = 6", function() {
        assert.equal(script2.fFactorial(3), 6);
    });
    it("-11! = false", function() {
        assert.equal(script2.fFactorial(-11), false);
    });
    it("-10! = false", function() {
        assert.equal(script2.fFactorial(-10), false);
    });
    it("1! = 1", function() {
        assert.equal(script2.fFactorial(1), 1);
    });
    it("'fd'! = false", function() {
        assert.equal(script2.fFactorial('fd'), false);
    });
});

describe("fSumNumber", function() {
    it("1+1=2", function() {
        assert.equal(script2.fSumNumber(11), 2);
    });
    it("3+0+0=3", function() {
        assert.equal(script2.fSumNumber(300), 3);
    });
    it("-11 1+1=2", function() {
        assert.equal(script2.fSumNumber(-11), 2);
    });
    it("'fd' = false", function() {
        assert.equal(script2.fSumNumber('fd'), false);
    });
});

describe("fReflection", function() {
    it("12 - 21", function() {
        assert.equal(script2.fReflection(12), 21);
    });
    it("300 - 3", function() {
        assert.equal(script2.fReflection(300), 3);
    });
    it("-1341 - 1431", function() {
        assert.equal(script2.fReflection(-1341), 1431);
    });
    it("'fd' = false", function() {
        assert.equal(script2.fReflection('fd'), false);
    });
});