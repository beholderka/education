const {getSum} = require('../task2')

describe('getSum',function () {
    test('empty',function () {
        expect(getSum()).toBe(false);
    })
    test('111 222',function () {
        expect(getSum('111','222')).toBe('333');
    })
    test('111 2222',function () {
        expect(getSum('111','2222')).toBe('2333');
    })
    test('11111 2222',function () {
        expect(getSum('11111','2222')).toBe('13333');
    })
    test('99999 2222',function () {
        expect(getSum('99999','2222')).toBe('102221');
    })
    test('11111111111111 22222222222222222222222',function () {
        expect(getSum('11111111111111','22222222222222222222222')).toBe('22222222233333333333333');
    })
})