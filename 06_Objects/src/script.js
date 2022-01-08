function getCookingTime(eggsAmount) {
    if (typeof eggsAmount !== 'number')
        return false;
    return Math.ceil(eggsAmount / 5)*5;
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


function reversNum(number) {
    return Number(String(number).split('').reverse().join(''));
}

function halfNum(number) {
    return Number(String(number).split('').slice(0, Math.trunc(String(number).length / 2)).join(''));
}

function getNextPalindrome(number) {
    let result;
    //если числу не хватает 1, чтоб увеличится на разряд - увлечиваю
    if (String(number).length < 2) {
        return 11;
    }
    if (String(number).length < String(number + 1).length) {
        number = number + 1;
    }
    // если длина числа четная
    if (String(number).length % 2 === 0) {
        let halfNumber = halfNum(number);
        result = halfNumber * 10 ** (String(halfNumber).length)
            + reversNum(halfNumber);
        if (result <= number) {
            halfNumber = halfNumber + 1;
            result = halfNumber * 10 ** (String(halfNumber).length)
                + reversNum(halfNumber);
        }
        //если длина числа не четная
    } else {
        let halfNumber = halfNum(Math.trunc(number / 10));
        let digit = Number(String(number)[Math.trunc(String(number).length / 2)]);
        result = halfNumber * 10 ** (String(halfNumber).length + 1)
            + digit * 10 ** (String(halfNumber).length)
            + reversNum(halfNumber);
        if (result <= number) {
            if (digit < 9) {
                digit = digit + 1;
            } else {
                digit = 0;
                halfNumber = halfNumber + 1;
            }
            result = halfNumber * 10 ** (String(halfNumber).length + 1)
                + digit * 10 ** (String(halfNumber).length)
                + reversNum(halfNumber);
        }
    }
    return result;
}

console.time('getNextPalindrome1')
getNextPalindrome1(88800);
getNextPalindrome1(124536);
getNextPalindrome1(99);
getNextPalindrome1(888);
getNextPalindrome1(91999);
console.timeEnd('getNextPalindrome1')
console.time('getNextPalindrome')
getNextPalindrome(88800);
getNextPalindrome(124536);
getNextPalindrome(99);
getNextPalindrome(888);
getNextPalindrome(91999);
console.timeEnd('getNextPalindrome')
