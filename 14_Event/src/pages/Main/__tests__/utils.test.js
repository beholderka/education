const {
  getNode
} = require('../utils');

describe('getNode',()=>{
  test('getNode null',()=>{
    expect(getNode('')).toEqual(null)
  })
  test('getNode',()=>{
    document.getElementById=jest.fn(()=>{return {}});
    expect(getNode('')).toEqual({ })
  })
})
