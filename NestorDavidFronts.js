class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    addFront(value){
        var newNode = new Node(value);

        newNode.next = this.head

        this.head = newNode;

        return this;
    }

    removeFront(){
        if(this.head == null){
            return null;
        }
        this.head = this.head.next;
        return this;
    }

    front(){
        return this.head.value;
    }

    view(){
        var currentNode = this.head;

        while(currentNode){
            console.log('current node value is ${currentNode.value}')
            currentNode = currentNode.next
        }
    }
}

    mySll = new SLL();
    mySll.addFront(10);
    console.log(mySll.front());
    mySll.addFront(20);
    console.log(mySll.front());
    mySll.removeFront();
    console.log(mySll.front());
