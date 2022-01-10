const {cachedFunc}=require('../task4')

describe('cachedFunc',function () {
    test('first',function () {
        expect(cachedFunc('foo', 'bar')).toBe('foobar');
    })
    test('second',function () {
        expect(cachedFunc('foo', 'bar')).toBe('cache: foobar');
    })
    test('first new',function () {
        expect(cachedFunc('foo', 'foo')).toBe('foofoo');
    })
})