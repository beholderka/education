const {getNumber} = require('../js/task2')

describe('getNumber',function () {
    test('2, 4, 5, 6, 8, 10',function () {
        expect(getNumber([2, 4, 5, 6, 8, 10])).toBe(5);
    })
    test('2, 4, 6, 8, 10',function () {
        expect(getNumber([2, 4, 6, 8, 10])).toBe(false);
    })
    test('[-1,3,5,7,9,11,2,3]',function () {
        expect(getNumber([-1,3,5,7,9,11,2,3])).toBe(2);
    })
    test('[-1,3,5,7,9,11,3]',function () {
        expect(getNumber([-1,3,5,7,9,11,3])).toBe(false);
    })
})