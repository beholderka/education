/*2. Напишите функцию, которая получает два бесконечных числа в
виде строк. Вы должны вернуть результат суммы этих двух чисел
в виде строки. Математическая работа с этими двумя числами
недоступна. Не используйте BigInt.
*/

function getSum(valueA, valueB) {
    if (typeof valueA === 'string' && typeof valueB === 'string') {
        valueA = valueA.split('').reverse();
        valueB = valueB.split('').reverse();

        function sumValue(firstValue, secondValue) {
            let result = [];
            let acc = 0;
            firstValue.forEach((item, index) => {
                const secondArgument = Number.isNaN(Number(secondValue[index])) ? 0 : Number(secondValue[index]);
                const sumArguments = Number(item) + secondArgument + acc;
                result.push(String(sumArguments % 10));
                acc = (sumArguments - sumArguments % 10) / 10;
            }, 0)
            return result.reverse().join('');
        }

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