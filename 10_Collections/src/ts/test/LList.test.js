// import {LList} from "../LList"
const {LList} = require("../LList");

describe('LList',()=>{
    describe('add',()=>{
        test('add 1',()=>{
            expect((()=>{
                let lList= new LList();
                lList.add(1);
                return lList.toArray();
            })()).toEqual([1]);
        })
        test('add 1 2 3',()=>{
            expect((()=>{
                let lList= new LList();
                lList.add(1);
                lList.add(2);
                lList.add(3);
                return lList.toArray();
            })()).toEqual([1,2,3]);
        })
    })
    describe('contains',()=>{
        test('1',()=>{
            expect((()=>{
                let lList= new LList();
                lList.add(1);
                return lList.contains(2);
            })()).toEqual(false);
        })
        test('1 2 3',()=>{
            expect((()=>{
                let lList= new LList();
                lList.add(1);
                lList.add(2);
                lList.add(3);
                return lList.contains(3);
            })()).toEqual(true);
        })
        test('1 2 3',()=>{
            expect((()=>{
                let lList= new LList(0);
                return lList.contains(3);
            })()).toEqual(false);
        })
    })
    describe('get',()=>{
        test('empty',()=>{
            expect((()=>{
                let lList= new LList();
                return lList.get(2);
            })()).toEqual(undefined);
        })
        test('without size',()=>{
            expect((()=>{
                let lList= new LList([1,2]);
                return lList.get(2);
            })()).toEqual(undefined);
        })
        test('1 2 3',()=>{
            expect((()=>{
                let lList= new LList([1,2,3]);
                return lList.get(1);
            })()).toEqual(2);
        })
        test('1 2 3',()=>{
            expect((()=>{
                let lList= new LList([1,2,3]);
                return lList.get(2);
            })()).toEqual(3);
        })
    })
    describe('clear',()=>{
        test('clear',()=>{
            expect((()=>{
                let lList= new LList([1,2,3]);
                lList.clear()
                return lList.toArray();
            })()).toEqual([]);
        })
    })
    describe('getSize',()=>{
        test('3',()=>{
            expect((()=>{
                let lList= new LList([1,2,3]);
                return lList.getSize();
            })()).toEqual(3);
        })
        test('0',()=>{
            expect((()=>{
                let lList= new LList();
                return lList.getSize();
            })()).toEqual(0);
        })
        test('0 in constructor',()=>{
            expect((()=>{
                let lList= new LList(0);
                return lList.getSize();
            })()).toEqual(0);
        })
        test('5 in constructor',()=>{
            expect((()=>{
                let lList= new LList(5);
                return lList.getSize();
            })()).toEqual(5);
        })
    })
    describe('maxIndex',()=>{
        test('2',()=>{
            expect((()=>{
                let lList= new LList([1,2,3]);
                return lList.maxIndex();
            })()).toEqual(2);
        })
        test('empty',()=>{
            expect((()=>{
                let lList= new LList([]);
                return lList.maxIndex();
            })()).toEqual(-1);
        })
    })
    describe('maxValue',()=>{
        test('3',()=>{
            expect((()=>{
                let lList= new LList([1,2,3]);
                return lList.maxValue();
            })()).toEqual(3);
        })
        test('empty',()=>{
            expect((()=>{
                let lList= new LList([]);
                return lList.maxValue();
            })()).toEqual(undefined);
        })
    })
    describe('minIndex',()=>{
        test('0',()=>{
            expect((()=>{
                let lList= new LList([1,2,3]);
                return lList.minIndex();
            })()).toEqual(0);
        })
        test('3',()=>{
            expect((()=>{
                let lList= new LList([1,2,3,-1]);
                return lList.minIndex();
            })()).toEqual(3);
        })
        test('empty',()=>{
            expect((()=>{
                let lList= new LList([]);
                return lList.minIndex();
            })()).toEqual(-1);
        })
    })
    describe('minValue',()=>{
        test('-1',()=>{
            expect((()=>{
                let lList= new LList([1,2,3,-1]);
                return lList.minValue();
            })()).toEqual(-1);
        })
        test('-1',()=>{
            expect((()=>{
                let lList= new LList([1,-1,2,3]);
                return lList.minValue();
            })()).toEqual(-1);
        })
        test('-1',()=>{
            expect((()=>{
                let lList= new LList([-1,1,2,3]);
                return lList.minValue();
            })()).toEqual(-1);
        })
        test('empty',()=>{
            expect((()=>{
                let lList= new LList([]);
                return lList.minValue();
            })()).toEqual(undefined);
        })
    })
    describe('set',()=>{
        test('1 2 3',()=>{
            expect((()=>{
                let lList= new LList([1,2,4]);
                lList.set(3,2);
                return lList.toArray();
            })()).toEqual([1,2,3]);
        })
        test('empty',()=>{
            expect((()=>{
                let lList= new LList([]);
                lList.set(3,2);
                return lList.toArray();
            })()).toEqual([]);
        })
    })
    describe('sort',()=>{
        test('1 2 3',()=>{
            expect((new LList([3,2,1]).sort())).toEqual([1,2,3]);
        })
        test('-1,0,1,3,6,9,11,23',()=>{
            expect((new LList([1,9,3,0,11,23,-1,6]).sort())).toEqual([-1,0,1,3,6,9,11,23]);
        })
    })
    describe('halfReverse', () => {
        const lList = new LList([1,2,3,4,5,6]);
        test('halfReverse 1', () => {
            expect(lList.halfReverse()).toBeUndefined();
        })
        test('halfReverse 1 before', () => {
            expect(lList.toArray()).toEqual([3,2,1,4,5,6]);
        })
        const bList = new LList([6,5,4,3,2]);
        test('halfReverse 2', () => {
            expect(bList.halfReverse()).toBeUndefined();
        })
        test('halfReverse 2 before', () => {
            expect(bList.toArray()).toEqual([5,6,4,3,2]);
        })

    })
    describe('reverse', () => {
        test('reverse 1', () => {
            expect((()=>{
                const lList = new LList([1,2,3,4,5,6]);
                lList.reverse();
                return lList.toArray();
            })()).toEqual([6,5,4,3,2,1]);
        })
        test('reverse 2', () => {
            expect((()=>{
                const lList = new LList([-1,3,2,9,1,2,2]);
                lList.reverse()
                return lList.toArray();
            })()).toEqual([2,2,1,9,2,3,-1])
        })
    })
    describe('removeAll', () => {
        test('removeAll 3', () => {
            expect((()=>{
                const lList = new LList([1,2,3,4,5,6]);
                lList.removeAll([3,4,7]);
                return lList.toArray();
            })()).toEqual([1,2,5,6]);
        })
        test('removeAll 2', () => {
            expect((()=>{
                const lList = new LList([-1,3,2,9,1,2,2]);
                lList.removeAll([2])
                return lList.toArray();
            })()).toEqual([-1,3,9,1])
        })
    })
    describe('retainAll', () => {
        test('retainAll 3,4,7', () => {
            expect((()=>{
                const lList = new LList([1,2,3,4,5,6]);
                lList.retainAll([3,4,7]);
                return lList.toArray();
            })()).toEqual([3,4]);
        })
        test('retainAll 2', () => {
            expect((()=>{
                const lList = new LList([-1,3,2,9,1,2,2]);
                lList.retainAll([2])
                return lList.toArray();
            })()).toEqual([2,2,2])
        })
    })
    describe('remove', () => {
        test('remove 3', () => {
            expect((()=>{
                const lList = new LList([1,2,3,4,5,6]);
                lList.remove(3);
                return lList.toArray();
            })()).toEqual([1,2,4,5,6]);
        })
        test('remove last', () => {
            expect((()=>{
                const lList = new LList([-1,3,9,1,2]);
                lList.remove(2)
                return lList.toArray();
            })()).toEqual([-1,3,9,1])
        })
        test('remove first', () => {
            expect((()=>{
                const lList = new LList([-1,3,9,1,2]);
                lList.remove(-1)
                return lList.toArray();
            })()).toEqual([3,9,1,2])
        })
        test('remove once', () => {
            expect((()=>{
                const lList = new LList([-1]);
                lList.remove(-1)
                return lList.toArray();
            })()).toEqual([])
        })
        test('remove 2', () => {
            expect((()=>{
                const lList = new LList([-1,3,9,1]);
                lList.remove(2)
                return lList.toArray();
            })()).toEqual([-1,3,9,1])
        })
        test('remove empty', () => {
            expect((()=>{
                const lList = new LList([]);
                lList.remove(2)
                return lList.toArray();
            })()).toEqual([])
        })
    })
    describe('print',()=>{
        test('empty',()=>{
            expect(new LList().print()).toBeUndefined();
        })
        test('1 2 3',()=>{
            expect(new LList([1,2,3]).print()).toBeUndefined();
        })
    })
    describe('toString',()=>{
        test('1->2->3->',()=>{
            expect((new LList([1,2,3])).toString()).toEqual('1->2->3->');
        })
        test('',()=>{
            expect((new LList([])).toString()).toEqual('');
        })
    })
})
