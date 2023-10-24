// mapping of list numbers

function doubleNumbers(arr) {
    return arr.map((num) => num * 2);
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleNumbers(numbers);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]



// mapping functions

function applyFunctions(functions, value) {
    return functions.map((fn) => fn(value));
}

const functions = [(x) => x + 1, (x) => x * 2, (x) => x - 3];
const valueToApply = 5;
const results = applyFunctions(functions, valueToApply);

console.log(results); // [6, 10, 2]


// mapping with urnary functions 
function parseStringsToIntegers(arr) {
    return arr.map(unary(parseInt));
}

const stringNumbers = ["1", "2", "3"];
const parsedIntegers = parseStringsToIntegers(stringNumbers);

console.log(parsedIntegers); // [1, 2, 3]



// sync operations
var arr = [1, 2, 3, 4, 5];

// Synchronous mapping
var newArr = arr.map(function mapperFn(v) {
    return v * 2;
});

console.log(newArr); // [2, 4, 6, 8, 10]




// async operations
var arr = [];
var newArr = [];

function multiplyBy3(value) {
    newArr.push(value * 3);
}

// Adding values to the list triggers async mapping
arr.push(2);
multiplyBy3(2); // newArr is now [6]
arr.push(4);
multiplyBy3(4); // newArr is now [6, 12]

console.log(newArr); // [6, 12]


// using map for side effects
var arr = [1, 2, 3, 4, 5];

// Using map for side effects (not recommended)
arr.map(function mapperFn(v) {
    console.log(v); // This logs each value but is not functional.
    return v;
});

// You get the same array, but it's not used.
console.log(arr); // [1, 2, 3, 4, 5]



// functions with map()
var arr = [1, 2, 3, 4, 5];

function doubleValue(v) {
    return v * 2;
}

// Using map as a functor
var doubledArr = arr.map(doubleValue);

console.log(doubledArr); // [2, 4, 6, 8, 10]


// filtering
// exclusionary
function isEven(value) {
    return value % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var oddNumbers = numbers.filter(function (value) {
    return !isEven(value);
});

console.log(oddNumbers); // [1, 3, 5, 7]


// inclusionary
var fruits = ["apple", "banana", "orange", "grape", "kiwi"];
var roundFruits = fruits.filter(function (fruit) {
    return fruit === "apple" || fruit === "orange";
});

console.log(roundFruits); // ["apple", "orange"]


// using not() to reverse filter
function not(predicate) {
    return function (value) {
        return !predicate(value);
    };
}

function isOdd(value) {
    return value % 2 === 1;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var evenNumbers = numbers.filter(not(isOdd));

console.log(evenNumbers); // [2, 4, 6, 8]


// filter to meet language:

function isOdd(value) {
    return value % 2 === 1;
}

function isEven(value) {
    return value % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5];

var oddNumbers = filterIn(isOdd, numbers);    // Include odd numbers
var evenNumbers = filterOut(isEven, numbers);  // Exclude even numbers

console.log(oddNumbers);  // [1, 3, 5]
console.log(evenNumbers); // [1, 3, 5]




// basic reduce
// Concept: Reduce
const numbers = [1, 2, 3, 4, 5];


// Using reduce to find the sum of numbers
const sum = numbers.reduce((acc, cv) => acc + cv, 0);
console.log(sum); // Output: 15



// Concept: Reduce
const words = ['Hello', ' ', 'World', '!'];

// Using reduce to concatenate strings
const combinedString = words.reduce((accumulator, currentValue) => accumulator + currentValue, '');
console.log(combinedString); // Output: "Hello World!"


// Concept: Reduce
function customReduce(reducer, initialValue, arr) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
        accumulator = reducer(accumulator, arr[i]);
    }
    return accumulator;
}

const numbers = [1, 2, 3, 4, 5];
const product = customReduce((acc, val) => acc * val, 1, numbers);
console.log(product); // Output: 120



// composing functions with reduce, left to right

// Concept: Function Composition with Reduce
function compose(...functions) {
    return functions.reduce((f, g) => (...args) => f(g(...args)));
}

const addOne = (x) => x + 1;
const double = (x) => x * 2;
const square = (x) => x * x;

const composedFunction = compose(addOne, double, square);

const result = composedFunction(2);
console.log(result); // Output: 10 (2 -> square -> double -> addOne)



functions.reduce((f, g) => (...args) => f(g(...args)));

functions.reduce(
    (f, g) => {
        return (...args) => {
            return f(g(...args))
        }
    }
)



// Concept: Filtering unique values from an array
// Using filter() and indexOf() to filter the first occurrence of each item
var unique = arr => arr.filter((v, idx) => arr.indexOf(v) == idx);



// Concept: Flattening a nested array into a flat array
// Using reduce() to recursively flatten nested arrays and an optional depth limit
var flatten = (arr, depth = Infinity) => {
    return arr.reduce((list, v) => {
        return list.concat(
            depth > 0 ? (Array.isArray(v) ? flatten(v, depth - 1) : v) : [v]
        );
    }, []);
};



// Concept: Mapping a list and then flattening the result
// Using map() to transform a list and reduce() to flatten the result
var firstNames = [
    { name: "Jonathan", variations: ["John", "Jon", "Jonny"] },
    { name: "Stephanie", variations: ["Steph", "Stephy"] },
    { name: "Frederick", variations: ["Fred", "Freddy"] }
];

var flatNames = firstNames
    .map(entry => [entry.name, ...entry.variations])
    .reduce((list, v) => list.concat(v), []);






// Concept: Zip combines two lists by alternating values from each input list into sub-lists
function zip(arr1, arr2) {
    var zipped = [];
    arr1 = [...arr1]; // Copy to avoid modifying the original array
    arr2 = [...arr2]; // Copy to avoid modifying the original array

    while (arr1.length > 0 && arr2.length > 0) {
        zipped.push([arr1.shift(), arr2.shift()]);
    }

    return zipped;
}

// Example usage:
var list1 = [1, 3, 5, 7, 9];
var list2 = [2, 4, 6, 8, 10];
var zippedList = zip(list1, list2);
console.log(zippedList);
// Output: [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]



// Concept: Merging two lists interleaves values from each source into a flat list
function mergeLists(arr1, arr2) {
    var merged = [];
    arr1 = [...arr1]; // Copy to avoid modifying the original array
    arr2 = [...arr2]; // Copy to avoid modifying the original array

    while (arr1.length > 0 || arr2.length > 0) {
        if (arr1.length > 0) {
            merged.push(arr1.shift());
        }
        if (arr2.length > 0) {
            merged.push(arr2.shift());
        }
    }

    return merged;
}

// Example usage:
var list1 = [1, 3, 5, 7, 9];
var list2 = [2, 4, 6, 8, 10];
var mergedList = mergeLists(list1, list2);
console.log(mergedList);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
