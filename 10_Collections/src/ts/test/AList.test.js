// import {AList} from '../AList'

const {AList} = require("../AList");

describe('AList', () => {
    describe('add', () => {
        test('add 1', () => {
            const aList = new AList(0);
            expect(aList.add(1)).toBeUndefined();
        })
        test('add 2', () => {
            const aList = new AList();
            expect(aList.add(2)).toBeUndefined();
        })
        test('add 3', () => {
            const aList = new AList([]);
            expect(aList.add(3)).toBeUndefined();
        })
    })
    describe('halfReverse', () => {
        const aList = new AList([1,2,3,4,5,6]);
        test('halfReverse 1', () => {
            expect(aList.halfReverse()).toBeUndefined();
        })
        test('halfReverse 1 before', () => {
            expect(aList.toArray()).toEqual([3,2,1,4,5,6]);
        })
        const bList = new AList([6,5,4,3,2]);
        test('halfReverse 2', () => {
            expect(bList.halfReverse()).toBeUndefined();
        })
        test('halfReverse 2 before', () => {
            expect(bList.toArray()).toEqual([5,6,4,3,2]);
        })

    })
    describe('clear', () => {
        test('clear', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                aList.clear();
                return aList.getSize()===0;
            })()).toBe(true);
        })
    })
    describe('contains', () => {
        test('contains true', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                return aList.contains(3);
            })()).toBe(true);
        })
        test('contains false', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                return aList.contains(-3);
            })()).toBe(false);
        })
    })
    describe('get', () => {
        test('get 4', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                return aList.get(3);
            })()).toBe(4);
        })
        test('contains undefined', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                return aList.get(-3);
            })()).toBeUndefined();
        })
    })
    describe('getSize', () => {
        test('getSize 6', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                return aList.getSize();
            })()).toBe(6);
        })
        test('getSize 2', () => {
            expect((()=>{
                const aList = new AList([1,2]);
                return aList.getSize();
            })()).toBe(2);
        })
    })
    describe('maxIndex', () => {
        test('maxIndex 6', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                return aList.maxIndex();
            })()).toBe(5);
        })
        test('maxIndex 2', () => {
            expect((()=>{
                const aList = new AList([-1,3,9,1,2]);
                return aList.maxIndex();
            })()).toBe(2);
        })
        test('maxIndex empty array', () => {
            expect((()=>{
                const aList = new AList(0);
                return aList.maxIndex();
            })()).toBe(-1);
        })
    })
    describe('maxValue', () => {
        test('maxValue 6', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                return aList.maxValue();
            })()).toBe(6);
        })
        test('maxValue 9', () => {
            expect((()=>{
                const aList = new AList([-1,3,9,1,2]);
                return aList.maxValue();
            })()).toBe(9);
        })
        test('maxValue empty array', () => {
            expect((()=>{
                const aList = new AList(0);
                return aList.maxValue();
            })()).toBeUndefined();
        })
    })
    describe('minIndex', () => {
        test('minIndex 0', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                return aList.minIndex();
            })()).toBe(0);
        })
        test('minIndex empty array', () => {
            expect((()=>{
                const aList = new AList(0);
                return aList.minIndex();
            })()).toBe(-1);
        })
        test('minIndex 3', () => {
            expect((()=>{
                const aList = new AList([3,9,1,-1,2]);
                return aList.minIndex();
            })()).toBe(3);
        })
    })
    describe('minValue', () => {
        test('minValue 1', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                return aList.minValue();
            })()).toBe(1);
        })
        test('minValue empty array', () => {
            expect((()=>{
                const aList = new AList(0);
                return aList.minValue();
            })()).toBeUndefined();
        })
        test('minValue -1', () => {
            expect((()=>{
                const aList = new AList([-1,3,9,1,2]);
                return aList.minValue();
            })()).toBe(-1);
        })
        test('minValue -1 end', () => {
            expect((()=>{
                const aList = new AList([1,3,9,1,2,-1]);
                return aList.minValue();
            })()).toBe(-1);
        })
    })
    describe('remove', () => {
        test('remove 3', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                aList.remove(3);
                return aList.toArray();
            })()).toEqual([1,2,4,5,6]);
        })
        test('remove 9', () => {
            expect((()=>{
                const aList = new AList([-1,3,9,1,2]);
                aList.remove(9)
                return aList.toArray();
            })()).toEqual([-1,3,1,2])
        })
        test('remove 2', () => {
            expect((()=>{
                const aList = new AList([-1,3,9,1,2]);
                aList.remove(2)
                return aList.toArray();
            })()).toEqual([-1,3,9,1])
        })
        test('remove 2', () => {
            expect((()=>{
                const aList = new AList([-1,3,9,1]);
                aList.remove(2)
                return aList.toArray();
            })()).toEqual([-1,3,9,1])
        })
    })
    describe('removeAll', () => {
        test('removeAll 3', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                aList.removeAll([3,4,7]);
                return aList.toArray();
            })()).toEqual([1,2,5,6]);
        })
        test('removeAll 2', () => {
            expect((()=>{
                const aList = new AList([-1,3,2,9,1,2,2]);
                aList.removeAll([2])
                return aList.toArray();
            })()).toEqual([-1,3,9,1])
        })
    })
    describe('retainAll', () => {
        test('retainAll 3,4,7', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                aList.retainAll([3,4,7]);
                return aList.toArray();
            })()).toEqual([3,4]);
        })
        test('retainAll 2', () => {
            expect((()=>{
                const aList = new AList([-1,3,2,9,1,2,2]);
                aList.retainAll([2])
                return aList.toArray();
            })()).toEqual([2,2,2])
        })
    })
    describe('reverse', () => {
        test('reverse 1', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                aList.reverse();
                return aList.toArray();
            })()).toEqual([6,5,4,3,2,1]);
        })
        test('reverse 2', () => {
            expect((()=>{
                const aList = new AList([-1,3,2,9,1,2,2]);
                aList.reverse()
                return aList.toArray();
            })()).toEqual([2,2,1,9,2,3,-1])
        })
    })
    describe('set', () => {
        test('set [3]=2]', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                aList.set(2,3);
                return aList.toArray();
            })()).toEqual([1,2,3,2,5,6]);
        })
        test('set [0]=6', () => {
            expect((()=>{
                const aList = new AList([-1,3,2,9,1,2,2]);
                aList.set(6,0)
                return aList.toArray();
            })()).toEqual([6,3,2,9,1,2,2])
        })
        test('set without size', () => {
            expect((()=>{
                const aList = new AList([-1,3,2,9,1,2,2]);
                return aList.set(6,11);
            })()).toBeUndefined();
        })
        test('set empty array', () => {
            expect((()=>{
                const aList = new AList(0);
                return aList.set(6,0);
            })()).toBeUndefined();
        })
    })
    describe('toArray', () => {
        test('toArray 1', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                return  aList.toArray();
            })()).toEqual([1,2,3,4,5,6]);
        })
        test('toArray 2', () => {
            expect((()=>{
                const aList = new AList([-1,3,2,9,1,2,2]);
                return  aList.toArray();
            })()).toEqual([-1,3,2,9,1,2,2])
        })
    })
    describe('toString', () => {
        test('toString 1', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                return  aList.toString();
            })()).toEqual('1,2,3,4,5,6');
        })
        test('toArray 2', () => {
            expect((()=>{
                const aList = new AList([-1,3,2,9,1,2,2]);
                return  aList.toString();
            })()).toEqual('-1,3,2,9,1,2,2')
        })
    })
    describe('sort', () => {
        test('sort 1', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                return  aList.sort();
            })()).toEqual([1,2,3,4,5,6]);
        })
        test('sort 2', () => {
            expect((()=>{
                const aList = new AList([-1,3,2,9,1,2,2]);
                return  aList.sort();
            })()).toEqual([-1,1,2,2,2,3,9])
        })
    })
    describe('print', () => {
        test('print 1', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                return  aList.print();
            })()).toBeUndefined();
        })
        test('print 2', () => {
            expect((()=>{
                const aList = new AList();
                return  aList.print();
            })()).toBeUndefined();
        })
    })
})
