const {Canvas} = require("../Canvas");

jest.mock('../utils', () => {
    const originalModule = jest.requireActual('../utils');

    return {
        __esModule: true,
        ...originalModule,
        getNode: jest.fn(() => {
            return {
                getContext: () => {
                    return {
                        fillRect: () => {
                        },
                        clearRect:()=>{},
                        beginPath:()=>{},
                        arc:()=>{},
                        fill:()=>{},
                        canvas: {
                            width:0,
                            height:0,
                        }
                    }
                }
            }
        })
    };
});

describe('Canvas', () => {
    test('define', () => {
        expect(Canvas).toBeDefined();
    })

    describe('addCircles', () => {
        test('addCircles', () => {
            expect(new Canvas('test').addCircles(0, 0)).toBeUndefined();
        })
    })

    describe('drawCircles', () => {
        test('drawCircles', () => {
            expect((()=>{
               const canvas= new Canvas('test');
               canvas.addCircles(0,0);
               canvas.addCircles(0,0);
               return canvas.drawCircles();
            })()).toBeUndefined();
        })
    })



})