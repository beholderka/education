const {findTitle} = require('../js/task3')

describe('findTitle', function () {
    let arr = [{
        title: 'Some title1'
    }, {
        title: 'I like JS'
    }, {
        user: 'This obj doesn"t have key title js'
    }, {
        title: 'Js - is the best!'
    }];
    test('js', function () {
        expect(findTitle(arr, 'js')).toEqual([{
            title: 'I like JS'
        },{
            title: 'Js - is the best!'
        }]);
    })
    test('!!', function () {
        expect(findTitle(arr, '!!')).toEqual([]);
    })
})