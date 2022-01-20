const {BST} = require('../BST')

describe('BST', () => {

    test('create new instance', () => {
        expect(new BST().root).toEqual(null);
    })

    describe('test method init', () => {
        test('', () => {
            const bst = new BST();
            bst.init([2, 1, 3]);
            expect(bst.root).toEqual({
                value: 2,
                left: {
                    value: 1,
                    left: null,
                    right: null
                },
                right: {
                    value: 3,
                    left: null,
                    right: null,
                }
            });
        })
    })

    describe('test method insert', () => {
        test('insert root', () => {
            const bst = new BST();
            bst.insert(4);
            expect(bst.root).toEqual({value: 4, left: null, right: null});
        })
        test('insert root left', () => {
            const bst = new BST();
            bst.insert(4);
            bst.insert(3);
            expect(bst.root).toEqual({value: 4, left: {value: 3, left: null, right: null}, right: null});
        })
        test('insert root right', () => {
            const bst = new BST();
            bst.insert(4);
            bst.insert(5);
            expect(bst.root).toEqual({value: 4, left: null, right: {value: 5, left: null, right: null}});
        })
    })

    describe('test method clear', () => {
        test('size 2 -> 0', () => {
            const bst = new BST();
            bst.insert(4);
            bst.insert(5);
            expect(bst.clear()).toBeUndefined();
        })
    })

    describe('test method leaves', () => {
        test('root null -> 0 leaves', () => {
            expect(new BST().leaves()).toEqual(0);
        })
        test('1 leaves', () => {
            const bst = new BST();
            bst.insert(4);
            bst.insert(2);
            expect(bst.leaves()).toEqual(1);
        })
        test('2 leaves', () => {
            const bst = new BST();
            bst.insert(4);
            bst.insert(2);
            bst.insert(5);
            expect(bst.leaves()).toEqual(2);
        })
    })
    describe('test method nodes', () => {
        test('root null -> 0 nodes', () => {
            expect(new BST().nodes()).toEqual(0);
        })
        test('1 nodes', () => {
            const bst = new BST();
            bst.insert(4);
            bst.insert(2);
            expect(bst.nodes()).toEqual(1);
        })
        test('2 nodes', () => {
            const bst = new BST();
            bst.insert(4);
            bst.insert(2);
            bst.insert(1);
            expect(bst.nodes()).toEqual(2);
        })
    })
    describe('test method print', () => {
        test('print', () => {
            const bst = new BST();
            bst.init([2, 3, 1]);
            expect(bst.print()).toBeUndefined();
        });
    })

    describe('test method height', () => {
        test('2', () => {
            expect((() => {
                const bst = new BST();
                bst.init([2, 3, 1]);
                return bst.height();
            })()).toEqual(2);
        })
        test('4', () => {
            expect((() => {
                const bst = new BST();
                bst.init([2, 5, 3, 4]);
                return bst.height();
            })()).toEqual(4);
        })
    })
    describe('test method maxNode', () => {
        test('node', () => {
            expect((() => {
                const bst = new BST();
                bst.init([2, 5, 3, 4]);
                return bst.maxNode();
            })()).toEqual({
                value: 5,
                left: {value: 3, left: null, right: {value: 4, left: null, right: null}},
                right: null
            });
        })
        test('leave', () => {
            expect((() => {
                const bst = new BST();
                bst.init([2, 3, 4, 5]);
                return bst.maxNode();
            })()).toEqual({value: 5, left: null, right: null});
        })
        test('null', () => {
            expect((() => {
                const bst = new BST();
                return bst.maxNode();
            })()).toEqual(null);
        })
    })
    describe('test method minNode', () => {
        test('node', () => {
            expect((() => {
                const bst = new BST();
                bst.init([3, 1, 2, 5, 4]);
                return bst.minNode();
            })()).toEqual({value: 1, left: null, right: {value: 2, left: null, right: null}});
        })
        test('leave', () => {
            expect((() => {
                const bst = new BST();
                bst.init([2, 3, 4, 5, 1]);
                return bst.minNode();
            })()).toEqual({value: 1, left: null, right: null});
        })
        test('null', () => {
            expect((() => {
                const bst = new BST();
                return bst.minNode();
            })()).toEqual(null);
        })
    })

    describe('test method remove', () => {
        test('remove leave', () => {
            expect((() => {
                const bst = new BST();
                bst.init([2, 3, 1]);
                bst.remove(1);
                return bst.root;
            })()).toEqual({value: 2, left: null, right: {value: 3, left: null, right: null}});
        })
        test('remove node left child', () => {
            expect((() => {
                const bst = new BST();
                bst.init([3, 2, 1]);
                bst.remove(2);
                return bst.root;
            })()).toEqual({value: 3, left: {value: 1, left: null, right: null}, right: null});
        })
        test('remove node right child', () => {
            expect((() => {
                const bst = new BST();
                bst.init([5, 6, 7]);
                bst.remove(6);
                return bst.root;
            })()).toEqual({value: 5, left: null, right: {value: 7, left: null, right: null}});
        })
        test('remove node ', () => {
            expect((() => {
                const bst = new BST();
                bst.init([5, 8, 9, 6]);
                bst.remove(8);
                return bst.root;
            })()).toEqual({
                value: 5,
                left: null,
                right: {value: 9, left: {value: 6, left: null, right: null}, right: null}
            });
        })
        test('remove nothing ', () => {
            expect((() => {
                const bst = new BST();
                bst.init([5, 6, 4]);
                bst.remove(9);
                return bst.root;
            })()).toEqual({
                value: 5,
                left: {value: 4, left: null, right: null},
                right: {value: 6, left: null, right: null}
            });
        })
    })
    describe('test method revers', () => {
        test('revers node and 2 leaves', () => {
            expect((() => {
                const bst = new BST();
                bst.init([5, 6, 4]);
                return bst.revers();
            })()).toEqual({
                value: 5,
                left: {value: 6, left: null, right: null},
                right: {value: 4, left: null, right: null}
            });
        })
    });
    describe('test method search', () => {
        test('leaves', () => {
            expect((() => {
                const bst = new BST();
                bst.init([5, 6, 4, 7, 8, 9]);
                return bst.search(9);
            })()).toEqual({value: 9, left: null, right: null});
        })
        test('node', () => {
            expect((() => {
                const bst = new BST();
                bst.init([5, 6, 4, 3, 7, 8, 9]);
                return bst.search(4);
            })()).toEqual({value: 4, left: {value: 3, left: null, right: null}, right: null});
        })
        test('null', () => {
            expect((() => {
                const bst = new BST();
                return bst.search(4);
            })()).toEqual(null);
        })
    })
    describe('test method size', () => {
        test('6', () => {
            expect((() => {
                const bst = new BST();
                bst.init([5, 6, 4, 7, 8, 9]);
                return bst.size();
            })()).toEqual(6);
        })
        test('0', () => {
            expect((() => {
                const bst = new BST();
                bst.init([]);
                return bst.size();
            })()).toEqual(0);
        })
    })
    describe('test method width', () => {
        test('2', () => {
            expect((() => {
                const bst = new BST();
                bst.init([5, 6, 4, 7, 8, 9]);
                return bst.width();
            })()).toEqual(2);
        })
        test('4', () => {
            expect((() => {
                const bst = new BST();
                bst.init([5, 7, 3, 6, 8, 4, 2]);
                return bst.width();
            })()).toEqual(4);
        })
        test('0', () => {
            expect((() => {
                const bst = new BST();
                bst.init([]);
                return bst.width();
            })()).toEqual(0);
        })
    })
    describe('test method toString', () => {
        test('toString', () => {
            expect((() => {
                const bst = new BST();
                bst.init([3, 2, 4]);
                return bst.toString();
            })()).toEqual(
                ' 4\n' +
                '3\n' +
                ' 2\n');
        })
    })
    describe('test method toArray', () => {
        test('toArray 3 2 4', () => {
            expect((() => {
                const bst = new BST();
                bst.init([3, 2, 4]);
                return bst.toArray();
            })()).toEqual([3,2,4]);
        })
        test('toArray 8,3,11,6,2,9,13', () => {
            expect((() => {
                const bst = new BST();
                bst.init([8,3,11,6,2,9,13]);
                return bst.toArray();
            })()).toEqual([8,3,2,6,11,9,13]);
        })
    })

})
