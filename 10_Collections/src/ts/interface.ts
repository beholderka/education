export interface IList {
  clear: () => void;
  add: (value: number) => void;
  getSize: () => number;
  set: (value: number, index: number) => void;
  get: (index: number) => number;
  remove: (value: number) => void;
  toArray: () => number[];
  toString: () => string;
  contains: (value: number) => boolean;
  minValue: () => number;
  maxValue: () => number;
  minIndex: () => number;
  maxIndex: () => number;
  reverse: () => void;
  halfReverse: () => void;
  retainAll: (items: number[]) => void;
  removeAll: (items: number[]) => void;
  sort: () => number[];
  print: () => void;
}

export interface ITree {
  init: (array: number[]) => void;
  clear: () => void;
  size: () => number;
  insert: (value: number) => void;
  print: () => void;
  toArray: () => number[];
  search: (value: number) => INode;
  width: () => number;
  height: () => number;
  nodes: () => number;
  leaves: () => number;
  revers: () => INode;
  minNode: () => INode;
  maxNode: () => INode;
  remove: (value: number) => void;
}

export interface INode {
  value: number;
  left: INode;
  right: INode;
}
