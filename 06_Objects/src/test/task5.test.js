const {getNextPalindrome,halfNum,reversNum} = require('../js/task5')

describe('getNextPalindrome',function () {
    test('11',function () {
        expect(getNextPalindrome(9)).toEqual(11);
    })
    test('101',function () {
        expect(getNextPalindrome(99)).toEqual(101);
    })
    test('13031',function () {
        expect(getNextPalindrome(12944)).toEqual(13031);
    })
    test('12421',function () {
        expect(getNextPalindrome(12411)).toEqual(12421);
    })
    test('1221',function () {
        expect(getNextPalindrome(1211)).toEqual(1221);
    })
})