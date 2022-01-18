export interface IList {
    clear: () => void
    add: (value: number) => void
    getSize: () => number
    set: (value: number, index: number) => void
    get: (index: number) => number
    remove: (value: number) => void
    toArray: () => number[]
    toString: () => string
    contains: (value: number) => boolean
    minValue: () => number
    maxValue: () => number
    minIndex: () => number
    maxIndex: () => number
    reverse: () => void
    halfReverse: () => void
    retainAll: (items: number[]) => void
    removeAll: (items: number[]) => void
    sort: () => void
    print: () => number[]
}