const {Painter} = require("../Painter");

jest.mock('../utils', () => {
    const originalModule = jest.requireActual('../utils');

    return {
        __esModule: true,
        ...originalModule,
        createElement: jest.fn(() => {
            return {click:()=>{}}
        })
    };
});

describe('Painter', () => {
    test('define', () => {
        expect(Painter).toBeDefined();
    })

    describe('draw', () => {
        test('draw', () => {
            expect(new Painter({
                getContext: () => {
                    return {
                        fillRect: () => {
                        },
                        beginPath:()=>{},
                        moveTo:()=>{},
                        lineTo:()=>{},
                        stroke:()=>{}
                    }
                }
            }).draw(0, 0, 0, 0)).toBeUndefined();
        })
    })

    describe('setLineWidth', () => {
        test('setLineWidth', () => {
            expect(new Painter({
                getContext: () => {
                    return {
                        fillRect: () => {
                        }
                    }
                }
            }).setLineWidth(0)).toBeUndefined();
        })
    })
     describe('setLineColor', () => {
        test('setLineColor', () => {
            expect(new Painter({
                getContext: () => {
                    return {
                        fillRect: () => {
                        }
                    }
                }
            }).setLineColor(0)).toBeUndefined();
        })
    })
     describe('savePicture', () => {
        test('savePicture', () => {
            expect(new Painter({
                getContext: () => {
                    return {
                        fillRect: () => {
                        },
                        canvas: {
                            toDataURL:()=>{}
                        }
                    }
                }
            }).savePicture()).toBeUndefined();
        })
    })


})