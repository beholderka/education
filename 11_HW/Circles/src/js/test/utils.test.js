const {getNode, setNodeInnerText, getNodeValue, addListener,createElement} = require('../utils')

describe('getNode',()=>{
    test('define',()=>{
        expect(getNode).toBeDefined();
    })
    test('call',()=>{
        global.document.getElementById=jest.fn(()=>{return {}});
        expect(getNode('id')).toEqual({});
    })
    test('call null',()=>{
        global.document.getElementById=jest.fn(()=>null);
        expect(getNode('id')).toEqual(null);
    })
})

describe('setNodeInnerText',()=>{
    test('define',()=>{
        expect(setNodeInnerText).toBeDefined();
    })
    test('call',()=>{
        global.document.getElementById=jest.fn(()=>{return {}});
        expect(setNodeInnerText('id')).toEqual(true);
    })
    test('call null',()=>{
        global.document.getElementById=jest.fn(()=>null);
        expect(setNodeInnerText('id')).toEqual(false);
    })
})

describe('getNodeValue',()=>{
    test('define',()=>{
        expect(getNodeValue).toBeDefined();
    })
    test('call',()=>{
        global.document.getElementById=jest.fn(()=>{return {value:'test'}});
        expect(getNodeValue('id')).toEqual('test');
    })
    test('call null',()=>{
        global.document.getElementById=jest.fn(()=>null);
        expect(getNodeValue('id')).toEqual('');
    })
})

describe('addListener',()=>{
    test('define',()=>{
        expect(addListener).toBeDefined();
    })
    test('call',()=>{
        global.document.getElementById=jest.fn(()=>{return {addEventListener:()=>{}}});
        expect(addListener('id')).toBeUndefined();
    })
    test('call null',()=>{
        global.document.getElementById=jest.fn(()=>null);
        expect(addListener('id')).toBeUndefined();
    })
})

describe('createElement',()=>{
    test('define',()=>{
        expect(createElement).toBeDefined();
    })
    test('call',()=>{
        global.document.createElement=jest.fn(()=>{return {}});
        expect(createElement('id')).toEqual({});
    })
})
