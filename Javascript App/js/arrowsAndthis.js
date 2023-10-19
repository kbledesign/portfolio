// event handler example
{/* <button id="myButton">Click me</button> */ }
const myObject = {
    name: "My Object",
    handleClick: function () {
        console.log(`Clicked in ${this.name}`);
    }
};

document.getElementById("myButton").addEventListener("click", myObject.handleClick);

// timer example
function Timer() {
    this.seconds = 0;

    this.start = function () {
        setTimeout(function () {
            this.seconds++;
            console.log("Elapsed time: " + this.seconds + " seconds");
        }, 1000);
    };
}

const timer = new Timer();
timer.start();

// prototype example
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log("Hello, my name is " + this.name);
};

const person1 = new Person("Alice");
person1.greet(); // Works as expected

const greetFunction = person1.greet;
greetFunction(); // Does not work as expected


