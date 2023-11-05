const testGraph = require('./testGraph.js');
const Queue = require('./Queue.js');

const breadthFirstTraversal = (start) => {
  const visitedVertices = [start];
  const visitQueue = new Queue();
  
  visitQueue.enqueue(start);
  
  while (!visitQueue.isEmpty()){
    const current = visitQueue.dequeue();
    console.log(current.data);
    
    current.edges.forEach((edge) => {
      const neighbor = edge.end;
      if (!visitedVertices.includes(neighbor)) {
        visitedVertices.push(neighbor);
        visitQueue.enqueue(neighbor);
      }
    });
  }
};

breadthFirstTraversal(testGraph.vertices[0]);







const testGraph = require('./testGraph.js');

const depthFirstTraversal = (start, callback, visitedVertices = [start]) => {
  
  callback(start);

  start.edges.forEach((edge) => {
    const neighbor = edge.end;
    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, callback,  visitedVertices);
    }
  });
};

depthFirstTraversal(testGraph.vertices[0], (vertex) => {console.log(vertex.data)} );
