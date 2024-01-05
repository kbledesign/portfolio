/* Common Run times:

Θ(1): Constant runtime. Programs with this runtime always perform the same operation regardless of input. Example: A program that prints "hello, world."

Θ(log N): Logarithmic runtime. Common in search algorithms.

Θ(N): Linear runtime. Occurs when iterating through an entire dataset.

Θ(N*log N): Common in sorting algorithms.

Θ(N^2): Polynomial runtime, specifically quadratic (N raised to the 2nd power). Seen in cases involving two-dimensional datasets or nested loops.

Θ(2^N): Exponential runtime. Frequently found in recursive algorithms.

Θ(N!): Factorial runtime. Occurs when generating all possible permutations, like ordering the letters "abcd."
*/

// Constant runtime Θ(1)
// This function always prints "Hello, world" in constant time.
function printHelloWorld() {
  console.log("Hello, world");
}

// Logarithmic runtime Θ(log N)
// Binary search algorithm with logarithmic time complexity.
// It efficiently finds the target element in a sorted array.
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1; // Target not found
}

// Linear runtime Θ(N)
function iterateArray(arr) {
  // Linear time complexity function that iterates through an entire array.
  for (let element of arr) {
    // Process each element linearly with respect to the array size.
  }
}

// N*logN runtime Θ(N*logN)
function mergeSort(arr) {
  // Merge sort algorithm with N*logN time complexity.
  // Efficient for sorting large arrays.
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  // Merge two sorted arrays efficiently.
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Quadratic runtime Θ(N^2)
function findDuplicates(matrix) {
  // Quadratic time complexity function for finding duplicates in a 2D matrix.
  for (let row of matrix) {
    for (let element of row) {
      // Check for duplicates within the matrix.
      // The time complexity is quadratic because it compares each element to all others.
    }
  }
}

// Exponential runtime Θ(2^N)
function recursiveAlgorithm(n) {
  // Exponential time complexity function.
  // Example of a recursive algorithm with exponential growth.
  if (n <= 1) {
    return 1;
  } else {
    return recursiveAlgorithm(n - 1) + recursiveAlgorithm(n - 2);
    // This recursive Fibonacci implementation has exponential time complexity.
  }
}

// Factorial runtime Θ(N!)
function generatePermutations(input) {
  // Factorial time complexity function for generating all permutations.
  // It computes all possible orderings of the input, which can be a time-consuming process.
}
