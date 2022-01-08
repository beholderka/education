const {saveUserSettings, checkUserNumber,validationNumber,validationRange,newGame,eventHandlerClick,eventHandlerSaveClick} = require('../js/index')
jest.mock('../js/utils', () => {
    const originalModule = jest.requireActual('../js/utils');

    //Mock the default export and named export 'foo'
    return {
        __esModule: true,
        ...originalModule,
        // alertCall: jest.fn(),
        // attemptsPlus: jest.fn(),
        setNodeInnerText: jest.fn(() => true),
        setNodeValue: jest.fn(() => true),
        getNodeValue: jest
            .fn(() => '1')
            .mockImplementationOnce(() => '1')
            .mockImplementationOnce(() => '4')
            .mockImplementationOnce(() => '3')
            .mockImplementationOnce(() => '10')
            .mockImplementationOnce(() => '4'),

        randomValueMadeNumber: jest.fn(() => 6),
    };
});

describe('tests for saveUserSettings function', () => {
    test('without arg', () => {
        expect(saveUserSettings()).toBe(false);
    })
    test('1 2 3', () => {
        expect(saveUserSettings(1, 2, 3)).toBe(true);
    })
    test('200 200 3', () => {
        expect(saveUserSettings(200, 200, 3)).toBe(true);
    })
    test('1 300 3', () => {
        expect(saveUserSettings(1, 300, 3)).toBe(false);
    })
    test('300 200 3', () => {
        expect(saveUserSettings(300, 200, 3)).toBe(false);
    })
    test('1 200 30', () => {
        expect(saveUserSettings(1, 200, 30)).toBe(false);
    })

    test('15 2 3', () => {
        expect(saveUserSettings(15, 2, 3)).toBe(false);
    })
})

describe('tests for checkUserNumber function', function () {

    test('win', function () {
        expect(checkUserNumber({
            valuePCNumber: 1,
            countAttempts: 0,
            valueAttempts: 5,
            minValueUser: 1,
            maxValueUser: 100,
            checkWinGame: false,
            userNumber: 1
        })).toBe(`Поздравляю! Ты угадал ` +
            `задуманное число за 1 попыток.`);
    })
    test('end game', function () {
        expect(checkUserNumber({
            valuePCNumber: 1,
            countAttempts: 5,
            valueAttempts: 5,
            minValueUser: 1,
            maxValueUser: 100,
            checkWinGame: false,
            userNumber: 2
        })).toBe('Попытки закончились!');
    })
    test('win x2', function () {
        expect(checkUserNumber({
            valuePCNumber: 1,
            countAttempts: 1,
            valueAttempts: 5,
            minValueUser: 1,
            maxValueUser: 100,
            checkWinGame: true,
            userNumber: 1
        })).toBe(true);
    })
    test('wrong format', function () {
        expect(checkUserNumber({
            valuePCNumber: 1,
            countAttempts: 1,
            valueAttempts: 5,
            minValueUser: 1,
            maxValueUser: 100,
            checkWinGame: false,
            userNumber: ''
        })).toBe('Неверный формат!');
    })
    test('cold', function () {
        expect(checkUserNumber({
            valuePCNumber: 1,
            countAttempts: 2,
            valueAttempts: 5,
            minValueUser: 1,
            maxValueUser: 100,
            checkWinGame: false,
            userNumber: 3
        })).toBe('Не угадал, холоднее!!! Осталось 2 попыток.');
    })
    test('hot', function () {
        expect(checkUserNumber({
            valuePCNumber: 10,
            countAttempts: 1,
            valueAttempts: 5,
            minValueUser: 1,
            maxValueUser: 100,
            checkWinGame: false,
            userNumber: 11
        })).toBe('Не угадал, но теплее!!! Осталось 3 попыток.');
    })

    test('count', function () {
        expect(checkUserNumber({
            valuePCNumber: 10,
            countAttempts: 0,
            valueAttempts: 5,
            minValueUser: 1,
            maxValueUser: 100,
            checkWinGame: false,
            userNumber: 21
        })).toBe('Осталось 4 попыток.');
    })

})

describe('tests for validationNumber function', function () {

    test('true', function () {
        expect(validationNumber(1)).toBe(true);
    })

    test('false', function () {
        expect(validationNumber('s')).toBe(false);
    })

})

describe('tests for validationRange function', function () {

    test('true', function () {
        expect(validationRange(1,1,3)).toBe(true);
    })

    test('false', function () {
        expect(validationRange(1,3,4)).toBe(false);
    })

})

describe('tests for newGame function', function () {

    test('true', function () {
        expect(newGame()).toBeUndefined();
    })
})

describe('tests for eventHandlerClick function', function () {

    test('toBeUndefined', function () {
        expect(eventHandlerClick()).toBeUndefined();
    })
    test('toBeUndefined x2', function () {
        expect(eventHandlerClick({
            valuePCNumber: 1,
            countAttempts: 0,
            valueAttempts: 5,
            minValueUser: 1,
            maxValueUser: 100,
            checkWinGame: false,
            userNumber: 1
        })).toBeUndefined();
    })
    test('toBeUndefined x3', function () {
        expect(eventHandlerClick({
            valuePCNumber: 1,
            countAttempts: 0,
            valueAttempts: 5,
            minValueUser: 1,
            maxValueUser: 100,
            checkWinGame: true,
            userNumber: 1
        })).toBeUndefined();
    })
})

describe('tests for eventHandlerSaveClick function', function () {

    test('toBeUndefined', function () {
        expect(eventHandlerSaveClick()).toBeUndefined();
    })
    test('toBeUndefined x2', function () {
        expect(eventHandlerSaveClick({
            valuePCNumber: 1,
            countAttempts: 0,
            valueAttempts: 5,
            minValueUser: 1,
            maxValueUser: 100,
            checkWinGame: true,
            userNumber: 1
        })).toBeUndefined();

    })
    test('toBeUndefined x3', function () {
        expect(eventHandlerSaveClick({
            valuePCNumber: 1,
            countAttempts: 0,
            valueAttempts: 5,
            minValueUser: 1,
            maxValueUser: 100,
            checkWinGame: true,
            userNumber: 1
        })).toBeUndefined();

    })
})


