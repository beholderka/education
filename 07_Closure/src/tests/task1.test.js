const {tickets} = require('../task1')

describe('tickets',function () {
    test('empty',function () {
        expect(tickets()).toBe(false);
    })
    test('empty array',function () {
        expect(tickets([])).toBe('NO');
    })
    test('50,25,25',function () {
        expect(tickets([50,25,25])).toBe('NO');
    })
    test('25,50,25,25',function () {
        expect(tickets([25,50,25,25])).toBe('YES');
    })
    test('25,50,200,25',function () {
        expect(tickets([25,50,200,25])).toBe('NO');
    })
})