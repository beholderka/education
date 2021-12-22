const script = require('../sctipt.js');

test('showMatrixEight', () => {
    expect(script.showMatrixEight()).toBe(
        ' *  *  *  *  *  *  * \n' +
        '    *           *    \n' +
        '       *     *       \n' +
        '          *          \n' +
        '                     \n' +
        '                     \n' +
        '                     \n'
    );
});