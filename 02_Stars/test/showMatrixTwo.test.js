const script = require('../sctipt.js');
test('showMatrixTwo', () => {
    expect(script.showMatrixTwo()).toBe(
        ' *  *  *  *  *  *  * \n' +
        ' *                 * \n' +
        ' *                 * \n' +
        ' *                 * \n' +
        ' *                 * \n' +
        ' *                 * \n' +
        ' *  *  *  *  *  *  * \n'
    );
});