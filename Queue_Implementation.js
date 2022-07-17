class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqeueFront(val) {
        var newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;

        } 
        else {
            var oldHead = this.head;
            newNode.next = oldHead;
            oldHead.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    enqeueRear(val) {                             
        var newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length ++;
        return this
    }

    dequeueFront() {
        if (this.head === null) {
            console.log("Queue is alreayd empty, cannot execute method.");
            return null;
        }
        var poppedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }   
        else {
            var newHead = poppedNode.next;
            newHead.prev = null;
            poppedNode.next = null;
            this.head = newHead;
        }

        this.length--;
        return poppedNode;
    }

    dequeueRear() {                           
        if (this.head === null) {
            console.log("Queue is alreayd empty, cannot execute method.");
            return null;
        }
        var poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    displayContents() {
        if (this.head === null) return [];
        var data = [],
            currentNode = this.head;
        while(currentNode) {
            data.push(currentNode.val);
            currentNode = currentNode.next;
        }
        return data;
    }

}


/* -------------------- test field -------------------------*/

var queue = new Queue();

for(let i=1; i<=4; i++) queue.enqeueFront(i);
console.log(queue.displayContents()) //output = [4,3,2,1]

for(let i=1; i <=5; i++) {
    console.log(queue.dequeueFront());
    console.log(queue.displayContents());
}
//poppedNode = 4, output = [3,2,1]
//poppedNode = 3, output = [2,1]
//poppedNode = 2, output = [1]
//poppedNode = 1, output = []
//poppedNode = undefined, output = error message

queue.enqeueFront("test0");
for(let i=1; i <= 3; i++) queue.enqeueRear(`test${i}`);
console.log(queue.displayContents()); //output = ["test0", "test1", "test2", "test3"]

for(let i=1; i <= 5; i++) {
    console.log(queue.dequeueRear());
    console.log(queue.displayContents());
}
//poppedNode = "test0", output = ["test3", "test2", "test1"]
//poppedNode = "test1", output = ["test3", "test2"]
//poppedNode = "test2", output = ["test3"]
//poppedNode = "test3", output = []
//poppedNode = undefined, output = error message

