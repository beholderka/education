const assert = require('assert')
const script1 = require('../script1.js');


describe("script1", function () {
    describe("fEven", function () {

        it("а - четное, значит а*б=2*3=6", function () {
            assert.equal(script1.fEven(2, 3), 6);
        });

        it("а - не четное, значит а+б=1+3=4", function () {
            assert.equal(script1.fEven(1, 3), 4);
        });

        it("а - строка, значит false", function () {
            assert.equal(script1.fEven('1', 3), false);
        });

        it("b - строка, значит false", function () {
            assert.equal(script1.fEven(1, '2'), false);
        });


    });

    describe("fCoard", function () {

        it("(2,3)  -  1) ", function () {
            assert.equal(script1.fCoard(2, 3), 1);
        });

        it("(-1,3) - 2)", function () {
            assert.equal(script1.fCoard(-1, 3), 2);
        });

        it("(2,-3)  -  4) ", function () {
            assert.equal(script1.fCoard(2, -3), 4);
        });

        it("(-1,-3) - 3)", function () {
            assert.equal(script1.fCoard(-1, -3), 3);
        });
        it("(0,0)-0)", function () {
            assert.equal(script1.fCoard(0,0), 0);
        });

        it("а - строка, значит false", function () {
            assert.equal(script1.fCoard('1', 3), false);
        });

        it("b - строка, значит false", function () {
            assert.equal(script1.fCoard(1, '2'), false);
        });


    });

    describe("fSum", function () {

        it("c - отрицательное, a+b=3+3=6", function () {
            assert.equal(script1.fSum(3, 3, -1), 6);
        });

        it("a - отрицательное, c+b=1+3=4", function () {
            assert.equal(script1.fSum(-1, 3, 1), 4);
        });
        it("a,b,c - отрицательное, 0", function () {
            assert.equal(script1.fSum(-1, -3, -1), 0);
        });

        it("а - строка, значит false", function () {
            assert.equal(script1.fSum('1', 3, 3), false);
        });

        it("b - строка, значит false", function () {
            assert.equal(script1.fSum(1, '2', -1), false);
        });


    });

    describe("fMax", function () {

        it("Сумма > произведения, значит (3+3-1)+3=8", function () {
            assert.equal(script1.fMax(3, 3, -1), 8);
        });

        it("Произведение > суммы, значит (1*3*2)+3=9", function () {
            assert.equal(script1.fMax(1, 3, 2), 9);
        });
        it("Все 0, 0+3=3", function () {
            assert.equal(script1.fMax(0, 0, 0), 3);
        });

        it("а - строка, значит false", function () {
            assert.equal(script1.fMax('1', 3, 3), false);
        });

        it("b - строка, значит false", function () {
            assert.equal(script1.fMax(1, '2', -1), false);
        });


    });

    describe("fGrade", function () {

        it("15 - F", function () {
            assert.equal(script1.fGrade(15), 'F');
        });

        it("30 - E", function () {
            assert.equal(script1.fGrade(30), 'E');
        });
        it("40 - D", function () {
            assert.equal(script1.fGrade(40), 'D');
        });
        it("60 - C", function () {
            assert.equal(script1.fGrade(60), 'C');
        });
        it("75 - B", function () {
            assert.equal(script1.fGrade(75), 'B');
        });
        it("100 - A", function () {
            assert.equal(script1.fGrade(100), 'A');
        });
        it("-3 - false", function () {
            assert.equal(script1.fGrade(-3), false);
        });
        it("102 - false", function () {
            assert.equal(script1.fGrade(102), false);
        });
        it("rate - строка, значит false", function () {
            assert.equal(script1.fGrade('fs'), false);
        });


    });
});
