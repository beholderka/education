/*2. Напишите функцию, которая получает два бесконечных числа в
виде строк. Вы должны вернуть результат суммы этих двух чисел
в виде строки. Математическая работа с этими двумя числами
недоступна. Не используйте BigInt.
*/

function sumValue(firstValue, secondValue) {
    let result = [];
    let carryFlag = 0;

    firstValue.forEach((item, index) => {
        const firstArgument = Number(item);
        const secondArgument = Number.isNaN(Number(secondValue[index])) ? 0 : Number(secondValue[index]);
        const sumArguments = firstArgument + secondArgument + carryFlag;

        result.push(String(sumArguments % 10));
        carryFlag = String(sumArguments).length === 2 ? 1 : 0;
    }, 0)

    if (carryFlag===1){
        result.push(carryFlag);
    }
    return result.reverse().join('');
}

function getSum(valueA, valueB) {
    if (typeof valueA === 'string' && typeof valueB === 'string') {
        valueA = valueA.split('').reverse();
        valueB = valueB.split('').reverse();

        if (valueA.length > valueB.length) {
            return sumValue(valueA, valueB);
        } else {
            return sumValue(valueB, valueA);
        }
    } else {
        return false;
    }
}

module.exports = {getSum}