class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Linklist20 {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insert (val){
        let node = new Node (val)
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

            while (current.next) {
                this.tail = newTail;
                this.tail.next = null;
            }

        this.length--;
        return current;
        }
    }
}

let linklist = new Linklist20();
console.log(linklist.insert(40));
console.log(linklist.insert(20));

console.log(linklist.insert([40, 23, 34, 45]));
console.log(linklist.insert(80));
console.log(linklist.insert({fight: "good fight"}));
console.log(linklist.insert(4));
console.log("");
console.log(linklist.length);
linklist.remove();
console.log("");
console.log(linklist.length);
console.log(linklist.insert(550));