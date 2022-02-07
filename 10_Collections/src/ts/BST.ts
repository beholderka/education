import { ITree, INode } from './interface';
import { Node } from './NodeTree';

export class BST implements ITree {
  public root: INode;

  protected sizeTree: number;

  constructor() {
    this.root = null;
    this.sizeTree = 0;
  }

  clear(): void {
    this.root = null;
    this.sizeTree = 0;
  }

  height(node: INode = this.root): number {
    if (node === null) return 0;
    const lHeight = this.height(node.left);
    const rHeight = this.height(node.right);

    return lHeight > rHeight ? lHeight + 1 : rHeight + 1;
  }

  init(array: number[]): void {
    for (let i = 0; i < array.length; i += 1) {
      this.insert(array[i]);
    }
  }

  insert(value: number): void {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    this.sizeTree += 1;
  }

  private insertNode(node: INode, newNode: INode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (node.right === null) {
      node.right = newNode;
    } else {
      this.insertNode(node.right, newNode);
    }
  }

  leaves(): number {
    let countLeaves = 0;
    this.postOrderTraversal(this.root, (node: INode) => {
      if (node.left === null && node.right === null) {
        countLeaves += 1;
      }
    });
    return countLeaves;
  }

  maxNode(maxNode: INode = this.root): INode {
    if (maxNode === null) return null;
    if (maxNode.right === null) return maxNode;
    return this.maxNode(maxNode.right);
  }

  minNode(minNode: INode = this.root): INode {
    if (minNode === null) return null;
    if (minNode.left === null) return minNode;
    return this.minNode(minNode.left);
  }

  nodes(): number {
    let countNodes = 0;
    this.postOrderTraversal(this.root, (node: INode) => {
      if (node.left !== null || node.right !== null) {
        countNodes += 1;
      }
    });
    return countNodes;
  }

  print(): void {
    console.log('in-order');
    this.inOrderTraversal(this.root, (node: INode) => {
      console.log(node.value);
    });
    console.log('pre-order');
    this.preOrderTraversal(this.root, (node: INode) => {
      console.log(node.value);
    });
    console.log('post-order');
    this.postOrderTraversal(this.root, (node: INode) => {
      console.log(node.value);
    });
  }

  inOrderTraversal(node: INode, callBack): void {
    if (node !== null) {
      this.inOrderTraversal(node.left, callBack);
      callBack(node);
      this.inOrderTraversal(node.right, callBack);
    }
  }

  preOrderTraversal(node: INode, callBack): void {
    if (node !== null) {
      callBack(node);
      this.preOrderTraversal(node.left, callBack);
      this.preOrderTraversal(node.right, callBack);
    }
  }

  postOrderTraversal(node: INode, callBack): void {
    if (node !== null) {
      this.postOrderTraversal(node.left, callBack);
      this.postOrderTraversal(node.right, callBack);
      callBack(node);
    }
  }

  remove(value: number): void {
    this.root = this.removeNode(this.root, value);
  }

  private removeNode(node: INode, value: number): INode {
    let currentNode = node;
    if (currentNode === null) {
      return null;
    }
    if (value < currentNode.value) {
      currentNode.left = this.removeNode(currentNode.left, value);
      return currentNode;
    }
    if (value > currentNode.value) {
      currentNode.right = this.removeNode(currentNode.right, value);
      return currentNode;
    }

    if (currentNode.left === null && currentNode.right === null) {
      currentNode = null;
      return currentNode;
    }
    if (currentNode.left === null) {
      currentNode = currentNode.right;
      return currentNode;
    }
    if (currentNode.right === null) {
      currentNode = currentNode.left;
      return currentNode;
    }

    const newNode = this.minNode(currentNode.right);
    currentNode.value = newNode.value;
    currentNode.right = this.removeNode(currentNode.right, newNode.value);
    return currentNode;
  }

  revers(node: INode = this.root): INode {
    if (node) {
      [node.left, node.right] = [node.right, node.left];
      this.revers(node.left);
      this.revers(node.right);
    }
    return node;
  }

  search(value: number, node: INode = this.root): INode {
    if (node === null) return null;
    if (node.value < value) {
      return this.search(value, node.right);
    }
    if (node.value > value) {
      return this.search(value, node.left);
    }
    return node;
  }

  size(): number {
    return this.sizeTree;
  }

  toArray(): number[] {
    const resultArray = [];
    this.preOrderTraversal(this.root, (node: INode) => {
      resultArray[resultArray.length] = node.value;
    });
    return resultArray;
  }

  width(): number {
    let maxWidth = 0;
    const node = this.root;
    const h = this.height(node);

    for (let i = 1; i <= h; i += 1) {
      const width = this.getWidth(node, i);
      if (width > maxWidth) maxWidth = width;
    }

    return maxWidth;
  }

  private getWidth(node, level): number {
    if (node == null) return 0;

    if (level === 1) {
      return 1;
    }
    return this.getWidth(node.left, level - 1) + this.getWidth(node.right, level - 1);
  }

  toString(node: INode = this.root, level = 0, result = '') {
    if (node !== null) {
      result += this.toString(node.right, level + 1);
      result = result.concat(''.padEnd(level, ' '), String(node.value), '\n');
      result += this.toString(node.left, level + 1);
    }
    return result;
  }
}
