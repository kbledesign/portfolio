const LinkedList = require('./LinkedList');

class Stack {
    constructor(maxSize = Infinity) {
        this.stack = new LinkedList();
        this.maxSize = maxSize;
        this.size = 0;
    }

    // Add helper methods below this line
    hasRoom() {
        return this.size < this.maxSize;
    }

    isEmpty() {
        return this.size === 0;
    }

    push(value) {
        if (this.hasRoom()) {
            this.stack.addToHead(value);
            this.size++;
        } else {
            throw new Error('Stack is full');
        }
    }

    pop() {
        if (!this.isEmpty()) {
            const value = this.stack.removeHead();
            this.size--;
            return value;
        } else {
            throw new Error('Stack is empty');
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.stack.head.data;
        } else {
            return null;
        }
    }

}

module.exports = Stack;

const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(value) {
        const nextNode = new Node(value);
        const currentHead = this.head;
        this.head = nextNode;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }

    addToTail(value) {
        let lastNode = this.head;
        if (!lastNode) {
            this.head = new Node(value);
        } else {
            let temp = this.head;
            while (temp.getNextNode() !== null) {
                temp = temp.getNextNode();
            }
            temp.setNextNode(new Node(value));
        }
    }

    findNodeIteratively(comparator) {
        let current = this.head;

        while (current) {
            if (comparator(current.value)) {
                return current;
            }
            current = current.getNextNode();
        }
        return null;
    }

    removeHead() {
        const removedHead = this.head;
        if (!removedHead) return;

        if (removedHead.next) {
            this.head = removedHead.next;
        }
        return removedHead.data;
    }

    get size() {
        let count = 0;
        let currentNode = this.head;

        while (currentNode !== null) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }
}

module.exports = LinkedList;

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNextNode(node) {
        if (!(node instanceof Node)) {
            throw new Error('Next node must be a member of the Node class');
        }
        this.next = node;
    }

    setNext(data) {
        this.next = data;
    }

    getNextNode() {
        return this.next;
    }
}

module.exports = Node;
