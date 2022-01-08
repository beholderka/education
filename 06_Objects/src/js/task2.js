/*2.Получая массив чисел. Все они либо нечетные, либо четные, кроме
одного. Тебе нужно его найти.*/

function getNumber(array) {
    let odd = array.filter(i => i % 2 !== 0);
    let even = array.filter(i => i % 2 === 0);
    if (odd.length === 1) {
        return odd[0];
    } else if (even.length === 1) {
        return even[0];
    }
    return false;
}

module.exports ={getNumber}