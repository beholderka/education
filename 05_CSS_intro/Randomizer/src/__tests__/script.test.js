const {validationRange,validationNumber, checkRandomNumber, eventClickGenerate, eventClickReset, newGeneration,addListener} = require('../js/script')

jest.mock('../js/utils', () => {
    const originalModule = jest.requireActual('../js/utils');

    return {
        __esModule: true,
        ...originalModule,
        // setNodeInnerText: jest.fn(() => true),
        // setNodeDisable: jest.fn(() => true),
        getNodeValue: jest
            .fn()
            .mockImplementationOnce(() => '1')
            .mockImplementationOnce(() => '4')
            .mockImplementationOnce(() => '3')
            .mockImplementationOnce(() => '10')
            .mockImplementationOnce(() => '6')
            .mockImplementationOnce(() => '7'),

    };
});

describe('tests for validationNumber function', function () {

    test('true', function () {
        expect(validationNumber(1)).toBe(true);
    })

    test('false', function () {
        expect(validationNumber('s')).toBe(false);
    })

})

describe('tests for checkRandomNumber function', function () {
    test('false', function () {
        expect(checkRandomNumber({
            arrayNum: [6, 7],
            minValueUser: 6,
            maxValueUser: 7,
            countRange: 2
        })).toBe(false);
    })
    test('6', function () {
        expect(checkRandomNumber({
            arrayNum: [1, 2,3,4,5,7],
            minValueUser: 1,
            maxValueUser: 7,
            countRange: 7
        })).toBe(6);
    })
})

describe('tests for eventClickGenerate function', function () {
    beforeEach(function () {

    })
    test('toBeUndefined()', function () {
        expect(eventClickGenerate({
            arrayNum: [6, 7],
            minValueUser: 6,
            maxValueUser: 7,
            countRange: 2
        })).toBeUndefined();
    })
    test('toBeUndefined() x2', function () {
        expect(eventClickGenerate({
            arrayNum: [3],
            minValueUser: 3,
            maxValueUser: 10,
            countRange: 7
        })).toBeUndefined();
    })
    test('toBeUndefined() x3', function () {
        expect(eventClickGenerate({
            arrayNum: [6, 7],
            minValueUser: 6,
            maxValueUser: 7,
            countRange: 2
        })).toBeUndefined();
    })
})

describe('tests for newGeneration function', function () {
    test('toBeUndefined()', function () {
        expect(newGeneration({
            arrayNum: [6, 7],
            minValueUser: 6,
            maxValueUser: 7,
            countRange: 2
        })).toBeUndefined();
    })

})

describe('tests for eventClickReset function', function () {
    test('eventClickReset()', function () {
        expect(eventClickReset({
            arrayNum: [6, 7],
            minValueUser: 6,
            maxValueUser: 7,
            countRange: 2
        })).toBeUndefined();
    })

})

describe('tests for addListener function', function () {
    test('addListener()', function () {
        expect(addListener()).toBeUndefined();
    })

})

describe('tests for validationRange function', function () {
    test('1 2', function () {
        expect(validationRange(1,2)).toBe(true);
    })
    test('"d" 2', function () {
        expect(validationRange('d',2)).toBe(false);
    })

})




