import { BST } from './BST';
import { INode } from './interface';

export class AVL extends BST {
  private balanceFactor(node: INode): number {
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

  private balanceNode(node: INode): INode {
    let currentNode = node;
    if (currentNode.left) {
      currentNode.left = this.balanceNode(currentNode.left);
    }
    if (currentNode.right) {
      currentNode.right = this.balanceNode(currentNode.right);
    }
    const bf = this.balanceFactor(currentNode);
    if (bf >= 2) {
      if (this.balanceFactor(currentNode.left) < 0) {
        currentNode = this.leftRightRotate(currentNode);
      } else {
        currentNode = this.rightRotate(currentNode);
      }
    } else if (bf <= -2) {
      if (this.balanceFactor(currentNode.right) > 0) {
        currentNode = this.rightLeftRotate(currentNode);
      } else {
        currentNode = this.leftRotate(currentNode);
      }
    }
    return currentNode;
  }

  // тут я плакала
  /*
  левое вращение
  currentNodeLeft=currentNode.left;
  currentNode.left=currentNode.left.right;
  currentNodeLeft.right={currentNode.left,currentNode.right}
  х             х
   а          а
    1           1
  */
  // eslint-disable-next-line class-methods-use-this
  private rightRotate(node: INode): INode {
    const currentNode = node;
    const currentNodeLeft = currentNode.left;
    [currentNode.left, currentNodeLeft.right] = [currentNodeLeft.right, currentNode];
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
  // eslint-disable-next-line class-methods-use-this
  private leftRotate(node: INode): INode {
    const currentNode = node;
    const currentNodeRight = currentNode.right;
    [currentNode.right, currentNodeRight.left] = [currentNodeRight.left, currentNode];
    return currentNodeRight;
  }

  // eslint-disable-next-line class-methods-use-this
  private leftRightRotate(node: INode): INode {
    const currentNode = node;
    const currentNodeLeft = currentNode.left;
    const currentNodeLeftRight = currentNodeLeft.right;
    [currentNode.left, currentNodeLeft.right] = [
      currentNodeLeftRight.right,
      currentNodeLeftRight.left,
    ];
    [currentNodeLeftRight.left, currentNodeLeftRight.right] = [currentNodeLeft, currentNode];
    return currentNodeLeftRight;
  }

  /*
  разбаланс левого потомка правой ветки
  * */
  // eslint-disable-next-line class-methods-use-this
  private rightLeftRotate(node: INode): INode {
    const currentNode = node;
    const currentNodeRight = currentNode.right;
    const currentNodeRightLeft = currentNodeRight.left;
    [currentNode.right, currentNodeRight.left] = [
      currentNodeRightLeft.left,
      currentNodeRightLeft.right,
    ];
    [currentNodeRightLeft.left, currentNodeRightLeft.right] = [currentNode, currentNodeRight];
    return currentNodeRightLeft;
  }
}
