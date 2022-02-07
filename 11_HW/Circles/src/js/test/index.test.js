const {Canvas} = require("../Canvas");
const {onWindowLoad,drawIfPressed,setValue} = require('../index');
jest.mock('../Canvas', () => {
    const originalModule = jest.requireActual('../Canvas');

    return {
        __esModule: true,
        ...originalModule,
        Canvas: jest.fn(()=>{
            return {
                drawCircles:()=>{},
                addCircles:()=>{},
                // savePicture:()=>{},
            }
        }),
        // setLineWidth: jest.fn(),
        // setLineColor: jest.fn(),
        // savePicture: jest.fn(),
        // .mockImplementationOnce(() => '7'),

    };
});
jest.mock('../utils', () => {
    const originalModule = jest.requireActual('../utils');

    return {
        __esModule: true,
        ...originalModule,
        addListener: jest.fn(() => true),
        // .mockImplementationOnce(() => '7'),
        setNodeInnerText:jest.fn(),
        getNodeValue:jest.fn()
    };
});

global.setInterval = jest.fn();

describe('onWindowLoad', () => {
    test('define', () => {
        expect(onWindowLoad).toBeDefined();
    })
    test('load', () => {
        expect(onWindowLoad()).toBeUndefined();
    })
})
describe('drawIfPressed', () => {
    test('define', () => {
        expect(drawIfPressed).toBeDefined();
    })
    test('load', () => {
        expect(drawIfPressed({addCircles:()=>{}},{offsetX:0,offsetY:0})).toBeUndefined();
    })
})
describe('setValue', () => {
    test('define', () => {
        expect(setValue).toBeDefined();
    })
    test('load', () => {
        expect(setValue('id','idnode',()=>{})).toBeUndefined();
    })
})

