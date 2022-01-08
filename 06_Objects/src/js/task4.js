/*4. Принимая строку, ваша функция должна вернуть обьект, в котором
ключи – символы строки, значение – количество повторений символов в
строке*/

function countCharacters(str) {
    let result = {};
    str = str.toLowerCase().replace(/[^a-zа-я0-9]+/g, '');
    for (let char of str) {
        result[char] = result[char] + 1 || 1;
    }
    return result;
}

module.exports ={countCharacters}