/*Список чисел, которые уже выпадали*/
let arrayNum = [];
/*Диапазон*/
let minValueUser=0;
let maxValueUser=0;
/*Общее количество возможных значений*/
let countRange=0;
/*Кнопка Generate*/
const button = document.querySelector('.button-generate')
//----------------------//


/*Формируем случайное число в диапазоне*/
function randomNumber(minValue,maxValue) {
    return Math.round(Math.random() * (maxValue - minValue) + minValue);
}

/*Возвращаем новое случайное число*/
function checkRandomNumber() {
    while (true) {
        let number = randomNumber(minValueUser, maxValueUser);
        /*Сортирую по порядку для более быстрого поиска, затем проверяю есть ли number*/
        if (!arrayNum.sort().includes(number)) {
            arrayNum[arrayNum.length] = number;
            return number;
        }
        /*Чтоб в случае проблем выйти из бесконечного цикла*/
        if (arrayNum.length===countRange) {
            return false;
        }
    }
}
/* Обработка события onClick кнопки Generate
* Проверяю на правильность ввода диапазон
* Вычисляю значения необходимые для расчетов
* Получаю результат формирования случайного числа
* Вывожу результаты*/
function validateRangeValue() {
    let minValue = document.getElementById('value-min').value;
    let maxValue = document.getElementById('value-max').value;
    if ((maxValue !== '')
        && (minValue !== '')
        && (minValue < maxValue)) {
        if ((minValue!=minValueUser) || (maxValue!=maxValueUser)) {
            minValueUser= +minValue;
            maxValueUser= +maxValue;
            countRange = maxValueUser - minValueUser + 1;
            arrayNum = [];
        }
        let number = checkRandomNumber();
        if (typeof number === "boolean") {
            document.querySelector('.value-result').innerText='Elements are over';
            button.disabled = true;
        } else {
            document.querySelector('.value-result').innerText=number;
        }
    }
}

/*Обработка события onClick кнопки Reset*/

function resetRandom() {
    arrayNum = [];
    button.disabled=false;
    document.querySelector('.value-result').innerText='';
}

