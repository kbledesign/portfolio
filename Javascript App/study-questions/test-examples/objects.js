// Question 1: What is an object in JavaScript?
// Answer: An object is a data structure that can store key-value pairs.

// Question 2: How do you create an empty object in JavaScript?
const emptyObject = {};

// Question 3: How do you add a key-value pair to an object?
emptyObject.name = "John";

// Question 4: How do you access the value of a specific key in an object?
const personName = emptyObject.name;

// Question 5: How do you remove a key-value pair from an object?
delete emptyObject.name;

// Question 6: What is object destructuring in JavaScript?
// Answer: Object destructuring allows you to extract values from an object and assign them to variables.

// Question 7: Explain the "this" keyword in JavaScript.
// Answer: "this" refers to the current object and is used to access its properties and methods.

// Question 8: What is object cloning in JavaScript, and how can it be achieved?
// Answer: Object cloning is creating a copy of an object. It can be achieved using spread syntax or Object.assign.
const originalObject = { name: "Alice" };
const clonedObject = { ...originalObject };

// Question 9: How do you check if a key exists in an object?
// Answer: Use the "in" operator or the "hasOwnProperty" method.
const hasKey = "age" in originalObject;

// Question 10: What are object prototypes in JavaScript?
// Answer: Object prototypes are a mechanism for inheritance and sharing properties and methods among objects.

// Question 11: How can you create an object with a specific prototype in JavaScript?
const person = { name: "Bob" };
const newPerson = Object.create(person);

// Question 12: What is the difference between "hasOwnProperty" and "in" when checking for object properties?
// Answer: "hasOwnProperty" checks if the property belongs to the object, while "in" also checks inherited properties.

// Question 13: What is a getter and a setter in an object?
// Answer: Getters are used to retrieve the value of an object's property, and setters are used to change the value.

// Question 14: How can you iterate over the keys of an object?
for (const key in newPerson) {
    if (newPerson.hasOwnProperty(key)) {
        console.log(key);
    }
}

// Question 15: What is the "Object.keys()" method used for?
// Answer: It returns an array of an object's own enumerable property names.

// Question 16: How can you merge two objects in JavaScript?
// Answer: You can use the "Object.assign()" method or the spread syntax.
const mergedObject = { ...newPerson, age: 30 };

// Question 17: Explain the concept of object property descriptors in JavaScript.
// Answer: Property descriptors define the behavior of an object's property, including its configurability, writability, and enumerable status.

// Question 18: How do you freeze an object in JavaScript to make it immutable?
// Answer: Use the "Object.freeze()" method to prevent any modifications to the object.

// Question 19: What is object sealing in JavaScript, and how can you achieve it?
// Answer: Object sealing restricts adding or removing properties but allows property values to change. Use "Object.seal()" to achieve it.

// Question 20: What is object preventing in JavaScript, and how can you achieve it?
// Answer: Object preventing makes an object completely immutable. Use "Object.preventExtensions()" to achieve it.

// Question 21: Explain the concept of object deep cloning.
// Answer: Deep cloning involves creating a copy of an object along with all nested objects within it.

// Question 22: How can you deep clone an object in JavaScript?
// Answer: You can use a combination of recursion and object cloning methods.
function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    let clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}

// Question 23: Explain object composition in JavaScript.
// Answer: Object composition involves combining multiple objects to create a new object with the desired properties and behaviors.

// Question 24: How can you merge objects using object composition?
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const mergedObjects = { ...obj1, ...obj2 };

// Question 25: What is the "Object.keys()" method used for?
// Answer: It returns an array of an object's own enumerable property names.

// Display results
console.log(emptyObject);
console.log(personName);
console.log(clonedObject);
console.log(hasKey);
console.log(newPerson);
console.log(mergedObject);
console.log(deepClone({ a: { b: 2 } }));
console.log(mergedObjects);
