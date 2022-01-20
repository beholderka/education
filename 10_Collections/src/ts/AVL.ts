import {BST} from './BST'
import {Node} from './NodeTree'

export class AVL extends BST {
    constructor() {
        super();
    }

    private balanceFactor(node: Node): number {
        let balanceFactor = 0;
        if (node.left) {
            balanceFactor += this.height(node.left);
        }
        if (node.right) {
            balanceFactor -= this.height(node.right);
        }
        return balanceFactor;
    }

    insert(value: number): void {
        super.insert(value);
        this.root = this.balanceNode(this.root);
    }

    remove(value: number) {
        super.remove(value);
        this.root = this.balanceNode(this.root);
    }

    private balanceNode(node: Node): Node {
        if (node.left) {
            node.left = this.balanceNode(node.left);
        }
        if (node.right) {
            node.right = this.balanceNode(node.right);
        }
        const bf = this.balanceFactor(node);
        if (bf >= 2) {
            if (this.balanceFactor(node.left) < 0) {
                node = this.leftRightRotate(node);    //LR
            } else {
                node = this.rightRotate(node);        //LL
            }
        } else if (bf <= -2) {
            if (this.balanceFactor(node.right) > 0) {
                node = this.rightLeftRotate(node);     //RL
            } else {
                node = this.leftRotate(node);          //RR
            }
        }
        return node;
    }

//тут я плакала
    /*
    левое вращение
    currentNodeLeft=currentNode.left;
    currentNode.left=currentNode.left.right;
    currentNodeLeft.right={currentNode.left,currentNode.right}
    х             х
     а          а
      1           1
    */
    private rightRotate(node: Node): Node {
        const currentNode = node;
        const currentNodeLeft = currentNode.left;
        [currentNode.left, currentNodeLeft.right] = [currentNodeLeft.right, currentNode]
        return currentNodeLeft;
    }

    /*
    правое вращение
        2
       1
      а
     х б
      0
      currentNodeRight
        2
       1
      а
      currentNode
       б
      х
       0
     currentNodeRight.left=currentNode
     currentNodeRight
        2
       1
      а
        б
       х
        0
    * */
    private leftRotate(node: Node): Node {
        const currentNode = node;
        const currentNodeRight = currentNode.right;
        [currentNode.right, currentNodeRight.left] = [currentNodeRight.left, currentNode];
        return currentNodeRight;
    }

    private leftRightRotate(node: Node): Node {
        const currentNode = node;
        const currentNodeLeft = currentNode.left;
        const currentNodeLeftRight = currentNodeLeft.right;
        [currentNode.left,currentNodeLeft.right] = [currentNodeLeftRight.right, currentNodeLeftRight.left];
        [currentNodeLeftRight.left,currentNodeLeftRight.right]=[currentNodeLeft,currentNode];
        return currentNodeLeftRight;
    }

    /*
    разбаланс левого потомка правой ветки
    * */
    private rightLeftRotate(node: Node): Node {
        const currentNode = node;
        const currentNodeRight = currentNode.right;
        const currentNodeRightLeft = currentNodeRight.left;
        [currentNode.right,currentNodeRight.left]=[currentNodeRightLeft.left,currentNodeRightLeft.right];
        [currentNodeRightLeft.left,currentNodeRightLeft.right]=[currentNode,currentNodeRight];
        return currentNodeRightLeft;
    }


}