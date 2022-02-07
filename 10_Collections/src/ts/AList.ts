import { IList } from './interface';

export class AList implements IList {
  get size(): number {
    return this.sizeArray;
  }

  set size(value: number) {
    this.sizeArray = value;
    this.array.length = value;
  }

  private readonly array: number[];

  private sizeArray: number;

  constructor();

  constructor(value?: any) {
    this.array = [];
    this.size = 0;
    if (typeof value === 'number') {
      this.size = value;
      return;
    }
    if (Array.isArray(value)) {
      this.array = value;
      this.size = value.length;
    }
  }

  add(value: number): void {
    this.array[this.size] = value;
    this.size += 1;
  }

  clear(): void {
    this.size = 0;
    this.array.length = 0;
  }

  contains(value: number): boolean {
    for (let i = 0; i < this.size; i += 1) {
      if (this.array[i] === value) {
        return true;
      }
    }
    return false;
  }

  get(index: number): number {
    if (index < 0 || index > this.size) return undefined;
    return this.array[index];
  }

  getSize(): number {
    return this.size;
  }

  halfReverse(): void {
    let j = Math.trunc(this.size / 2) - 1;
    for (let i = 0; i < Math.trunc(this.size / 4); i += 1) {
      [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
      j -= 1;
    }
  }

  maxIndex(): number {
    if (this.size === 0) return -1;
    let max = this.array[0];
    let index = 0;
    for (let i = 0; i < this.size; i += 1) {
      if (max < this.array[i]) {
        max = this.array[i];
        index = i;
      }
    }
    return index;
  }

  maxValue(): number {
    if (this.size === 0) return undefined;
    let max = this.array[0];
    for (let i = 0; i < this.size; i += 1) {
      if (max < this.array[i]) {
        max = this.array[i];
      }
    }
    return max;
  }

  minIndex(): number {
    if (this.size === 0) return -1;
    let min = this.array[0];
    let index = 0;
    for (let i = 0; i < this.size; i += 1) {
      if (min > this.array[i]) {
        min = this.array[i];
        index = i;
      }
    }
    return index;
  }

  minValue(): number {
    if (this.size === 0) return undefined;
    let min = this.array[0];
    for (let i = 0; i < this.size; i += 1) {
      if (min > this.array[i]) {
        min = this.array[i];
      }
    }
    return min;
  }

  print(): void {
    for (let i = 0; i < this.size; i += 1) {
      console.log(this.array[i]);
    }
  }

  remove(value: number) {
    for (let i = 0; i < this.size; i += 1) {
      if (this.array[i] === value) {
        for (let j = i; j < this.size; j += 1) {
          this.array[j] = this.array[j + 1];
        }
        this.size -= 1;
      }
    }
    if (this.array[this.size - 1] === value) {
      this.size -= 1;
    }
  }

  removeAll(items: number[]): void {
    for (let i = 0; i < items.length; i += 1) {
      if (this.contains(items[i])) {
        this.remove(items[i]);
      }
    }
  }

  retainAll(items: number[]): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const itemsAList = new AList(items);
    for (let i = 0; i < this.size; i += 1) {
      if (!itemsAList.contains(this.get(i))) {
        this.remove(this.get(i));
        i -= 1;
      }
    }
  }

  reverse(): void {
    let j = this.size - 1;
    for (let i = 0; i < Math.trunc(this.size / 2); i += 1) {
      [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
      j -= 1;
    }
  }

  set(value: number, index: number): void {
    if (index < 0 || index > this.size) return;
    this.array[index] = value;
  }

  private static partition(arr, minIndex, maxIndex) {
    const array = arr;
    let pivot = minIndex - 1;
    for (let i = minIndex; i < maxIndex; i += 1) {
      if (array[i] < array[maxIndex]) {
        pivot += 1;
        [array[pivot], array[i]] = [array[i], array[pivot]];
      }
    }
    pivot += 1;
    [array[pivot], array[maxIndex]] = [array[maxIndex], array[pivot]];
    return pivot;
  }

  sort(array: number[] = this.array, minIndex = 0, maxIndex: number = this.size - 1): number[] {
    if (minIndex >= maxIndex) {
      return array;
    }

    const pivotIndex = AList.partition(array, minIndex, maxIndex);
    this.sort(array, minIndex, pivotIndex - 1);
    this.sort(array, pivotIndex + 1, maxIndex);

    return array;
  }

  toArray(): number[] {
    return this.array;
  }

  toString(): string {
    return `${this.array}`;
  }
}
