const script = require('../sctipt.js');

test('showMatrixSix', () => {
    expect(script.showMatrixSix()).toBe(
        ' *  *  *  *  *  *  * \n' +
        '    *              * \n' +
        '       *           * \n' +
        '          *        * \n' +
        '             *     * \n' +
        '                *  * \n' +
        '                   * \n'
    );
});