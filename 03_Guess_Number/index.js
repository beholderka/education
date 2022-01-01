const minValueRandom = 1;
const maxValueRandom = 200;

const minNumberOfAttempts = 1;
const maxNumberOfAttempts = 15;


function randomValueMadeNumber(minValue, maxValue) {
    // valuePCNumber =;
    return Math.round(Math.random() * (maxValue - minValue) + minValue);
}

function clearInput(flag = true,isSave=false) {
    if (isSave)
    {
        if (!flag) {
            document.getElementById('rangeFrom').value = '';
            document.getElementById('rangeUpDo').value = '';
            document.getElementById('numberOfAttempts').value = '';
        }
        document.getElementById('hintNumberData').innerText = String('');
    } else {
        if (flag) {
            document.getElementById('inputValue').value = '';
        }
        if (!flag) {
            document.getElementById('hintText').innerText = String(' ');
        }
    }
}

let game = newGame({
    valuePCNumber: randomValueMadeNumber(1, 100),
    countAttempts: 0,
    valueAttempts: 5,
    minValueUser: 1,
    maxValueUser: 100,
    checkWinGame: false
})

function eventHandlerClick() {
    clearInput(false);
    const tempGame = game(document.getElementById('inputValue').value);
    if (typeof tempGame === 'string') {
        document.getElementById('hintText').innerText = tempGame;
    } else {
        game = newGame({
            valuePCNumber: randomValueMadeNumber(minValueUser, maxValueUser),
            countAttempts: 0,
            valueAttempts: 5,
            minValueUser: 1,
            maxValueUser: 100,
            checkWinGame: false
        })
    }
    clearInput();
}

function eventHandlerSaveClick() {
    const userValueRangeFrom = Number(document.getElementById('rangeFrom').value);
    const userValueRangeUpDo = Number(document.getElementById('rangeUpDo').value);
    const userValueNumberOfAttempts = Number(document.getElementById('numberOfAttempts').value);
    clearInput(true,true);
    clearInput(true);
    clearInput(false);
    if (saveUserSettings(userValueRangeFrom,userValueRangeUpDo,userValueNumberOfAttempts)){
        game = newGame({
            valuePCNumber: randomValueMadeNumber(userValueRangeFrom, userValueRangeUpDo),
            countAttempts: 0,
            valueAttempts: userValueNumberOfAttempts,
            minValueUser: userValueRangeFrom,
            maxValueUser: userValueRangeUpDo,
            checkWinGame: false
        })
    } else {
        document.getElementById('hintNumberData').innerText='Неверный формат!';
    }
}

function newGame(gameStatus) {
    return function checkUserNumber(userNumber) {
        if (gameStatus.countAttempts === gameStatus.valueAttempts && gameStatus.checkWinGame) {
            return true;
        } else if (gameStatus.countAttempts === gameStatus.valueAttempts && !gameStatus.checkWinGame) {
            gameStatus.checkWinGame = true;
            return 'Попытки закончились!';
        }
        userNumber = Number(userNumber);
        if (!validationRange(userNumber, gameStatus.minValueUser, gameStatus.maxValueUser)) {
            return 'Неверный формат!';
        }
        gameStatus.countAttempts = gameStatus.countAttempts + 1;
        if (gameStatus.valuePCNumber === userNumber) {
            gameStatus.countAttempts = gameStatus.valueAttempts;
            return `Поздравляю! Ты угадал ` +
                `задуманное число за ${gameStatus.countAttempts} попыток.`;
        } else if ((userNumber >= (gameStatus.valuePCNumber - gameStatus.valuePCNumber * 0.2)) && (userNumber <= (gameStatus.valuePCNumber + gameStatus.valuePCNumber * 0.20))) {
            return `Не угадал, но ` +
                `теплее!!! Осталось ${gameStatus.valueAttempts - gameStatus.countAttempts} попыток.`;

        } else if (gameStatus.countAttempts === 1) {
            return `Осталось ${gameStatus.valueAttempts - gameStatus.countAttempts} попыток.`;
        } else {
            return `Не угадал, ` +
                `холоднее!!! Осталось ${gameStatus.valueAttempts - gameStatus.countAttempts} попыток.`;
        }

    }
}

function validationNumber(value) {
    return Number.isInteger(value);
}

function validationRange(value, minValue, maxValue) {
    return validationNumber(value) && minValue <= value && value <= maxValue;

}


function saveUserSettings(userValueRangeFrom, userValueRangeUpDo, userValueNumberOfAttempts) {
    if (!validationRange(userValueRangeFrom, minValueRandom, maxValueRandom)) {
        return false;
    }
    if (!validationRange(userValueRangeUpDo, minValueRandom + 1, maxValueRandom)) {
        return false;
    }
    if (!validationRange(userValueNumberOfAttempts, minNumberOfAttempts, maxNumberOfAttempts)) {
        return false;
    }
    if (userValueRangeUpDo < userValueRangeFrom) {
        return false;
    } else {
        return true;
    }
}