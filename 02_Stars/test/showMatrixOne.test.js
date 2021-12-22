const script = require('../sctipt.js');
test('showMatrixOne_', () => {
    expect(script.showMatrixOne()).toEqual(
        ' *  *  *  *  *  *  * \n' +
        ' *  *  *  *  *  *  * \n' +
        ' *  *  *  *  *  *  * \n' +
        ' *  *  *  *  *  *  * \n' +
        ' *  *  *  *  *  *  * \n' +
        ' *  *  *  *  *  *  * \n' +
        ' *  *  *  *  *  *  * \n');
});