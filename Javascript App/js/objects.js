var x = NaN; y = 0, z = -0;

x === x; //false
y === z; true;

Object.is(x, x) // true
Object.is(y, z) // false

var a = { [Symbol("bar")]: "hello world" }

Object.getOwnPropertyDescriptor(a) // symbol Bar

var c = { foo() { console.log("foo") } }
var b = Object.setPrototypeOf({}, c)

var d = { foo: "bar" }
Object.assign(d, b); // copies properties


// observe methods

// Define an object to observe
var person = {
    name: "John",
    age: 30
};

// Create a callback function to handle changes
function handleChanges(changes) {
    for (var change of changes) {
        console.log("Change type: " + change.type);
        console.log("Property name: " + change.name);
        console.log("Old value: " + change.oldValue);
    }
}

// Start observing the "person" object for all change types
Object.observe(person, handleChanges);

// Make some changes to the object
person.name = "Alice"; // This will trigger the callback
person.age = 35;       // This will also trigger the callback

// Later, stop observing the object (optional)
Object.unobserve(person, handleChanges);
