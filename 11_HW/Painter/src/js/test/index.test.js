const {Painter} = require("../Painter");
const {onWindowLoad,drawIfPressed,setValue} = require('../index');
jest.mock('../Painter', () => {
    const originalModule = jest.requireActual('../Painter');

    return {
        __esModule: true,
        ...originalModule,
        Painter: jest.fn(()=>{
            return {
                setLineWidth:()=>{},
                setLineColor:()=>{},
                savePicture:()=>{},
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
        expect(drawIfPressed({prevX:0,prevY:0},{offsetX:0,offsetY:0,buttons:0})).toBeUndefined();
    })
    test('load btns>0', () => {
        expect(drawIfPressed.bind({draw:()=>{}},{prevX:0,prevY:0},{offsetX:0,offsetY:0,buttons:1})()).toBeUndefined();
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

