const testGraph = require("./testGraph.js");
const dijkstras = require("./dijkstras.js");

const shortestPathBetween = (graph, startingVertex, targetVertex) => {
  const { distances, previous } = dijkstras(graph, startingVertex);
  const distance = distances[targetVertex.data];
  const path = [];
  let vertex = targetVertex;
  while (vertex){
    path.unshift(vertex);
    vertex = previous[vertex.data]
  }
  return {distance, path}
};

// Retrieve shortest path between vertices A and G
const a = testGraph.getVertexByValue("A");
const g = testGraph.getVertexByValue("G");
const results = shortestPathBetween(testGraph, a, g);

console.log(results);
module.exports = shortestPathBetween;











const PriorityQueue = require('./PriorityQueue.js');

const dijkstras = (graph, startingVertex) => {
	const distances = {};
	const previous = {};
	const queue = new PriorityQueue();

	queue.add({ vertex: startingVertex, priority: 0 });

	graph.vertices.forEach((vertex) => {
		distances[vertex.data] = Infinity;
		previous[vertex.data] = null;
	});
	distances[startingVertex.data] = 0;

	while (!queue.isEmpty()) {
		const { vertex } = queue.popMin();

		vertex.edges.forEach((edge) => {
			const alternate = edge.weight + distances[vertex.data];
			const neighborValue = edge.end.data;

			if (alternate < distances[neighborValue]) {
				distances[neighborValue] = alternate;
				previous[neighborValue] = vertex;

				queue.add({ vertex: edge.end, priority: distances[neighborValue] })
			}
		})
	}

	return { distances, previous };
};

module.exports = dijkstras;









class PriorityQueue {
    constructor() {
      this.heap = [null];
      this.size = 0;
    }
  
    add({vertex, priority}) {
      this.heap.push({vertex, priority});
      this.size++;
      this.bubbleUp();
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    popMin() {
      if (this.size === 0) {
        return null 
      }
      const min = this.heap[1];
      this.heap[1] = this.heap[this.size];
      this.size--;
      this.heap.pop();
      this.heapify();
      return min;
    }
  
    bubbleUp() {
      let current = this.size;
      while (current > 1 && this.heap[getParent(current)].priority > this.heap[current].priority) {
        this.swap(current, getParent(current));
        current = getParent(current);
      }
    }
  
    heapify() {
      let current = 1;
      let leftChild = getLeft(current);
      let rightChild = getRight(current);
      // Check that there is something to swap (only need to check the left if both exist)
      while (this.canSwap(current, leftChild, rightChild)){
        // Only compare left & right if they both exist
        if (this.exists(leftChild) && this.exists(rightChild)) {
          // Make sure to swap with the smaller of the two children
          if (this.heap[leftChild].priority < this.heap[rightChild].priority) {
            this.swap(current, leftChild);
            current = leftChild;
          } else {
            this.swap(current, rightChild);
            current = rightChild;
          }
        } else {
          // If only one child exist, always swap with the left
          this.swap(current, leftChild);
          current = leftChild;
        }
        leftChild = getLeft(current);
        rightChild = getRight(current);
      }
    }
  
    swap(a, b) {
      [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
  
    exists(index) {
      return index <= this.size;
    }
  
    canSwap(current, leftChild, rightChild) {
      // Check that one of the possible swap conditions exists
      return (
        this.exists(leftChild) && this.heap[current].priority > this.heap[leftChild].priority
        || this.exists(rightChild) && this.heap[current].priority > this.heap[rightChild].priority
      );
    }
  }
  
  const getParent = current => Math.floor((current / 2));
  const getLeft = current => current * 2;
  const getRight = current => current * 2 + 1;
  
  module.exports = PriorityQueue;

  



  




  class MinHeap {
    constructor() {
      this.heap = [null];
      this.size = 0;
    }
  
    add(value) {
      this.heap.push(value);
      this.size++;
      this.bubbleUp();
    }
  
    popMin() {
      if (this.size === 0) {
        return null;
      }
      this.swap(1, this.size);
      const min = this.heap.pop();
      this.size--;
      this.heapify();
      return min;
    }
  
    bubbleUp() {
      let current = this.size;
      while (current > 1 && this.heap[getParent(current)] > this.heap[current]) {
        this.swap(current, getParent(current));
        current = getParent(current);
      }
    }
  
    heapify() {
      let current = 1;
      let leftChild = getLeft(current);
      let rightChild = getRight(current);
      // Check that there is something to swap (only need to check the left if both exist)
      while (this.canSwap(current, leftChild, rightChild)){
        // Only compare left & right if they both exist
        if (this.exists(leftChild) && this.exists(rightChild)) {
          // Make sure to swap with the smaller of the two children
          if (this.heap[leftChild] < this.heap[rightChild]) {
            this.swap(current, leftChild);
            current = leftChild;
          } else {
            this.swap(current, rightChild);
            current = rightChild;
          }
        } else {
          // If only one child exist, always swap with the left
          this.swap(current, leftChild);
          current = leftChild;
        }
        leftChild = getLeft(current);
        rightChild = getRight(current);
      }
    }
  
    swap(a, b) {
      [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
  
    exists(index) {
      return index <= this.size;
    }
  
    canSwap(current, leftChild, rightChild) {
      // Check that one of the possible swap conditions exists
      return (
        this.exists(leftChild) && this.heap[current] > this.heap[leftChild]
        || this.exists(rightChild) && this.heap[current] > this.heap[rightChild]
      );
    }
  }
  
  const getParent = current => Math.floor((current / 2));
  const getLeft = current => current * 2;
  const getRight = current => current * 2 + 1;
  
  module.exports = MinHeap;
  