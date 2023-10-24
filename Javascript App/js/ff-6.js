// Example 1: Creating a new array immutably
const originalArray = [1, 2, 3];

function addValueImmutably(arr, value) {
    // Create a new array by spreading the original array and adding the value
    const newArray = [...arr, value];
    return newArray;
}

const newArray = addValueImmutably(originalArray, 4);

console.log("Original Array:", originalArray); // [1, 2, 3]
console.log("New Array:", newArray); // [1, 2, 3, 4]






// Example 2: Attempting to mutate the original array (not recommended)
originalArray.push(5); // This is mutable and discouraged in a functional approach

console.log("Original Array after mutation:", originalArray); // [1, 2, 3, 5]







// Example 3: Using Object.freeze for shallow immutability
const frozenArray = Object.freeze([1, 2, 3]);

// Attempting to change a value in the frozen array
frozenArray[0] = 10; // This will not mutate the frozen array

console.log("Frozen Array:", frozenArray); // [1, 2, 3]

// Attempting to add a new value to the frozen array (in strict mode)
frozenArray.push(4); // Error in strict mode











// Example 4: Handling received values immutably
function processValue(value) {
    // Create a new value based on the received value, rather than mutating it
    return value + 1;
}

const originalValue = 10;
const processedValue = processValue(originalValue);

console.log("Original Value:", originalValue); // 10
console.log("Processed Value:", processedValue); // 11
