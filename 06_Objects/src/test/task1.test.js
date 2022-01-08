const {getCookingTime} = require('../js/task1')

describe('getCookingTime',function () {
    test('1',function () {
        expect(getCookingTime(1)).toBe(5);
    })
    test('0',function () {
        expect(getCookingTime(0)).toBe(0);
    })
    test('13',function () {
        expect(getCookingTime(13)).toBe(15);
    })
    test('empty',function () {
        expect(getCookingTime()).toBe(false);
    })
})