class Node {
    constructor (val){
        this.value = val;
        this.next = null
    }
}

class Linklist9 {
    constructor (){
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
            return undefined
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
let linkList = new Linklist9();
console.log(linkList.insert(39));
console.log(linkList.insert(34));

console.log(linkList.insert([6, 8, 9]));
console.log(linkList.insert(79));
console.log(linkList.insert({name:"Toochukwu"}));
console.log(linkList.insert(09));
console.log("");
console.log(linkList.length);
linkedList.remove();
console.log("");
console.log(linkList.length);