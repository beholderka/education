const script = require('../sctipt.js');

test('showMatrixNine', () => {
    expect(script.showMatrixNine()).toBe(
        '                     \n' +
        '                     \n' +
        '                     \n' +
        '          *          \n' +
        '       *     *       \n' +
        '    *           *    \n' +
        ' *  *  *  *  *  *  * \n'
    );
});