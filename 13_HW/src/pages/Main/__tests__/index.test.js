const utils = require('../utils.ts');
const {
  initApp, clearAll, generateAll, addCandidate, drawCircle, drawInTime, initDraw, startRace,

} = require('../index');
const index = require('../index');
// jest.mock('../utils.ts', () => {
//   const originalModule = jest.requireActual('../utils.ts');
//
//   return {
//     __esModule: true,
//     ...originalModule,
//     randomNumber: jest.fn(() => 3),
//     getNode: jest.fn(() => {
//       return {
//         getContext() {
//           return {
//             fillRect: () => {
//             },
//             clearRect: () => {
//             },
//             beginPath: () => {
//             },
//             arc: () => {
//             },
//             fill: () => {
//             },
//             canvas: {
//               width: 0,
//               height: 0,
//             },
//           };
//         },
//       };
//     }),
//   };
// });
utils.getNode = jest.fn((id) => {
  return {
    getContext: () => {
      return {
        fillRect: () => {
        },
        clearRect: () => {
        },
        beginPath: () => {
        },
        arc: () => {
        },
        fill: () => {
        },
        fillText: () => {
        },
        canvas: {
          width: 0,
          height: 0,
        },
      };
    },
  };
});
utils.randomNumber = jest.fn((() => 0));
utils.getNodeValue = jest.fn((() => 0));
// global.setTimeout = jest.fn(() => {
// });


describe('initApp', () => {
  test('initApp', () => {
    expect(initApp()).toBeUndefined();
  });
});

describe('clearAll', () => {
  test('clearAll', () => {
    expect(clearAll([])).toBeUndefined();
  });
});

describe('generateAll', () => {
  test('generateAll', () => {
    expect(generateAll()).toBeUndefined();
  });
});
describe('addCandidate', () => {
  test('addCandidate empty', () => {
    expect(addCandidate([{}], 5)).toBeUndefined();
  });
  test('addCandidate full', () => {
    expect(addCandidate([], 0)).toBeUndefined();
  });
});

describe('drawCircle', () => {
  test('drawCircle empty', () => {
    expect(drawCircle('', 5, 2, 0, 0)).toBeUndefined();
  });
});


describe('drawInTime', () => {
  test('drawInTime ', () => {
    expect(drawInTime(1, 5, 2, 0, 0, 255)).toBeUndefined();
  });
});

describe('initDraw', () => {
  test('initDraw empty', () => {
    expect(initDraw([])).toBeUndefined();
  });
  test('initDraw', () => {
    expect(initDraw([{ name: 'Anna', number: 1 }])).toBeUndefined();
  });
});

describe('startRace', () => {
  test('startRace empty', () => {
    expect(startRace([])).toBeUndefined();
  });
  test('startRace', () => {

    utils.promiseTemplate = jest.fn(() => {
      return Promise.resolve(true);
    });
    expect(startRace([{
      drawBalance: () => {
      },
      drawAge: () => {
      },
      drawDocuments: () => {
      },
      drawEnglishLevel: () => {
      }, name: 'Anna', number: 1, balance: 2000, age: 24, documents: true, englishLevel: 'C1',
    }])).toBeUndefined();
  });
  test('startRace reject', () => {

    utils.promiseTemplate = jest.fn(() => {
      return Promise.reject(false);
    });
    expect(startRace([{
      drawBalance: () => {
      },
      drawAge: () => {
      },
      drawDocuments: () => {
      },
      drawEnglishLevel: () => {
      }, name: 'Anna', number: 1, balance: 2000, age: 24, documents: true, englishLevel: 'C1',
    }])).toBeUndefined();
  });
  test('startRace resolve reject', () => {

    utils.promiseTemplate = jest.fn((person,property) => {
      if (property==='balance') {
        return Promise.resolve(true);
      }
      return Promise.reject(false);
    })
    expect(startRace([{
      drawBalance: () => {
      },
      drawAge: () => {
      },
      drawDocuments: () => {
      },
      drawEnglishLevel: () => {
      }, name: 'Anna', number: 1, balance: 2000, age: 24, documents: true, englishLevel: 'C1',
    }])).toBeUndefined();
  });
});
