const {
  promiseTemplate,
  addListener,
  randomArrayElement,
  randomNumber,
  setNodeValue,
  getNodeValue,
  getNode,
  setNodeDisabled,
} = require('../utils');

describe('promiseTemplate', () => {
  test('promiseTemplate true', async () => {
    return promiseTemplate({ age: 18 }, 'age', 1, () => true).then((data) => {
      expect(data).toBe(true);
    });
  });
  test('promiseTemplate false', async () => {
    return promiseTemplate({ age: 1 }, 'age', 1, () => false).catch((data) => {
      expect(data).toBe(false);
    });
  });
});

describe('randomNumber', () => {
  test('1',()=>{
    expect(randomNumber(1,1)).toBe(1);
  })
  test('2',()=>{
    expect(randomNumber(2,2)).toBe(2);
  })
  test('3',()=>{
    expect(randomNumber(3,3)).toBe(3);
  })
});

describe('getNode',()=>{
  test('getNode null',()=>{
    expect(getNode('')).toEqual(null)
  })
  test('getNode',()=>{
    document.getElementById=jest.fn(()=>{return {}});
    expect(getNode('')).toEqual({ })
  })
})
