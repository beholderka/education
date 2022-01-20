import {IList} from './interface'

class Node {
    public value: number;
    public next: Node;

    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

export class LList implements IList {
    private head: Node;
    private tail: Node;
    private size: number;

    constructor()
    constructor(value?: any) {
        this.head = null;
        this.tail = null;
        this.size = 0;
        if (typeof value === 'number') {
            for (let i = 0; i < value; i++) {
                this.add(undefined);
            }
            return;
        }
        if (Array.isArray(value)) {
            for (let i = 0; i < value.length; i++) {
                this.add(value[i]);
            }
            return;
        }
    }

    isEmpty(): boolean {
        return this.head === null;
    }

    add(value: number): void {
        const node = new Node(value);
        this.size++;
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }

    clear(): void {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    contains(value: number): boolean {
        if (this.isEmpty()) return false;
        let node = this.head;
        while (node) {
            if (node.value === value) {
                return true;
            }
            node = node.next;
        }
        return false;
    }

    get(index: number): number {
        if (this.isEmpty() || this.size < index) return undefined;
        let node = this.head;
        let currentIndex = 0
        while (node) {
            if (currentIndex === index) {
                return node.value;
            }
            node = node.next;
            currentIndex++;
        }
    }

    getSize(): number {
        return this.size;
    }

    halfReverse(): void {
        let j = Math.trunc(this.size / 2) - 1;
        for (let i = 0; i < Math.trunc(this.size / 4); i++) {
            const temp = this.get(i);
            this.set(this.get(j), i);
            this.set(temp, j);
            j--;
        }
    }

    maxIndex(): number {
        if (this.isEmpty()) return -1;
        let node = this.head;
        let currentIndex = 0,
            maxIndex = 0,
            maxValue = node.value;
        while (node) {
            if (maxValue < node.value) {
                maxIndex = currentIndex;
                maxValue = node.value;
            }
            node = node.next;
            currentIndex++;
        }
        return maxIndex;
    }

    maxValue(): number {
        if (this.isEmpty()) return undefined;
        let node = this.head;
        let currentIndex = 0,
            maxValue = node.value;
        while (node) {
            if (maxValue < node.value) {
                maxValue = node.value;
            }
            node = node.next;
            currentIndex++;
        }
        return maxValue;
    }

    minIndex(): number {
        if (this.isEmpty()) return -1;
        let node = this.head;
        let currentIndex = 0,
            minIndex = 0,
            minValue = node.value;
        while (node) {
            if (minValue > node.value) {
                minIndex = currentIndex;
                minValue = node.value;
            }
            node = node.next;
            currentIndex++;
        }
        return minIndex;
    }

    minValue(): number {
        if (this.isEmpty()) return undefined;
        let node = this.head;
        let currentIndex = 0,
            minValue = node.value;
        while (node) {
            if (minValue > node.value) {
                minValue = node.value;
            }
            node = node.next;
            currentIndex++;
        }
        return minValue
    }

    print(): void {
        if (this.isEmpty()) return;
        let node = this.head;
        let result = '';
        while (node) {
            result.concat(node.value.toString(), '->');
            node = node.next;
        }
        console.log(result)
    }

    private  removeHead() {
        const node = this.head;
        this.head = node.next;
        this.size--;
    }
    private  removeTail() {
        let node = this.head;
        while (node.next.next) node=node.next;
        node.next=null;
        this.tail=node;
        this.size--;
    }

    remove(value: number): void {
        if (this.isEmpty()) return;
        if (this.head.value===value) {
            this.removeHead();
            return;
        }
        if (this.tail.value===value) {
            this.removeTail();
            return;
        }
        let node = this.head;
        let nextNode=this.head.next;
        while (nextNode && nextNode.value!==value){
            node=node.next;
            nextNode=nextNode.next;
        }
        if (!nextNode) return;
        node.next=nextNode.next;
        this.size--;
    }

    removeAll(items: number[]): void {
        for (let i = 0; i < items.length; i++) {
            while (this.contains(items[i])) {
                this.remove(items[i]);
            }
        }
    }

    retainAll(items: number[]): void {
        // @ts-ignore
        const itemsAList = new LList(items);
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
            let temp = this.get(i);
            this.set(this.get(j), i);
            this.set(temp, j);
            j--;
        }
    }

    set(value: number, index: number): void {
        if (this.isEmpty() || index > this.size) return;
        let node = this.head;
        let currentIndex = 0
        while (node) {
            if (currentIndex === index) {
                node.value = value;
            }
            currentIndex++;
            node = node.next;
        }
    }

    private static partition(list: LList, minIndex, maxIndex) {
        let pivot = minIndex - 1;
        for (let i = minIndex; i < maxIndex; i++) {
            if (list.get(i) < list.get(maxIndex)) {
                pivot++;
                const temp = list.get(pivot);
                list.set(list.get(i), pivot);
                list.set(temp, i);
            }
        }
        pivot++;
        const temp = list.get(pivot);
        list.set(list.get(maxIndex), pivot);
        list.set(temp, maxIndex);
        return pivot;
    }

    sort(list: LList = this, minIndex: number = 0, maxIndex: number = this.size - 1): number[] {
        if (minIndex >= maxIndex) {
            return list.toArray();
        }

        const pivotIndex = LList.partition(list, minIndex, maxIndex);
        this.sort(list, minIndex, pivotIndex - 1);
        this.sort(list, pivotIndex + 1, maxIndex);

        return list.toArray();
    }

    toArray(): number[] {
        if (this.isEmpty()) return [];
        let node = this.head;
        const arrayResult = []
        while (node) {
            arrayResult[arrayResult.length] = node.value;
            node = node.next;
        }
        return arrayResult;
    }
    toString():string{
        if (this.isEmpty()) return '';
        let node = this.head;
        let result = '';
        while (node) {
            result=result+node.value+'->';
            node = node.next;
        }
        return result;
    }
}