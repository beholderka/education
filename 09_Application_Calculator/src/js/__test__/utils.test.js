const {setNodeInnerHTML,setNodeValue,addListener} = require('../utils')

describe('setNodeInnerHTML',() => {
  test('setNodeInnerHTML', () => {
    expect(setNodeInnerHTML('id','')).toEqual(false);
  })
  test('setNodeInnerHTML', () => {
    global.document.getElementById=jest.fn(()=>{ return {}});
    expect(setNodeInnerHTML('id','')).toEqual(true);
  })
})

describe('setNodeValue',() => {
  test('setNodeValue', () => {
    global.document.getElementById=jest.fn(()=>{ return null});
    expect(setNodeValue('id','')).toEqual(false);
  })
  test('setNodeValue', () => {
    global.document.getElementById=jest.fn(()=>{ return {}});
    expect(setNodeValue('id','')).toEqual(true);
  })
})

describe('addListener',() => {
  test('addListener', () => {
    global.document.getElementById=jest.fn(()=>{ return null});
    expect(addListener('id','click',()=>{})).toBeUndefined();
  })
  test('setNodeValue', () => {
    global.document.getElementById=jest.fn(()=>{ return {addEventListener:()=>{}}});
    expect(addListener('id','click',()=>{})).toBeUndefined();
  })
})
