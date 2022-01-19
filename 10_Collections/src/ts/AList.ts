import {IList} from "./interface";

export class AList implements IList {
    get size(): number {
        return this.sizeArray;
    }

    set size(value: number) {
        this.sizeArray = value;
        this.array.length = value;
    }

    private array: number[];
    private sizeArray: number;

    constructor()
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
            return;
        }
    }

    add(value: number): void {
        this.array[this.size] = value;
        this.size++;
    }

    clear(): void {
        this.size = 0;
        this.array.length = 0;
    }

    contains(value: number): boolean {
        for (let i = 0; i < this.size; i++) {
            if (this.array[i] === value)
                return true;
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
        for (let i = 0; i < Math.trunc(this.size / 4); i++) {
            [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
            j--;
        }
    }

    maxIndex(): number {
        if (this.size === 0) return 0;
        let max = this.array[0];
        let index = 0;
        for (let i = 0; i < this.size; i++) {
            if (max < this.array[i]) {
                max = this.array[i];
                index = i;
            }
        }
        return index;
    }

    maxValue(): number {
        if (this.size === 0) return 0;
        let max = this.array[0];
        for (let i = 0; i < this.size; i++) {
            if (max < this.array[i]) {
                max = this.array[i];
            }
        }
        return max;
    }

    minIndex(): number {
        if (this.size === 0) return 0;
        let min = this.array[0];
        let index = 0;
        for (let i = 0; i < this.size; i++) {
            if (min > this.array[i]) {
                min = this.array[i];
                index = i;
            }
        }
        return index;
    }

    minValue(): number {
        if (this.size === 0) return 0;
        let min = this.array[0];
        for (let i = 0; i < this.size; i++) {
            if (min > this.array[i]) {
                min = this.array[i];
            }
        }
        return min;
    }

    print(): number[] {
        return this.array
    }

    remove(value: number) {
        for (let i = 0; i < this.size; i++) {
            if (this.array[i] === value) {
                for (let j = i; j < this.size; j++) {
                    this.array[j] = this.array[j + 1];
                }
                this.size--;
            }
        }
        if (this.array[this.size - 1] === value) {
            this.size--;
        }
    }

    removeAll(items: number[]): void {
        for (let i = 0; i < items.length; i++) {
            if (this.contains(items[i])) {
                this.remove(items[i]);
            }
        }
    }

    retainAll(items: number[]): void {
        // @ts-ignore
        const itemsAList = new AList(items);
        for (let i = 0; i < this.size; i++) {
            if (!itemsAList.contains(this.get(i))) {
                this.remove(this.get(i));
                i--;
            }
        }
    }

    reverse(): void {
        let j = this.size - 1;
        for (let i = 0; i < Math.trunc(this.size / 2); i++) {
            [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
            j--;
        }
    }

    set(value: number, index: number): void {
        if (index < 0 || index > this.size) return;
        this.array[index] = value;
    }

    sort(): void {
    }

    toArray(): number[] {
        return this.array;
    }

    toString(): string {
        return `${this.array}`
    }

}

