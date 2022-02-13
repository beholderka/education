const {
  renderPicture,
  getPhoto,
  initApp,
  clickSmallImage,
  pauseShow,
  showAll,
  stopShow,
} = require('../index');
const utils = require('../utils');

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => '',
  }),
);
utils.getNode = jest.fn((id) => {
  return {
    firstChild:{},
    removeChild(){
      this.firstChild=null;
    },
    append:()=>{}
  };
});
describe('initApp', () => {
  test('initApp', () => {
    expect(initApp()).toBeUndefined();
  });
});

describe('renderPicture', () => {
  test('renderPicture', () => {
    expect(renderPicture([{ download_url: '' }, { download_url: '' }, { download_url: '' }])).toBeUndefined();
  });
});

describe('showAll', () => {
  test('showAll', () => {
    expect(showAll([{ download_url: '' }, { download_url: '' }, { download_url: '' }],0)).toBeUndefined();
  });
});

describe('stopShow', () => {
  test('stopShow', () => {
    expect(stopShow({},[{ download_url: '' }, { download_url: '' }, { download_url: '' }],0)).toBeUndefined();
  });
});

describe('clickSmallImage', () => {
  test('clickSmallImage', () => {
    expect(clickSmallImage({target:{src:''}})).toBeUndefined();
  });
});

describe('pauseShow', () => {
  test('pauseShow false', () => {
    expect(pauseShow({},[{ download_url: '' }, { download_url: '' }, { download_url: '' }],{
      i: 0,
      hasInterval: false,
    })).toBeUndefined();
  });
  test('pauseShow true', () => {
    expect(pauseShow({},[{ download_url: '' }, { download_url: '' }, { download_url: '' }],{
      i: 0,
      hasInterval: true,
    })).toBeUndefined();
  });
});
