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
