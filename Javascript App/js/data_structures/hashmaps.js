const LinkedList = require('./LinkedList');
const Node = require('./Node');
class HashMap {
    constructor(size = 0) {
        this.hashmap = new Array(size)
            .fill(null)
            .map(() => new LinkedList());
    }

    hash(key) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode += hashCode + key.charCodeAt(i);
        }
        return hashCode % this.hashmap.length;
    }

    assign(key, value) {
        const arrayIndex = this.hash(key);
        const linkedList = this.hashmap[arrayIndex];
        console.log(`Storing ${value} at index ${arrayIndex}`);
        if (linkedList.head === null) {
            linkedList.addToHead({ key, value });
            return;
        }
        let current = linkedList.head;
        while (current) {
            if (current.data.key === key) {
                current.data = { key, value };
            }
            if (!current.next) {
                current.next = new Node({ key, value });
                break;
            }
            current = current.next;
        }
    }

    retrieve(key) {
        const arrayIndex = this.hash(key);
        let current = this.hashmap[arrayIndex].head;
        while (current) {
            if (current.data.key === key) {
                console.log(`\nRetrieving ${current.data.value} from index ${arrayIndex}`);
                return current.data.value;
            }
            current = current.next;
        }
        return null;
    }
}

module.exports = HashMap;


const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }

    addToTail(data) {
        let tail = this.head;
        if (!tail) {
            this.head = new Node(data);
        } else {
            while (tail.getNextNode() !== null) {
                tail = tail.getNextNode();
            }
            tail.setNextNode(new Node(data));
        }
    }

    removeHead() {
        const removedHead = this.head;
        if (!removedHead) {
            return;
        }
        if (removedHead.next) {
            this.head = removedHead.next;
        }
        return removedHead.data;
    }

    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while (currentNode !== null) {
            output += currentNode.data + ' ';
            currentNode = currentNode.next;
        }
        output += `<tail>`;
        console.log(output);
    }

    findNodeIteratively(data) {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data === data) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    findNodeRecursively(data, currentNode = this.head) {
        if (currentNode === null) {
            return null;
        } else if (currentNode.data === data) {
            return currentNode;
        } else {
            return this.findNodeRecursively(data, currentNode.next);
        }
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