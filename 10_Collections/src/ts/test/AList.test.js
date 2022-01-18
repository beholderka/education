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
            expect(aList.print()).toEqual([3,2,1,4,5,6]);
        })
        const bList = new AList([6,5,4,3,2]);
        test('halfReverse 2', () => {
            expect(bList.halfReverse()).toBeUndefined();
        })
        test('halfReverse 2 before', () => {
            expect(bList.print()).toEqual([5,6,4,3,2]);
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
    })
    describe('minIndex', () => {
        test('minIndex 0', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                return aList.minIndex();
            })()).toBe(0);
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
        test('minValue -1', () => {
            expect((()=>{
                const aList = new AList([-1,3,9,1,2]);
                return aList.minValue();
            })()).toBe(-1);
        })
    })
    describe('remove', () => {
        test('remove 3', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                aList.remove(3);
                return aList.print();
            })()).toEqual([1,2,4,5,6]);
        })
        test('remove 9', () => {
            expect((()=>{
                const aList = new AList([-1,3,9,1,2]);
                aList.remove(9)
                return aList.print();
            })()).toEqual([-1,3,1,2])
        })
        test('remove 2', () => {
            expect((()=>{
                const aList = new AList([-1,3,9,1,2]);
                aList.remove(2)
                return aList.print();
            })()).toEqual([-1,3,9,1])
        })
    })
    describe('removeAll', () => {
        test('removeAll 3', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                aList.removeAll([3,4,7]);
                return aList.print();
            })()).toEqual([1,2,5,6]);
        })
        test('removeAll 2', () => {
            expect((()=>{
                const aList = new AList([-1,3,2,9,1,2,2]);
                aList.removeAll([2])
                return aList.print();
            })()).toEqual([-1,3,9,1])
        })
    })
    describe('retainAll', () => {
        test('retainAll 3,4,7', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                aList.retainAll([3,4,7]);
                return aList.print();
            })()).toEqual([3,4]);
        })
        test('retainAll 2', () => {
            expect((()=>{
                const aList = new AList([-1,3,2,9,1,2,2]);
                aList.retainAll([2])
                return aList.print();
            })()).toEqual([2,2,2])
        })
    })
    describe('reverse', () => {
        test('reverse 1', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                aList.reverse();
                return aList.print();
            })()).toEqual([6,5,4,3,2,1]);
        })
        test('retainAll 2', () => {
            expect((()=>{
                const aList = new AList([-1,3,2,9,1,2,2]);
                aList.reverse()
                return aList.print();
            })()).toEqual([2,2,1,9,2,3,-1])
        })
    })
    describe('set', () => {
        test('set [3]=2]', () => {
            expect((()=>{
                const aList = new AList([1,2,3,4,5,6]);
                aList.set(2,3);
                return aList.print();
            })()).toEqual([1,2,3,2,5,6]);
        })
        test('set [0]=6', () => {
            expect((()=>{
                const aList = new AList([-1,3,2,9,1,2,2]);
                aList.set(6,0)
                return aList.print();
            })()).toEqual([6,3,2,9,1,2,2])
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
})
