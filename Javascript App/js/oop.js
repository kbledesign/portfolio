// object literal
const person = {
    firstName: "John",
    lastName: "Doe",
    sayHello: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
};

// constructor functions 
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
};

const person = new Person("John", "Doe");

// ES6 classes
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
}

const person = new Person("John", "Doe");


// Factory Functions
function createPerson(firstName, lastName) {
    return {
        firstName,
        lastName,
        sayHello() {
            console.log(`Hello, my name is ${firstName} ${lastName}`);
        }
    };
}

const person = createPerson("John", "Doe");


// Object.create
const personPrototype = {
    sayHello() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
};

const person = Object.create(personPrototype);
person.firstName = "John";
person.lastName = "Doe";


