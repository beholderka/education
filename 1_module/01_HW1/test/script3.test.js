const assert = require('assert')
const script3 = require('../script3.js');


describe("script3", function() {

    describe("fArrayMin", function() {
        it("[6,2,-4,6,-1,2] - min=-4", function () {
            assert.deepEqual(script3.fArrayMin([6,2,-4,6,-1,2]), -4);
        });
        it("[] ", function () {
            assert.deepEqual(script3.fArrayMin([]), false);
        });
    });
    describe("fArrayMax", function() {
        it("[6,2,-4,7,-1,2]", function () {
            assert.deepEqual(script3.fArrayMax([6,2,-4,7,-1,2]), 7);
        });
        it("[] ", function () {
            assert.deepEqual(script3.fArrayMax([]), false);
        });
    });
    describe("fArrayMinIndex", function() {
        it("[6,2,-4,6,-1,2] - minIndex=2", function () {
            assert.deepEqual(script3.fArrayMinIndex([6,2,-4,6,-1,2]), 2);
        });
        it("[] ", function () {
            assert.deepEqual(script3.fArrayMinIndex([]), false);
        });
    });
    describe("fArrayMaxIndex", function() {
        it("[6,2,-4,7,-1,2]", function () {
            assert.deepEqual(script3.fArrayMaxIndex([6,2,-4,7,-1,2]), 3);
        });
        it("[] ", function () {
            assert.deepEqual(script3.fArrayMaxIndex([]), false);
        });
    });
    describe('validateArrayNumber',function () {
        it('1,3,"d"',function () {
            assert.deepEqual(script3.validateArrayNumber([1,3,'d']),false);
        })
    })
    describe('validateArrayInteger',function () {
        it('[1,3,2.45]',function () {
            assert.deepEqual(script3.validateArrayInteger([1,3,2.45]),false);
        })
    })
    describe("fEvalSum", function() {
        it("[6,2,-4,6,-1,2] - sum=10", function () {
            assert.deepEqual(script3.fEvalSum([6,2,-4,6,-1,2]), 10);
        });
        it("[] - false", function () {
            assert.deepEqual(script3.fEvalSum([]), false);
        });
        it("['6',2,-4,6,-1,2] ", function () {
            assert.deepEqual(script3.fEvalSum(['6',2,-4,6,-1,2]), false);
        });
    });
    describe("fRevers", function() {
        it("[6,2,-4,6,-1,2] - [2,-1,6,-4,2,6]", function () {
            assert.deepEqual(script3.fRevers([6,2,-4,6,-1,2]), [2,-1,6,-4,2,6]);
        });
    });
    describe("fnEvalArray", function() {
        it("[6,2,-4,6,-1,2] - 1", function () {
            assert.deepEqual(script3.fnEvalArray([6,2,-4,6,-1,2]), 1);
        });
        it("[] - false", function () {
            assert.deepEqual(script3.fnEvalArray([]), false);
        });
        it("['6',2,-4,6,-1,2] - false", function () {
            assert.deepEqual(script3.fnEvalArray(['6',2,-4,6,-1,2]), false);
        });
    });
    describe("fSwap", function() {
        it("[6,2,-4,6,-1,2] - [6,-1,2,6,2,-4]", function () {
            assert.deepEqual(script3.fSwap([6,2,-4,6,-1,2]), [6,-1,2,6,2,-4]);
        });
        it("[6,2,-4,7,6,-1,2] - [6,-1,2,7,6,2,-4]", function () {
            assert.deepEqual(script3.fSwap([6,2,-4,7,6,-1,2]), [6,-1,2,7,6,2,-4]);
        });
        it("[] - false", function () {
            assert.deepEqual(script3.fSwap([]), false);
        });
    });
    describe("fBubbleSort", function() {
        it("[6,11,2,-4,8,6,-1,2,7] - [-4,-1,2,2,6,6,7,8,11]", function () {
            assert.deepEqual(script3.fBubbleSort([6,11,2,-4,8,6,-1,2,7]), [-4,-1,2,2,6,6,7,8,11]);
        });
        it("[] - false", function () {
            assert.deepEqual(script3.fBubbleSort([]), false);
        });
    });
    describe("fSelectSort", function() {
        it("[6,11,2,-4,8,6,-1,2,7] - [-4,-1,2,2,6,6,7,8,11]", function () {
            assert.deepEqual(script3.fSelectSort([6,11,2,-4,8,6,-1,2,7]), [-4,-1,2,2,6,6,7,8,11]);
        });
        it("[] - false", function () {
            assert.deepEqual(script3.fSelectSort([]), false);
        });
    });
    describe("fInsertSort", function() {
        it("[6,11,2,-4,8,6,-1,2,7] - [-4,-1,2,2,6,6,7,8,11]", function () {
            assert.deepEqual(script3.fInsertSort([6,11,2,-4,8,6,-1,2,7]), [-4,-1,2,2,6,6,7,8,11]);
        });
        it("[] - false", function () {
            assert.deepEqual(script3.fInsertSort([]), false);
        });
    });
    describe("fQuickSort", function() {
        it("[6,11,2,-4,8,6,-1,2,7] - [-4,-1,2,2,6,6,7,8,11]", function () {
            assert.deepEqual(script3.fQuickSort([6,11,2,-4,8,6,-1,2,7]), [-4,-1,2,2,6,6,7,8,11]);
        });
    });
    describe("fMergeSort", function() {
        it("[6,11,2,-4,8,6,-1,2,7] - [-4,-1,2,2,6,6,7,8,11]", function () {
            assert.deepEqual(script3.fMergeSort([6,11,2,-4,8,6,-1,2,7]), [-4,-1,2,2,6,6,7,8,11]);
        });
    });
    describe("fShellSort", function() {
        it("[6,11,2,-4,8,6,-1,2,7] - [-4,-1,2,2,6,6,7,8,11]", function () {
            assert.deepEqual(script3.fShellSort([6,11,2,-4,8,6,-1,2,7]), [-4,-1,2,2,6,6,7,8,11]);
        });
    });
    describe("fSortHeap", function() {
        it("[6,11,2,-4,8,6,-1,2,7] - [-4,-1,2,2,6,6,7,8,11]", function () {
            assert.deepEqual(script3.fSortHeap([6,11,2,-4,8,6,-1,2,7]), [-4,-1,2,2,6,6,7,8,11]);
        });
    });
});
