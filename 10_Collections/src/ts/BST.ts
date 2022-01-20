import {ITree} from './interface'
import {Node} from './NodeTree'

export class BST implements ITree {
    public root: Node;
    protected sizeTree: number;

    constructor() {
        this.root = null;
        this.sizeTree = 0;
    }

    clear(): void {
        this.root = null;
        this.sizeTree = 0;
    }

    height(node: Node = this.root): number {
        if (node === null) return 0;
        const lHeight = this.height(node.left);
        const rHeight = this.height(node.right);

        return (lHeight > rHeight) ? (lHeight + 1)
            : (rHeight + 1);

    }

    init(array: number[]): void {
        for (let i = 0; i < array.length; i++) {
            this.insert(array[i]);
        }
    }

    insert(value: number): void {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
        this.sizeTree++;
    }

    private insertNode(node: Node, newNode: Node) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    leaves(): number {
        let countLeaves = 0;
        this.postOrderTraversal(this.root, (node: Node) => {
            if (node.left === null && node.right === null) {
                countLeaves++;
            }
        })
        return countLeaves;
    }

    maxNode(maxNode: Node = this.root): Node {
        if (maxNode === null) return null;
        if (maxNode.right === null) return maxNode;
        return this.maxNode(maxNode.right);
    }

    minNode(minNode: Node = this.root): Node {
        if (minNode === null) return null;
        if (minNode.left === null) return minNode;
        return this.minNode(minNode.left);
    }

    nodes(): number {
        let countNodes = 0;
        this.postOrderTraversal(this.root, (node: Node) => {
            if (node.left !== null || node.right !== null) {
                countNodes++;
            }
        })
        return countNodes;
    }

    print(): void {
        console.log('in-order')
        this.inOrderTraversal(this.root, (node: Node) => {
            console.log(node.value);
        });
        console.log('pre-order')
        this.preOrderTraversal(this.root, (node: Node) => {
            console.log(node.value);
        });
        console.log('post-order')
        this.postOrderTraversal(this.root, (node: Node) => {
            console.log(node.value);
        });
    }

    inOrderTraversal(node: Node, callBack): void {
        if (node !== null) {
            this.inOrderTraversal(node.left, callBack);
            callBack(node);
            this.inOrderTraversal(node.right, callBack);
        }
    }

    preOrderTraversal(node: Node, callBack): void {
        if (node !== null) {
            callBack(node);
            this.preOrderTraversal(node.left, callBack);
            this.preOrderTraversal(node.right, callBack);
        }
    }

    postOrderTraversal(node: Node, callBack): void {
        if (node !== null) {
            this.postOrderTraversal(node.left, callBack);
            this.postOrderTraversal(node.right, callBack);
            callBack(node);
        }
    }

    remove(value: number): void {
        this.root = this.removeNode(this.root, value);
    }

    private removeNode(node:Node, value:number) {
        if (node === null) {
            return null;
        } else if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;

        } else if (value > node.value) {
            node.right = this.removeNode(node.right, value);
            return node;

        } else {

            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            } else if(node.right === null) {
                node = node.left;
                return node;
            }

            const newNode = this.minNode(node.right);
            node.value = newNode.value;
            node.right = this.removeNode(node.right, newNode.value);
            return node;
        }
    }

    revers(node:Node=this.root): Node {
        if (node) {
            [node.left,node.right] =[node.right,node.left];
            this.revers(node.left);
            this.revers(node.right);
        }
        return node;
    }

    search(value: number, node: Node = this.root): Node {
        if (node === null) return null;
        if (node.value < value) {
            return this.search(value, node.right);
        } else if (node.value > value) {
            return this.search(value, node.left);
        } else {
            return node;

        }
    }

    size(): number {
        return this.sizeTree;
    }

    toArray(): number[] {
        const resultArray=[];
        this.preOrderTraversal(this.root,(node:Node)=>{
            resultArray[resultArray.length]=node.value;
        })
        return resultArray;
    }

    width(): number {
        let maxWidth = 0;
        const node = this.root;
        const h = this.height(node);

        for (let i = 1; i <= h; i++) {
           const width = this.getWidth(node, i);
            if (width > maxWidth)
                maxWidth = width;
        }

        return maxWidth;
    }

    private getWidth(node, level) {
        if (node == null)
            return 0;

        if (level == 1) {
            return 1;
        } else if (level > 1) {
            return this.getWidth(node.left, level - 1)
                + this.getWidth(node.right, level - 1);
        }
    }

    toString(node: Node = this.root, level: number = 0, result = '') {
        if (node !== null) {
            result += this.toString(node.right, level + 1);
            result = result.concat(''.padEnd(level, ' '), String(node.value), '\n');
            result += this.toString(node.left, level + 1);
        }
        return result;
    }

}

// const bst = new BST();
// bst.init([5, 3, 7, 2, 1, 8, 0])
// bst.print();
// console.log(bst.nodes())
// console.log(bst.leaves())
// console.log(bst.size())
// console.log('__________')
// console.log(bst.toString())
// console.log(bst.revers());

