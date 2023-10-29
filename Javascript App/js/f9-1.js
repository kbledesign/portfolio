// mapping old list > new list

function map(mapperFn, arr) {
    var newList = [];
    for (let [idx, v] of arr.entries()) {
        newList.push(
            mapperFn(v, idx, arr)
        );
    }

    return newList;
}

// >> function composition
// Define the compose function
const compose = (f, g) => (x) => f(g(x));

// Define the other functions
const increment = (v) => ++v;
const decrement = (v) => --v;
const square = (v) => v * v;
const double = (v) => v * 2;

// Array of functions
const functions = [increment, decrement, square];

// Compose and apply the functions to 3
const results = functions
    .map((fn) => compose(fn, double))
    .map((fn) => fn(3));

console.log(results); // Output: [7, 5, 36]



// >> function composition
// Mapping function (transforms lowercase to uppercase)
function uppercaseLetter(character) {
    const code = character.charCodeAt(0);
    if (code >= 97 && code <= 122) {
        code = code - 32;
    }
    return String.fromCharCode(code);
}

// String functor utility
function stringMap(mapperFn, str) {
    return [...str].map(mapperFn).join("");
}

const inputString = "Hello World!";
const resultString = stringMap(uppercaseLetter, inputString);

console.log(resultString); // Output: "HELLO WORLD!"




// >> filtering
// Define filterIn() and filterOut() functions
function filterIn(predicateFn, arr) {
    return arr.filter(predicateFn);
}

function filterOut(predicateFn, arr) {
    return arr.filter(element => !predicateFn(element));
}

// Predicate functions
var isOdd = v => v % 2 === 1;
var isEven = v => v % 2 === 0;

// Input array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use filterIn() to filter in odd numbers
var oddNumbers = filterIn(isOdd, numbers);
console.log("Odd Numbers:", oddNumbers);

// Use filterOut() to filter out even numbers
var evenNumbers = filterOut(isEven, numbers);
console.log("Even Numbers:", evenNumbers);



// >> Unique values filter (not the most performant)
var unique = arr => arr.filter((v, idx) => arr.indexOf(v) == idx); // returns the first value, compares with current index

var unique = arr => arr.reduce((list, v) => (list.indexOf(v) == -1 ? (list.push(v), list) : list), []); // reduce approach, side effect


// >> flattening
// no depth
var flatten = arr => arr.reduce((list, v) => list.concat(Array.isArray(v) ? flatten(v) : v), []);

var nestedArray = [[0, 1], 2, 3, [4, [5, 6, 7], [8, [9, [10, [11, 12], 13]]]]];

// with depth
var flatten = (arr, depth = Infinity) => {
    return arr.reduce((list, v) =>
        list.concat(
            depth > 0
                ? depth > 1 && Array.isArray(v)
                    ? flatten(v, depth - 1)
                    : v
                : [v]
        )
        , []);
};

var nestedArray = [[0, 1], 2, 3, [4, [5, 6, 7], [8, [9, [10, [11, 12], 13]]]]];
var resultDepth1 = flatten(nestedArray, 1);
var resultDepth2 = flatten(nestedArray, 2);

// >> flattening 

var firstNames = [
    { name: "Jonathan", variations: ["John", "Jon", "Jonny"] },
    { name: "Stephanie", variations: ["Steph", "Stephy"] },
    { name: "Frederick", variations: ["Fred", "Freddy"] }
];
// maps obj props > array items
firstNames.map(entry => [entry.name, ...entry.variations]);


// Mapping and then flattening the result
var mappedAndFlattened = flatten(firstNames.map(entry => [entry.name, ...entry.variations]));

// Using flatMap (chain) for the same result
var flatMapResult = flatMap(entry => [entry.name, ...entry.variations], firstNames);
console.log(flatMapResult);



// >> zip file
function zip(arr1, arr2) {
    var zipped = [];
    arr1 = [...arr1]; // Create a copy of arr1 to avoid side effects
    arr2 = [...arr2]; // Create a copy of arr2 to avoid side effects

    while (arr1.length > 0 && arr2.length > 0) {
        zipped.push([arr1.shift(), arr2.shift()]);
    }

    return zipped;
}

var list1 = [1, 3, 5, 7, 9];
var list2 = [2, 4, 6, 8, 10];

var result = zip(list1, list2);
console.log(result);
