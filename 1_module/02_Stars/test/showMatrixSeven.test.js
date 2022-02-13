const script = require('../sctipt.js');

test('showMatrixSeven', () => {
    expect(script.showMatrixSeven()).toBe(
        ' *                 * \n' +
        '    *           *    \n' +
        '       *     *       \n' +
        '          *          \n' +
        '       *     *       \n' +
        '    *           *    \n' +
        ' *                 * \n'
    );
});