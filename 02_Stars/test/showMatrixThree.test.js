const script = require('../sctipt.js');

test('showMatrixThree', () => {
    expect(script.showMatrixThree()).toEqual(
        ' *  *  *  *  *  *  * \n' +
        ' *              *    \n' +
        ' *           *       \n' +
        ' *        *          \n' +
        ' *     *             \n' +
        ' *  *                \n' +
        ' *                   \n');
});