function reversNum(number) {
    return Number(String(number).split('').reverse().join(''));
}

function halfNum(number) {
    return Number(String(number).split('').slice(0, Math.trunc(String(number).length / 2)).join(''));
}

function getNextPalindrome(number) {
    let result;
    if (String(number).length < 2) {
        return 11;
    }
    //если числу не хватает 1, чтоб увеличится на разряд - увлечиваю
    if (String(number).length < String(number + 1).length) {
        number = number + 1;
    }
    // если длина числа четная
    if (String(number).length % 2 === 0) {
        let leftHalfNumber = halfNum(number);
        do {
            const rightHalfNumber=reversNum(leftHalfNumber);
            result = Number(String(leftHalfNumber) + String(rightHalfNumber));
            leftHalfNumber = leftHalfNumber + 1;

        } while (result <= number)

        //если длина числа не четная
    } else {
        let leftHalfNumber = halfNum(Math.trunc(number / 10));
        let digit = Number(String(number)[Math.trunc(String(number).length / 2)]);
        do {
            const rightHalfNumber=reversNum(leftHalfNumber);
            result = Number(String(leftHalfNumber) + String(digit) + String(rightHalfNumber));

            if (digit < 9) {
                digit = digit + 1;
            } else {
                digit = 0;
                leftHalfNumber = leftHalfNumber + 1;
            }
        } while (result <= number)
    }
    return result;
}

module.exports={getNextPalindrome,halfNum,reversNum}