// Closure: A function that captures its surrounding state.
function createCounter() {
    let count = 0;

    return function increment() {
        count++;
        return count;
    };
}

const counter = createCounter(); // Creates a closure.
console.log(counter()); // Calls the inner function to increment the count.




// Object: A collection of key-value pairs.
const person = {
    name: "Alice",
    age: 30,
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}.`);
    },
};

console.log(person.name); // Accessing an object property.
person.sayHello(); // Calling a method on the object.




// Encapsulation: Bundling data and behavior together.
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function () {
            console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
        },
    };
}

const person = createPerson("Bob", 25);
person.greet(); // Calling a method that encapsulates data and behavior.



// Mutable State: State that can be changed after creation.
const mutableObject = { value: 10 };
mutableObject.value = 20; // Modifying a property of the object.

function mutableClosure() {
    let value = 10;
    return function () {
        value += 5;
        return value;
    };
}

const mutableFunction = mutableClosure();
console.log(mutableFunction()); // Modifying a variable within a closure.



// Immutability: State that cannot be changed after creation.
const immutableObject = Object.freeze({ value: 10 });
// The line below will throw an error since the object is frozen.
// immutableObject.value = 20;

function immutableClosure() {
    const value = 10;
    return function () {
        return value + 5;
    };
}

const immutableFunction = immutableClosure();
console.log(immutableFunction()); // Reading a value from an immutable closure.










// Closure Example - Structurally Immutable
function createClosure() {
    var x = 1;
    return function () {
        return x;
    };
}

var closure = createClosure(); // Closure capturing x

// Object Example - Structural Mutability
var obj = {
    x: 1
};



// Closure Example - Privacy
function createClosure() {
    var x = 1;
    return function () {
        return x; // x is private to the closure
    };
}

var closure = createClosure(); // The outer scope can't directly access x

// Object Example - No Privacy
var obj = {
    x: 1
};



// Closure Example - Change Control
function createClosure() {
    var x = 1;
    return function () {
        x++; // x can only be modified inside the closure
        return x;
    };
}

var closure = createClosure();

// Object Example - More Open to Change
var obj = {
    x: 1
};
obj.x = 2; // Property x can be modified externally









// Closure Example - Cloning State (Complex)
function createClosure(initialValue) {
    var state = initialValue;
    return {
        getState: function () {
            return state;
        },
        setState: function (newValue) {
            state = newValue;
        }
    };
}

var closure = createClosure(1);


// Object Example - Cloning State (Easier)
var obj = {
    x: 1
};
var clonedObj = { ...obj }; // Shallow cloning









// Closure Example - Performance (Bound Function)
function createClosure(name) {
    return function () {
        return `Hello, ${name}!`;
    };
}

var closure = createClosure("Alice");

// Object Example - Performance (Bound Function)
function greet() {
    return `Hello, ${this.name}!`;
}

var boundGreet = greet.bind({ name: "Bob" });


