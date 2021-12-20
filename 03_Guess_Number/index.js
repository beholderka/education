const minValueRandom = 1;
const maxValueRandom = 200;

const minNumberOfAttempts = 1;
const maxNumberOfAttempts = 15;

let valuePCNumber = 0;
let countAttempts = 0;
let valueAttempts = 5;
let minValueUser = 1;
let maxValueUser = 100;
let checkWinGame = false;

newGame();

function randomValueMadeNumber(minValue, maxValue) {
    valuePCNumber = Math.round(Math.random() * (maxValue - minValue) + minValue);
    return true;
}

function newGame() {
    randomValueMadeNumber(minValueUser, maxValueUser);
    countAttempts = 0;
    checkWinGame = false;
    document.getElementById('inputValue').value = '';
    document.getElementById('hintNumberData').innerText = String('');
    document.getElementById('hintText').innerText = String(' ');
}

function validationNumber(value) {
    return Number.isInteger(value);
}

function validationRange(value, minValue, maxValue) {
    if (validationNumber(value)) {
        return minValue <= value && value <= maxValue;
    } else {
        return false;
    }

}

//Сохранение пользовательских настроек
function saveUserSettings() {
    //проверка на вхождение пользовательского числа в диапазон по условию
    let checkValue = true;
    //Поле для вывода сообщения очищаем
    document.getElementById('hintNumberData').innerText = '';
    //пользовательская нижняя граница диапазона
    const userValueRangeFrom = +document.getElementById('rangeFrom').value;
    //проверка на вхождение пользовательского числа в диапазон по условию
    if (!validationRange(userValueRangeFrom, minValueRandom, maxValueRandom)) {
        //если не по условию, записываем в это поле минимальное допустимое значение диапазона
        document.getElementById('rangeFrom').innerText = String(minValueRandom);
        checkValue = false;
    }
    //пользовательская верхняя граница диапазона
    const userValueRangeUpDo = +document.getElementById('rangeUpDo').value;
    if (!validationRange(userValueRangeUpDo, minValueRandom + 1, maxValueRandom)) {
        document.getElementById('rangeFrom').innerText = String(maxValueRandom);
        checkValue = false;
    }
    //пользовательское количество попыток
    const userValueNumberOfAttempts = +document.getElementById('numberOfAttempts').value;
    if (!validationRange(userValueNumberOfAttempts, minNumberOfAttempts, maxNumberOfAttempts)) {
        document.getElementById('numberOfAttempts').innerText = String(minNumberOfAttempts);
        checkValue = false;
    }
    //проверяем все ли числа были в порядке и является ли диапазон - диапазоном
    if (!checkValue || userValueRangeUpDo < userValueRangeFrom) {
        //если нет - сообщаем пользователю
        document.getElementById('hintNumberData').innerText = 'Неверный формат данных!';
        return false;
    } else {
        //задаем значения глобальным переменным
        valueAttempts = userValueNumberOfAttempts;
        minValueUser = userValueRangeFrom;
        maxValueUser = userValueRangeUpDo;
        document.getElementById('valueRangeFrom').innerText = String(userValueRangeFrom);
        document.getElementById('valueRangeUpDo').innerText = String(userValueRangeUpDo);
        document.getElementById('valueNumberOfAttempts').innerText = String(userValueNumberOfAttempts);
        newGame();
    }
}

//проверяем что ввел пользователь
function checkUserNumber() {
    //если все попытки использованы и игрок победил (или уже узнал, что проиграл)
    //, начинаем новую игру
    if (countAttempts === valueAttempts && checkWinGame) {
        newGame();
        return true;
    } else if (countAttempts === valueAttempts && !checkWinGame) {
        //если все попытки использованы и игрок проиграл - сообщаем ему об этом
        document.getElementById('hintText').innerText = 'Попытки закончились!';
        checkWinGame = true;
        return true;
    }

    //число, которое ввел пользователь
    const userNumber = +document.getElementById('inputValue').value;

    //проверяем входит ли оно в диапазон
    if (!validationRange(userNumber, minValueUser, maxValueUser)) {
        document.getElementById('inputValue').value = '';
        document.getElementById('hintText').innerText = 'Неверный формат!';
        return false;
    }

    //увличиваем счетчик попыток
    countAttempts = countAttempts + 1;

    //пользователь угадал
    if (valuePCNumber === userNumber) {
        document.getElementById('hintText').innerText = `Поздравляю! Ты угадал ` +
            `задуманное число за ${countAttempts} попыток.`;
        //в пользовательское количество попыток приравниваем максимальное
        countAttempts = valueAttempts;
        return true;
        //если пользовательское число меньше или больше загаданного на 20%
    } else if ((userNumber >= (valuePCNumber - valuePCNumber * 0.2)) && (userNumber <= (valuePCNumber + valuePCNumber * 0.20))) {
        document.getElementById('hintText').innerText = `Не угадал, но ` +
            `теплее!!! Осталось ${valueAttempts - countAttempts} попыток.`;
    //если попытка первая
    } else if (countAttempts === 1) {
        document.getElementById('hintText').innerText = `Осталось ${valueAttempts - countAttempts} попыток.`;
    //если не угадал совсем
    } else {
        document.getElementById('hintText').innerText = `Не угадал, ` +
            `холоднее!!! Осталось ${valueAttempts - countAttempts} попыток.`;
    }

}