const script = require('../sctipt.js');
test('showMatrixFour', () => {
    expect(script.showMatrixFour()).toBe(
        ' *                   \n' +
        ' *  *                \n' +
        ' *     *             \n' +
        ' *        *          \n' +
        ' *           *       \n' +
        ' *              *    \n' +
        ' *  *  *  *  *  *  * \n');
});