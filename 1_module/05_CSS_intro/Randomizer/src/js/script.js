const {addListener, setNodeInnerText, setNodeDisable, getNodeValue, randomNumber} = require('./utils');

/*Возвращаем новое случайное число*/
function checkRandomNumber(state) {
    while (true) {
        const number = randomNumber(state.minValueUser, state.maxValueUser);
        /*Сортирую по порядку для более быстрого поиска, затем проверяю есть ли number*/
        if (!state.arrayNum.sort().includes(number)) {
            state.arrayNum.push(number);
            return number;
        }
        /*Чтоб в случае проблем выйти из бесконечного цикла*/
        if (state.arrayNum.length === state.countRange) {
            return false;
        }
    }
}

/* Обработка события onClick кнопки Generate
* Проверяю на правильность ввода диапазон
* Вычисляю значения необходимые для расчетов
* Получаю результат формирования случайного числа
* Вывожу результаты*/
function eventClickGenerate(state) {
    const minValue = Number(getNodeValue('value-min'));
    const maxValue = Number(getNodeValue('value-max'));

    if (validationRange(minValue, maxValue)) {
        if (minValue !== state.minValueUser || maxValue !== state.maxValueUser) {
            state.minValueUser = minValue;
            state.maxValueUser = maxValue;
            state.countRange = state.maxValueUser - state.minValueUser + 1;
            state.arrayNum = [];
        }
        const number = checkRandomNumber(state);
        if (typeof number === "boolean") {
            setNodeInnerText('value_result', 'Elements are over');
            setNodeDisable('button_generate');
        } else {
            setNodeInnerText('value_result', number);
        }
    }
}

function newGeneration() {
    let state = {
        /*Список чисел, которые уже выпадали*/
        arrayNum: [],
        /*Диапазон*/
        minValueUser: 0,
        maxValueUser: 0,
        /*Общее количество возможных значений*/
        countRange: 0
    }

    addListener('reset', 'click', eventClickReset.bind(null, state));
    addListener('button_generate', 'click', eventClickGenerate.bind(null, state));
}

function eventClickReset(state) {
    state.arrayNum = [];
    setNodeDisable('button_generate', false);
    setNodeInnerText('value_result');
}

function validationNumber(value) {
    return Number.isInteger(value);
}

function validationRange(minValue, maxValue) {
    return validationNumber(minValue) && validationNumber(maxValue) && minValue < maxValue;

}

document.addEventListener('DOMContentLoaded', function () {
    newGeneration();
})
module.exports = {validationRange,checkRandomNumber, eventClickGenerate,    newGeneration,    eventClickReset,    validationNumber,    addListener}