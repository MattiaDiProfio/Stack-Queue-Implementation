class Stack {
    constructor() {
        this.data = [];
        this.length = 0;
    }

    addElement(val) {
        this.data.push(val);
        this.length++;
        return this;
    }

    removeElement() {
        if (this.length === 0) {
            console.log("Stack is already empty, cannot execute method.");
            return undefined;
        }
        var poppedElement = this.data.pop();
        this.length--;
        return poppedElement;
    }

    length() {
        return this.data.length;
    }

    peekElement() {
        if (this.length === 0) return undefined;
        var index = this.length-1,
            peek = this.data[index];

        return peek;
    }

    is_empty() {
        return this.length === 0;
    }

    reverse() {
        var i = 0, 
            j = this.length-1;
        
        while(i <= j) {
            var temp = this.data[i];
            this.data[i] = this.data[j];
            this.data[j] = temp;

            i++;
            j--;
        }
        return this;
    }
}


/* -------------------- test field -------------------------*/

var stack = new Stack();

stack.addElement(1); //stack = [1]
stack.addElement(2); //stack = [1,2]

console.log(stack.length) //output = 2
console.log(stack.is_empty()) //output = false


for(let i=0; i <= 2; i++) console.log(stack.removeElement());
//output = 2, stack = [1]
//output = 1, stack = []
//output = undefined, stack = []
console.log(stack.length) //output = 0
console.log(stack.is_empty()) //output = true
console.log(stack.peekElement()) //output = undefined

for(let i=1; i <= 10; i++) stack.addElement(i);
console.log(stack.peekElement()) //output = 10

stack.reverse();
console.log(stack.data) //output = [10,9,8,7,6,5,4,3,2,1]
