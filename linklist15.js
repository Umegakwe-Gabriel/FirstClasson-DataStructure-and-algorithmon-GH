class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Linklist15 {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insert (val){
        let node = new Node (val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    remove (){
        if (!this.head) {
            return undefined;
        } else {
            let current = this.tail;
            let newTail = current;

            while (current) {
                this.tail = newTail;
                this.tail.next = null;
            }

            this.length--;
            return current;
        }
    }
}

let linkedList = new Linklist15();
console.log(linkedList.insert(38));
console.log(linkedList.insert(38));

console.log(linkedList.insert(38));
console.log(linkedList.insert(38));
console.log(linkedList.insert(38));
console.log(linkedList.insert(38));
console.log("");
console.log(linkedList.length);
linkedList.remove();
console.log("");
console.log();