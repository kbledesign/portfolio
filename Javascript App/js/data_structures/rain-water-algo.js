function naiveSolution(heights) {
    let totalWater = 0;
    for (let i = 1; i < heights.length - 1; i++) {
      let leftBound = 0;
      let rightBound = 0;
      // We only want to look at the elements to the left of i, which are the elements at the lower indices
      
      for (let j = 0; j <= i; j++) { 
        leftBound = Math.max(leftBound, heights[j]);
      }
      // Likewise, we only want the elements to the right of i, which are the elements at the higher indices
      for (let j = i; j < heights.length; j++) {
        rightBound = Math.max(rightBound, heights[j]);
      }

      totalWater += Math.min(leftBound, rightBound) - heights[i];
    }
    return totalWater;
  }


// 1, 2, -1, 2, 1




// [4, 3, 0, 1, 2]

function efficientSolution(heights) {
    let totalWater = 0;
    let leftPointer = 0;
    let rightPointer = heights.length - 1;
    let leftBound = 0;
    let rightBound = 0;
  
    while (leftPointer < rightPointer) {
      if (heights[leftPointer] < heights[rightPointer]) {
        if (heights[leftPointer] > leftBound) {
          leftBound = heights[leftPointer];
        } else {
          totalWater += leftBound - heights[leftPointer];
        }
        leftPointer++;
      } else {
        if (heights[rightPointer] > rightBound) {
          rightBound = heights[rightPointer];
        } else {
          totalWater += rightBound - heights[rightPointer];
        }
        rightPointer--;
      }
    }
  
    return totalWater;
  }
  
  const testArray = [4, 2, 1, 3, 0, 1, 2];
  console.log(efficientSolution(testArray));
  
  // Export the function so it can be tested.
  module.exports = efficientSolution;
  