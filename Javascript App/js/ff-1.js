// What Is a Function?
function add(x, y) {
    return x + y;
}

const result = add(3, 5);
console.log(result); // 8
///////



// Defaulting Parameters
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}

greet(); // Hello, Guest!
greet('Alice'); // Hello, Alice!
///////



// Counting Inputs
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

const total = sum(1, 2, 3, 4, 5);
console.log(total); // 15
///////



// Parameter Destructuring
function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

const person = {
    firstName: 'John',
    lastName: 'Doe',
};

const fullName = getFullName(person);
console.log(fullName); // John Doe
///////


// Named Arguments
function displayInfo({ name, age, city }) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

const info = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};

displayInfo(info); // Name: Alice, Age: 30, City: New York
///////





// Early Returns
function calculateValue(x) {
    if (x > 10) return x + 1;
    const y = x / 2;
    if (y > 3) {
        if (x % 2 === 0) return x;
    }
    if (y > 1) return y;
    return x;
}

console.log(calculateValue(2));  // 2
console.log(calculateValue(4));  // 2
console.log(calculateValue(8));  // 8
console.log(calculateValue(12)); // 13


// Implicit Output
var y;

function f(x) {
    y = (2 * Math.pow(x, 2)) + 3;
}

f(2);

console.log(y); // Output: 11


// Explicit Output
function f(x) {
    return (2 * Math.pow(x, 2)) + 3;
}

var y = f(2);
console.log(y); // Output: 11




// Side Effects and Pure Functions:

function sum(list) {
    var total = 0;
    for (let i = 0; i < list.length; i++) {
        if (!list[i]) list[i] = 0; // This is a side effect
        total = total + list[i];
    }
    return total;
}

var nums = [1, 3, 9, 27, , 84];

console.log(sum(nums)); // Output: 124
console.log(nums); // Output: [1, 3, 9, 27, 0, 84]




// hof
function forEach(list, fn) {
    for (let v of list) {
        fn(v);
    }
}

forEach([1, 2, 3, 4, 5], function each(val) {
    console.log(val);
});
// Output: 1 2 3 4 5



// closure
function makeAdder(x) {
    return function sum(y) {
        return x + y;
    };
}

var addTo10 = makeAdder(10);
var addTo37 = makeAdder(37);

console.log(addTo10(3));  // Output: 13
console.log(addTo10(90)); // Output: 100
console.log(addTo37(13)); // Output: 50



//named functions
// Named Function
function multiply(x, y) {
    return x * y;
}

// Anonymous Function
var divide = function (x, y) {
    return x / y;
};

console.log(multiply(5, 4)); // Output: 20
console.log(divide(10, 2));  // Output: 5


// arrow functions
// ES6 Arrow Function
const square = (x) => x * x;

console.log(square(7)); // Output: 49



// this
function greet() {
    console.log(`Hello, ${this.name}!`);
}

const person = {
    name: 'Alice',
    sayHello: greet,
};

person.sayHello(); // Output: Hello, Alice!




// Named function declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Outputs: Hello, Alice!

// Named function expression
var add = function sum(a, b) {
    return a + b;
};

console.log(add(3, 4)); // Outputs: 7
console.log(sum(2, 5)); // Error: sum is not defined



// Anonymous function expression
var double = function (x) {
    return x * 2;
};

var result = double(5); // Double the value

// Anonymous function as an argument
setTimeout(function () {
    console.log("Delayed message");
}, 1000);

// Arrow functions
var multiply = (a, b) => a * b;

var square = x => x * x;

console.log(multiply(3, 4)); // Outputs: 12






// Function with explicit context as an argument
function sumWithContext(context, a, b) {
    return context.x + context.y + a + b;
}

var context = {
    x: 2,
    y: 3,
};

console.log(sumWithContext(context, 4, 5)); // Outputs: 14

// Using an object with functions instead of `this`
var calculator = {
    x: 10,
    y: 5,
    add: function () {
        return this.x + this.y;
    },
    subtract: function () {
        return this.x - this.y;
    },
};

console.log(calculator.add()); // Outputs: 15

// Arrow functions with explicit context
var product = (context) => context.x * context.y;

console.log(product(context)); // Outputs: 6



//unary
function unary(fn) {
    return function onlyOneArg(arg) {
        return fn(arg);
    };
}

// Usage example:
["1", "2", "3"].map(unary(parseInt));



//identity
function identity(v) {
    return v;
}

// Usage example:
var words = "   Now is the time for all...  ".split(/\s|\b/);
words.filter(identity);





// constant
function constant(v) {
    return function value() {
        return v;
    };
}

// Usage example:
p1.then(foo).then(constant(p2)).then(bar);





// partial application:
function partial(fn, ...presetArgs) {
    return function partiallyApplied(...laterArgs) {
        return fn(...presetArgs, ...laterArgs);
    };
}

// Usage example:
var getPerson = partial(ajax, "http://some.api/person");



// reverse: 
function reverseArgs(fn) {
    return function argsReversed(...args) {
        return fn(...args.reverse());
    };
}

// Usage example:
var cacheResult = reverseArgs(partial(reverseArgs(ajax), onResult));







// partial right
function partialRight(fn, ...presetArgs) {
    return function partiallyApplied(...laterArgs) {
        return fn(...laterArgs, ...presetArgs);
    };
}

// Usage example:
var cacheResult = partialRight(ajax, onResult);








// Partial Application
function multiply(x, y) {
    return x * y;
}

// Create a partially applied function
function partiallyApply(fn, x) {
    return function (y) {
        return fn(x, y);
    };
}

const double = partiallyApply(multiply, 2);

console.log(double(5)); // Outputs: 10
console.log(double(10)); // Outputs: 20

// Currying
function add(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = add(5);

console.log(add5(3)); // Outputs: 8
console.log(add5(7)); // Outputs: 12

// Point-Free Style
function isShortEnough(str) {
    return str.length <= 5;
}

function not(predicate) {
    return function (...args) {
        return !predicate(...args);
    };
}

const isLongEnough = not(isShortEnough);

const output = console.log; // For simplicity

function when(predicate, fn) {
    return function (...args) {
        if (predicate(...args)) {
            return fn(...args);
        }
    };
}

const printIf = (predicate, message) => when(predicate, output);

const message1 = "Hello";
const message2 = "Hello, World";

printIf(isShortEnough, message1); // Outputs: Hello
printIf(isShortEnough, message2);

printIf(isLongEnough, message1);
printIf(isLongEnough, message2); // Outputs: Hello, World
