const {AVL} = require('../AVL')


describe('AVL', () => {

    test('create new instance', () => {
        expect(new AVL().root).toEqual(null);
    })

    describe('test method init', () => {
        test('', () => {
            const avl = new AVL();
            avl.init([2, 1, 3]);
            expect(avl.root).toEqual({
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
            const avl = new AVL();
            avl.insert(4);
            expect(avl.root).toEqual({value: 4, left: null, right: null});
        })
        test('insert root left', () => {
            const avl = new AVL();
            avl.insert(4);
            avl.insert(3);
            expect(avl.root).toEqual({value: 4, left: {value: 3, left: null, right: null}, right: null});
        })
        test('insert root right', () => {
            const avl = new AVL();
            avl.insert(4);
            avl.insert(5);
            expect(avl.root).toEqual({value: 4, left: null, right: {value: 5, left: null, right: null}});
        })
    })

    describe('test method clear', () => {
        test('size 2 -> 0', () => {
            const avl = new AVL();
            avl.insert(4);
            avl.insert(5);
            expect(avl.clear()).toBeUndefined();
        })
    })

    describe('test method leaves', () => {
        test('root null -> 0 leaves', () => {
            expect(new AVL().leaves()).toEqual(0);
        })
        test('1 leaves', () => {
            const avl = new AVL();
            avl.insert(4);
            avl.insert(2);
            expect(avl.leaves()).toEqual(1);
        })
        test('2 leaves', () => {
            const avl = new AVL();
            avl.insert(4);
            avl.insert(2);
            avl.insert(5);
            expect(avl.leaves()).toEqual(2);
        })
    })
    describe('test method nodes', () => {
        test('root null -> 0 nodes', () => {
            expect(new AVL().nodes()).toEqual(0);
        })
        test('1 nodes', () => {
            const avl = new AVL();
            avl.insert(4);
            avl.insert(2);
            expect(avl.nodes()).toEqual(1);
        })
        test('2 nodes', () => {
            const avl = new AVL();
            avl.insert(4);
            avl.insert(2);
            avl.insert(1);
            expect(avl.nodes()).toEqual(1);
        })
    })
    describe('test method print', () => {
        test('print', () => {
            const avl = new AVL();
            avl.init([2, 3, 1]);
            expect(avl.print()).toBeUndefined();
        });
    })

    describe('test method height', () => {
        test('2', () => {
            expect((() => {
                const avl = new AVL();
                avl.init([2, 3, 1]);
                return avl.height();
            })()).toEqual(2);
        })
        test('4', () => {
            expect((() => {
                const avl = new AVL();
                avl.init([2, 5, 3, 4]);
                return avl.height();
            })()).toEqual(3);
        })
    })
    describe('test method maxNode', () => {
        test('node', () => {
            expect((() => {
                const avl = new AVL();
                avl.init([2, 5, 3, 4]);
                return avl.maxNode();
            })()).toEqual({
                value: 5,
                left: {value: 4, left: null, right: null},
                right: null
            });
        })
        test('leave', () => {
            expect((() => {
                const avl = new AVL();
                avl.init([2, 3, 4, 5]);
                return avl.maxNode();
            })()).toEqual({value: 5, left: null, right: null});
        })
        test('null', () => {
            expect((() => {
                const avl = new AVL();
                return avl.maxNode();
            })()).toEqual(null);
        })
    })
    describe('test method minNode', () => {
        test('node', () => {
            expect((() => {
                const avl = new AVL();
                avl.init([3, 1, 2, 5, 4]);
                return avl.minNode();
            })()).toEqual({value: 1, left: null, right: null});
        })
        test('leave', () => {
            expect((() => {
                const avl = new AVL();
                avl.init([2, 3, 4, 5, 1]);
                return avl.minNode();
            })()).toEqual({value: 1, left: null, right: null});
        })
        test('null', () => {
            expect((() => {
                const avl = new AVL();
                return avl.minNode();
            })()).toEqual(null);
        })
    })

    describe('test method remove', () => {
        test('remove leave', () => {
            expect((() => {
                const avl = new AVL();
                avl.init([2, 3, 1]);
                avl.remove(1);
                return avl.root;
            })()).toEqual({value: 2, left: null, right: {value: 3, left: null, right: null}});
        })
        test('remove node left child', () => {
            expect((() => {
                const avl = new AVL();
                avl.init([3, 2, 1]);
                avl.remove(2);
                return avl.root;
            })()).toEqual({value: 3, left: {value: 1, left: null, right: null}, right: null});
        })
        test('remove node right child', () => {
            expect((() => {
                const avl = new AVL();
                avl.init([5, 6, 7]);
                avl.remove(6);
                return avl.root;
            })()).toEqual({value: 7, left: {value: 5, left: null, right: null}, right: null});
        })
        test('remove node ', () => {
            expect((() => {
                const avl = new AVL();
                avl.init([5, 8, 9, 6]);
                avl.remove(8);
                return avl.root;
            })()).toEqual({
                value: 6,
                left: {value: 5, left: null, right: null},
                right: {value: 9, left: null, right: null}
            });
        })
        test('remove nothing ', () => {
            expect((() => {
                const avl = new AVL();
                avl.init([5, 6, 4]);
                avl.remove(9);
                return avl.root;
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
                const avl = new AVL();
                avl.init([5, 6, 4]);
                return avl.revers();
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
                const avl = new AVL();
                avl.init([5, 6, 4, 7, 8, 9]);
                return avl.search(9);
            })()).toEqual({value: 9, left: null, right: null});
        })
        test('node', () => {
            expect((() => {
                const avl = new AVL();
                avl.init([5, 6, 4, 3, 7, 8, 9]);
                return avl.search(4);
            })()).toEqual({value: 4, left: {value: 3, left: null, right: null}, right: null});
        })
        test('null', () => {
            expect((() => {
                const avl = new AVL();
                return avl.search(4);
            })()).toEqual(null);
        })
    })
    describe('test method size', () => {
        test('6', () => {
            expect((() => {
                const avl = new AVL();
                avl.init([5, 6, 4, 7, 8, 9]);
                return avl.size();
            })()).toEqual(6);
        })
        test('0', () => {
            expect((() => {
                const avl = new AVL();
                avl.init([]);
                return avl.size();
            })()).toEqual(0);
        })
    })
    describe('test method width', () => {
        test('2', () => {
            expect((() => {
                const avl = new AVL();
                avl.init([5, 6, 4, 7, 8, 9]);
                return avl.width();
            })()).toEqual(3);
        })
        test('4', () => {
            expect((() => {
                const avl = new AVL();
                avl.init([5, 7, 3, 6, 8, 4, 2]);
                return avl.width();
            })()).toEqual(4);
        })
        test('0', () => {
            expect((() => {
                const avl = new AVL();
                avl.init([]);
                return avl.width();
            })()).toEqual(0);
        })
    })
    describe('test method toString', () => {
        test('toString', () => {
            expect((() => {
                const avl = new AVL();
                avl.init([3, 2, 4]);
                return avl.toString();
            })()).toEqual(
                ' 4\n' +
                '3\n' +
                ' 2\n');
        })
    })
    describe('test method toArray', () => {
        test('toArray 3 2 4', () => {
            expect((() => {
                const avl = new AVL();
                avl.init([3, 2, 4]);
                return avl.toArray();
            })()).toEqual([3,2,4]);
        })
        test('toArray 8,3,11,6,2,9,13', () => {
            expect((() => {
                const avl = new AVL();
                avl.init([8,3,11,6,2,9,13]);
                return avl.toArray();
            })()).toEqual([8,3,2,6,11,9,13]);
        })
    })

})
