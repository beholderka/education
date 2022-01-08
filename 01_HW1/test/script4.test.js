const assert = require('assert')
const {fPrint0_999b,flipInt,fPrintNum0_999,fDigitToString,fPrint0_999,fDayWeek,fAB} = require('../script4.js');

describe('fPrint0_999',()=>{
    it('245',()=>{
        assert.deepEqual(fPrint0_999(245),' двести сорок пять');
    })
    it('111',()=>{
        assert.deepEqual(fPrint0_999(111),' сто одинадцать');
    })
    it('11',()=>{
        assert.deepEqual(fPrint0_999(11),' одинадцать');
    })
})

describe('fPrint0_999b',()=>{
    it('245',()=>{
        assert.deepEqual(fPrint0_999b(245),' двести сорок пять ');
    })
    it('111',()=>{
        assert.deepEqual(fPrint0_999b(111),' сто одинадцать ');
    })
    it('11111',()=>{
        assert.deepEqual(fPrint0_999b(11111),' одинадцать тысяч сто одинадцать ');
    })
})
describe('fPrintNum0_999',()=>{
    it('245',()=>{
        assert.deepEqual(fPrintNum0_999(' двести сорок пять '),245);
    })
    it('111',()=>{
        assert.deepEqual(fPrintNum0_999(' сто одинадцать '),111);
    })
    it('11111',()=>{
        assert.deepEqual(fPrintNum0_999(' одинадцать тысяч сто одинадцать '),11111);
    })
})

describe('flipInt',()=>{
    it('245',()=>{
        assert.deepEqual(flipInt(245),542);
    })
    it('112',()=>{
        assert.deepEqual(flipInt(112),211);
    })
})

describe('fDigitToString',()=>{
    it('2 10',()=>{
        assert.deepEqual(fDigitToString(2,10),'двадцать');
    })
    it('3 11',()=>{
        assert.deepEqual(fDigitToString(3,11),'тринадцать');
    })
    it('3 1',()=>{
        assert.deepEqual(fDigitToString(3,1),'три');
    })
    it('3 100',()=>{
        assert.deepEqual(fDigitToString(3,100),'триста');
    })
})

describe('fDayWeek',()=>{
    it('1',()=>{
        assert.deepEqual(fDayWeek(1),'Понедельник');
    })
    it('2',()=>{
        assert.deepEqual(fDayWeek(2),'Вторник');
    })
    it('7',()=>{
        assert.deepEqual(fDayWeek(7),'Воскресенье');
    })
    it('8',()=>{
        assert.deepEqual(fDayWeek(8),'error');
    })
})

describe('fAB',()=>{
    it('1',()=>{
        assert.deepEqual(fAB(0,0,1,0),1);
    })
    it('2',()=>{
        assert.deepEqual(fAB(0,0,2,0),2);
    })
    it('3',()=>{
        assert.deepEqual(fAB(-2,0,4,0),6);
    })
})
