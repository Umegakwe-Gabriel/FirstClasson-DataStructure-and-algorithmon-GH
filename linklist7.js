const { log } = require("console");

class Node {
    constructor (val){
        this.val = val;
        this.next = null;
    }
}

class Linklist7 {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(val){
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    remove(){
        if (!this.head) {
            return undefined;
        } else {
            let current = this.tail;
            let newTail = current;

            while (current.next) {
                this.tail = newTail;
                this.tail.next = null;
            }

            this.length--;
            return current;
        }
    }
}

let linkedList = new Linklist7();
console.log(linkedList.insert(39));
console.log(linkedList.insert(34));

console.log(linkedList.insert([4, 66, 7]));
console.log(linkedList.insert(79));
console.log(linkedList.insert(89));
console.log(linkedList.insert(39));
console.log("");
console.log(linkedList.length);
linkedList.remove();
console.log("");
console.log(linkedList.length);
