function getCookingTime(eggsAmount) {
    if (eggsAmount !== 0) {
        let result = eggsAmount % 5;
        if (result !== 0) {
            result = eggsAmount + 5 - result;
        } else {
            result = eggsAmount;
        }
        return result;
    } else {
        return 0;
    }
}

// console.log(getCookingTime(11))
// console.log(getCookingTime(31))
// console.log(getCookingTime(5))
// console.log(getCookingTime(1))

function getNumber(array) {
    let result;
    let odd = array.filter(i => i % 2 !== 0);
    let even = array.filter(i => i % 2 === 0);
    if (odd.length === 1) {
        result = odd[0];
    } else {
        result = even[0];
    }
    return result;
}

//
// console.log(getNumber([2, 4, 5, 6, 8, 10]))
// console.log(getNumber([-1,2, 4, 4, 6, 8, 10]))
// console.log(getNumber([-1,3,5,7,9,11,2,3]))
// console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]))
// console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]))

//. Принимая массив объектов и случайную строку. У объектов может
// быть ключ: «title» с разными значениями. Создайте алгоритм, который
// фильтрует массив, заданный как первый параметр, и возвращает массив
// объектов, которые содержат в своих заголовках заданную строку в
// качестве второго параметра (без учета регистра).

function findTitle(array, str) {
    return array.filter((item) => {
        if ('title' in item) {
            if (item['title'].toLowerCase().indexOf(str.toLowerCase()) !== -1) {
                return true;
            }
        }
    });
}

let arr = [{
    title: 'Some title1'
}, {
    title: 'I like JS'
}, {
    user: 'This obj doesn"t have key title js'
}, {
    title: 'Js - is the best!'
}];

console.log(findTitle(arr, 'js'));

// 4. Принимая строку, ваша функция должна вернуть обьект, в котором
// ключи – символы строки, значение – количество повторений символов в
// строке
function countCharacters(str) {
    let result = {};
    str = str.toLowerCase().replace(/[^a-zа-я0-9]+/g, '');
    for (let char of str) {
        result[char] = result[char] + 1 || 1;
    }
    return result;
}

console.log(countCharacters('sparrow')) // should return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
console.log(countCharacters('aabcddeffge')) // should return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1}
console.log(countCharacters('a 2ab !d')) // should return {a: 2, b:1, d:1, 2:1}


// 5. Принимая число, ваша функция должна найти следующий
// положительный палиндром большего размера.
//     Палиндром - это слово, фраза, число или другая последовательность
// символов, которая читается так же, как вперед и назад, например,
// «мадам».

function reverse(nums) {
    return String(nums).split('').reverse().join('');
}

function getNextPalindrome1(number) {
    if (String(number).length < 2) {
        return 11;
    }
    for (let i = number + 1; ; i++) {
        if (String(i) === reverse(i)) {
            return i
        }
    }
}

function reversNum(n) {
    n = Math.abs(n);
    let number = '';
    let temp = 0;
    while (n !== 0) {
        temp = n % 10;
        n = (n - temp) / 10;
        number = number + temp;
    }
    return Number(number);
}

function halfNum(number) {
    return Number(String(number).split('').slice(0, Math.trunc(String(number).length / 2)).join(''));
}

function getNextPalindrome(number) {
    let result;
    //если числу не хватает 1, чтоб увеличится на разряд - увлечиваю
    if (String(number).length < String(number + 1).length) {
        number = number + 1;
    }
    // если длина числа четная
    if (String(number).length % 2 === 0) {
        //получаем половину числа (первую половину)
        let halfNumber = halfNum(number);
        //получаем зеркальное число АБ БА
        //halfNumber умножаем на 10 в стенпени длины halfNumber
        // АБ * 10^2 = AБ00 + БА - реверс halfNumber
        result = halfNumber * 10 ** (String(halfNumber).length)
            + reversNum(halfNumber);
        //пока результ меньше или равен числу текущему
        while (result <= number) {
            //увеличиваем halfNumber + 1
            halfNumber = halfNumber + 1;
            //halfNumber умножаем на 10 в стенпени длины halfNumber
            // АБ * 10^2 = AБ00 + БА - реверс halfNumber
            result = halfNumber * 10 ** (String(halfNumber).length)
                + reversNum(halfNumber);
        }
        //если длина числа не четная
    } else {
        //получаем половину числа, при этом делим число на 10, чтоб количество разрядов стало четным
        let halfNumber = halfNum(Math.trunc(number / 10));
        //получаем среднее число, которое не попало в половину
        //преобразую number к строке, где позиция digit Math.trunc(String(number).length / 2)
        let digit = Number(String(number)[Math.trunc(String(number).length / 2)]);
        //halfNumber умножаем на 10 в стенпени длины halfNumber + 1
        //digit умножаем на 10 в стенпени длины halfNumber
        //AБВПК
        // АБ * 10^(2+1) = AБ000
        // В * 10^2 = В00
        result = halfNumber * 10 ** (String(halfNumber).length + 1)
            + digit * 10 ** (String(halfNumber).length)
            + reversNum(halfNumber);
        //пока result меньше или равен number
        while (result <= number) {
            //если digit меньше 10
            if (digit < 9) {
                //увеличивам на 1
                digit = digit + 1;
            } else {
                digit = 0;
                //увеличивам halfNumber на 1
                halfNumber = halfNumber + 1;
            }
            result = halfNumber * 10 ** (String(halfNumber).length + 1)
                + digit * 10 ** (String(halfNumber).length)
                + reversNum(halfNumber);
        }
    }
    return result;
}

console.log(getNextPalindrome(95549)) // returns 141
console.log(getNextPalindrome(124536)) // returns 11
console.log(getNextPalindrome(99)) //returns 101
console.log(getNextPalindrome(888)) // returns 898
console.log(getNextPalindrome(91999)) // returns 1001