const minValueRandom = 1;
const maxValueRandom = 200;

const minNumberOfAttempts = 1;
const maxNumberOfAttempts = 15;

let valuePCNumber=0;
let countAttempts = 0;
let valueAttempts = 5;
let minValueUser = 1;
let maxValueUser = 100;
let checkWinGame=false;

newGame();

function randomValueMadeNumber(minValue,maxValue) {
    valuePCNumber = Math.round(Math.random() * (maxValue - minValue) + minValue);
    return true;
}

function newGame() {
    randomValueMadeNumber(minValueUser,maxValueUser);
    countAttempts=0;
    checkWinGame=false;
    document.getElementById('inputValue').value = '';
    document.getElementById('hintNumberData').innerText=String('');
    document.getElementById('hintText').innerText=String(' ');
}

function validationNumber(value) {
    if (Number.isInteger(value))
        return true;
    else
        return false;
}

function validationRange(value, minValue, maxValue) {
    if (validationNumber(value)) {
        if (minValue<=value && value<=maxValue) {
            return true;
        } else {
            return false
        }
    } else {
        return false;
    }

}

function saveUserSettings() {
    let checkValue=true;
    document.getElementById('hintNumberData').innerText='';
    const userValueRangeFrom = +document.getElementById('rangeFrom').value;
    if(!validationRange(userValueRangeFrom,minValueRandom,maxValueRandom)) {
        document.getElementById('rangeFrom').innerText=String(minValueRandom);
        checkValue= false;
    }
    const userValueRangeUpDo = +document.getElementById('rangeUpDo').value;
    if(!validationRange(userValueRangeUpDo,minValueRandom+1,maxValueRandom)) {
        document.getElementById('rangeFrom').innerText=String(maxValueRandom);
        checkValue= false;
    }
    const userValueNumberOfAttempts = +document.getElementById('numberOfAttempts').value;
    if(!validationRange(userValueNumberOfAttempts,minNumberOfAttempts,maxNumberOfAttempts)) {
        document.getElementById('numberOfAttempts').innerText=String(minNumberOfAttempts);
        checkValue= false;
    }
    if (!checkValue || userValueRangeUpDo<userValueRangeFrom) {
        document.getElementById('hintNumberData').innerText='Неверный формат данных!';
        return false;
    } else {
        valueAttempts = userValueNumberOfAttempts;
        minValueUser = userValueRangeFrom;
        maxValueUser = userValueRangeUpDo;
        document.getElementById('valueRangeFrom').innerText=String(userValueRangeFrom);
        document.getElementById('valueRangeUpDo').innerText=String(userValueRangeUpDo);
        document.getElementById('valueNumberOfAttempts').innerText=String(userValueNumberOfAttempts);
        newGame();
    }
}

function checkUserNumber() {
    if (countAttempts === valueAttempts && checkWinGame) {
        newGame();
        return true;
    } else if (countAttempts === valueAttempts && !checkWinGame) {
        document.getElementById('hintText').innerText ='Попытки закончились!';
        checkWinGame=true;
        return true;
    }
    const userNumber = +document.getElementById('inputValue').value;

    if (!validationRange(userNumber,minValueUser,maxValueUser)) {
        document.getElementById('inputValue').value = '';
        document.getElementById('hintText').innerText ='Неверный формат!';
        return false;
    }

    countAttempts = countAttempts + 1;


    if (valuePCNumber == userNumber) {
        document.getElementById('hintText').innerText = `Поздравляю! Ты угадал ` +
            `задуманное число за ${countAttempts} попыток.`;
        countAttempts = valueAttempts;
        return true;
    } else if ((userNumber >= (valuePCNumber - valuePCNumber*0.2)) && (userNumber <= (valuePCNumber + valuePCNumber*0.20))) {
        document.getElementById('hintText').innerText = `Не угадал, но ` +
            `теплее!!! Осталось ${valueAttempts - countAttempts} попыток.`;

    } else if (countAttempts === 1) {
        document.getElementById('hintText').innerText = `Осталось ${valueAttempts - countAttempts} попыток.`;
    } else {
        document.getElementById('hintText').innerText = `Не угадал, ` +
            `холоднее!!! Осталось ${valueAttempts - countAttempts} попыток.`;
    }

}