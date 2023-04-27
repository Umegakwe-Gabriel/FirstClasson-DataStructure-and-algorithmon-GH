class Node6 {
    constructor (val){
        this.val = val;
        this,next = null;
    }
}

class Linklist6 {
    constructor (){
        this.head = null;
        this.tail = null;
        this.length= 0;
    }

    insert (){
        let node = new Node6 (val)
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

let linkedList = new Linklist6();
console.log(linkedList.insert(39));
console.log(linkedList.insert(34));

console.log(linkedList.insert([39, 2, 4, 6]));
console.log(linkedList.insert(59));
console.log(linkedList.insert({name: "tooboy"}));
console.log(linkedList.insert(19));
console.log("");
console.log(linkedList.length);
linkedList.remove()
console.log("");
console.log(linkedList.length);