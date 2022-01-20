export class Node {
    public value:number;
    public left:Node;
    public right:Node;
    constructor(value) {
        this.value=value;
        this.left=null;
        this.right=null;
    }
}