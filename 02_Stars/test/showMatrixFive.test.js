const script = require('../sctipt.js');

test('showMatrixFive', () => {
    expect(script.showMatrixFive()).toBe(
        '                   * \n' +
        '                *  * \n' +
        '             *     * \n' +
        '          *        * \n' +
        '       *           * \n' +
        '    *              * \n' +
        ' *  *  *  *  *  *  * \n'
    );
});