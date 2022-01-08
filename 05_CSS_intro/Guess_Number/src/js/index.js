const {randomValueMadeNumber, setNodeValue, setNodeInnerText, getNodeValue, addListener, clearInput} = require('./utils');


function saveUserSettings(userValueRangeFrom, userValueRangeUpDo, userValueNumberOfAttempts) {
    const minValueRandom = 1;
    const maxValueRandom = 200;

    const minNumberOfAttempts = 1;
    const maxNumberOfAttempts = 15;

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

function checkUserNumber(gameStatus) {
    if (gameStatus.checkWinGame) {
        return true;
    } else if (gameStatus.countAttempts === gameStatus.valueAttempts && !gameStatus.checkWinGame) {
        gameStatus.checkWinGame = true;
        return 'Попытки закончились!';
    }
    gameStatus.userNumber = Number(gameStatus.userNumber);
    if (!validationRange(gameStatus.userNumber, gameStatus.minValueUser, gameStatus.maxValueUser)) {
        return 'Неверный формат!';
    }
    gameStatus.countAttempts = gameStatus.countAttempts + 1;
    if (gameStatus.valuePCNumber === gameStatus.userNumber) {
        gameStatus.checkWinGame = true;
        return `Поздравляю! Ты угадал ` +
            `задуманное число за ${gameStatus.countAttempts} попыток.`;
    } else if ((gameStatus.userNumber >= (gameStatus.valuePCNumber - gameStatus.valuePCNumber * 0.2)) && (gameStatus.userNumber <= (gameStatus.valuePCNumber + gameStatus.valuePCNumber * 0.20))) {
        return `Не угадал, но ` +
            `теплее!!! Осталось ${gameStatus.valueAttempts - gameStatus.countAttempts} попыток.`;

    } else if (gameStatus.countAttempts === 1) {
        return `Осталось ${gameStatus.valueAttempts - gameStatus.countAttempts} попыток.`;
    } else {
        return `Не угадал, ` +
            `холоднее!!! Осталось ${gameStatus.valueAttempts - gameStatus.countAttempts} попыток.`;
    }


}

function validationNumber(value) {
    return Number.isInteger(value);
}

function validationRange(value, minValue, maxValue) {
    return validationNumber(value) && minValue <= value && value <= maxValue;

}

document.addEventListener('DOMContentLoaded', function () {
    newGame();
    addListener('end_game', 'mouseover', addSpark.bind(null,'sparkler'));
    addListener('end_game', 'mouseout', deleteSpark.bind(null,'sparkler'));
})

function newGame() {
    let stateGame = {
        valuePCNumber: randomValueMadeNumber(1, 100),
        countAttempts: 0,
        valueAttempts: 5,
        minValueUser: 1,
        maxValueUser: 100,
        checkWinGame: false,
        userNumber: undefined
    };
    checkUserNumber(stateGame)
    addListener('save', 'click', eventHandlerSaveClick.bind(null,stateGame));
    addListener('play', 'click', eventHandlerClick.bind(null,stateGame));
    addListener('end_game', 'click', eventHandlerSaveClick.bind(null,stateGame));
}
function eventHandlerClick(stateGame) {
    if (stateGame===undefined)
        return undefined;
    clearInput(false);
    stateGame.userNumber = getNodeValue('inputValue');
    let resultGame = checkUserNumber(stateGame)
    if (typeof resultGame === 'string') {
        setNodeInnerText('hintText', String(resultGame));
    } else {
        stateGame.countAttempts = 0;
        stateGame.checkWinGame = false;
        stateGame.userNumber = undefined;
        stateGame.valuePCNumber = randomValueMadeNumber(stateGame.minValueUser, stateGame.maxValueUser);
        resultGame = checkUserNumber(stateGame)
    }
    clearInput();
}

function eventHandlerSaveClick(stateGame) {
    if (stateGame===undefined)
        return undefined;
    const userValueRangeFrom = Number(getNodeValue('rangeFrom'));
    const userValueRangeUpDo = Number(getNodeValue('rangeUpDo'));
    const userValueNumberOfAttempts = Number(getNodeValue('numberOfAttempts'));
    clearInput(true, true);
    clearInput(true);
    clearInput(false);
    if (saveUserSettings(userValueRangeFrom, userValueRangeUpDo, userValueNumberOfAttempts)) {
        stateGame = {
            valuePCNumber: randomValueMadeNumber(userValueRangeFrom, userValueRangeUpDo),
            countAttempts: 0,
            valueAttempts: userValueNumberOfAttempts,
            minValueUser: userValueRangeFrom,
            maxValueUser: userValueRangeUpDo,
            checkWinGame: false,
            userNumber: undefined
        };
        checkUserNumber(stateGame);
        setNodeInnerText('valueRangeFrom', String(stateGame.minValueUser));
        setNodeInnerText('valueRangeUpDo', String(stateGame.maxValueUser));
        setNodeInnerText('valueNumberOfAttempts', String(stateGame.valueAttempts));
    } else {
        setNodeInnerText('hintNumberData', 'Неверный формат!');
    }
}


module.exports = { saveUserSettings, checkUserNumber, validationNumber, validationRange, newGame,eventHandlerClick,eventHandlerSaveClick}
