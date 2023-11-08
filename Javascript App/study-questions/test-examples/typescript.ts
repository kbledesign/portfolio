// 1. What is TypeScript, and why should we use it over JavaScript?
// TypeScript is a statically typed superset of JavaScript that provides type safety and better tooling support.

// 2. Explain the key differences between 'let' and 'const' in TypeScript.
// 'let' allows variable reassignment, while 'const' enforces immutability.
let x = 10;
const y = 20;

// 3. How do you define a function with optional parameters in TypeScript?
// Use the '?' symbol to make a parameter optional.
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}

// 4. Create an interface in TypeScript and explain its purpose.
// An interface defines a contract for object shape.
interface Person {
    name: string;
    age: number;
}

const alice: Person = {
    name: 'Alice',
    age: 30,
};

// 5. Describe the 'for...of' loop in TypeScript and provide an example.
// 'for...of' is used to iterate over iterable objects like arrays.
const numbers = [1, 2, 3];
for (const num of numbers) {
    console.log(num);
}

// 6. How do you handle asynchronous operations in TypeScript?
// You can use promises, async/await, or callbacks for asynchronous code.

// 7. Explain the purpose of TypeScript type assertions.
// Type assertions allow you to override TypeScript's type inference.
const strLength = (str as string).length;

// 8. What is a union type in TypeScript, and when is it used?
// Union types allow a variable to have multiple possible types.
let value: string | number;
value = 'Hello';
value = 42;

// 9. Describe the 'type' keyword in TypeScript and its use.
// 'type' creates custom type aliases.
type Point = { x: number; y: number };

// 10. What is a generic type in TypeScript, and how is it used?
// Generics allow creating reusable components with dynamic types.
function identity<T>(arg: T): T {
    return arg;
}

// 11. Explain how TypeScript provides type safety when working with null or undefined values.
// Use 'strictNullChecks' to catch null or undefined errors at compile time.
let nullableValue: string | null = null;

// 12. How do you use TypeScript enums, and what is their purpose?
// Enums are used to define a set of named constants.
enum Color {
    Red,
    Green,
    Blue,
}
const chosenColor = Color.Green;

// 13. Describe the 'readonly' modifier in TypeScript and its use.
// 'readonly' makes properties immutable after assignment.
class Circle {
    readonly radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
}

// 14. Explain TypeScript's 'class' and 'interface' usage for creating objects.
// 'class' creates objects with methods and properties, while 'interface' defines object shape.
class Dog {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

// 15. How do you create custom error classes in TypeScript?
// You can extend the built-in 'Error' class to create custom error types.
class CustomError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'CustomError';
    }
}

// 16. Describe the 'extends' and 'implements' keywords in TypeScript.
// 'extends' is used for class inheritance, while 'implements' is used for implementing interfaces.
class Child extends Parent implements MyInterface {
    // ...
}

// 17. What is the 'async/await' feature in TypeScript, and how does it work?
// 'async/await' simplifies asynchronous code by allowing you to write asynchronous code that looks synchronous.
async function fetchData(): Promise<string> {
    const response = await fetch('https://example.com/data');
    return response.text();
}

// 18. Explain how to handle module imports and exports in TypeScript.
// Use 'import' to bring in functionality from other modules, and 'export' to make functions or objects accessible from other modules.

// 19. What is type inference in TypeScript, and when does it occur?
// Type inference allows TypeScript to deduce the type of a variable based on its initialization.
let inferredValue = 'Hello'; // TypeScript infers 'string'.

// 20. Describe the 'never' type in TypeScript and its use cases.
// 'never' represents values that never occur, like functions that always throw errors.
function throwError(message: string): never {
    throw new Error(message);
}

// 21. What are decorators in TypeScript, and how are they used?
// Decorators are used to modify classes, methods, or properties during design time.
@MyDecorator
class MyClass {
    // ...
}

// 22. Explain how to use TypeScript with React for creating components.
// You can create React components with TypeScript by specifying prop types and component state.

// 23. Describe the concept of type guards in TypeScript.
// Type guards are used to narrow down the type of a variable within a certain code block.
if (isString(value)) {
    // 'value' is now treated as a string.
}

// 24. How does TypeScript ensure type safety when working with third-party libraries?
// TypeScript declaration files (*.d.ts) provide type information for third-party libraries.

// 25. What is the 'namespace' feature in TypeScript, and when is it used?
// Namespaces are used to organize code into logical containers to avoid naming conflicts.

// 26. Explain the 'as' operator in TypeScript and when to use it.
// The 'as' operator is used for type assertions to tell TypeScript about the type of a value.
const strLength = (str as string).length;

// 27. How do you create a TypeScript template literal type?
// Template literal types allow creating complex types using template strings.
type Greeting = `Hello, ${string}!`;

// 28. What are conditional types in TypeScript, and how are they used?
// Conditional types allow type transformations based on type conditions.
type NonNullable<T> = T extends null | undefined ? never : T;

// 29. Describe the 'Record' and 'Partial' utility types in TypeScript.
// 'Record' is used to create objects with specified keys and values.
// 'Partial' makes all properties in an object optional.
type Person = Partial<Record<'name' | 'age', string>>;

// 30. Explain the TypeScript 'with' statement and its use.
// 'with' is not recommended and can lead to unintended variable scoping issues.

// 31. What is the difference between 'interface' and 'type' in TypeScript?
// 'interface' is used for defining object shapes, while 'type' can be used for unions, intersections, and more.
interface Car {
    make: string;
}
type Vehicle = { model: string };

// 32. How does TypeScript handle type compatibility and structural typing?
// TypeScript uses structural typing to check if types have compatible shapes.

// 33. Explain the 'keyof' and 'in' operators in TypeScript.
// 'keyof' returns the keys of an object type, and 'in' checks if a property exists in an object.
type PersonKeys = keyof Person;
if ('name' in person) {
    // 'name' property exists in 'person'.
}

// 34. Describe TypeScript's conditional types and their use cases.
// Conditional types allow defining types based on conditions.
type NonNullable<T> = T extends null | undefined ? never : T;

// 35. How do you use mapped types in TypeScript?
// Mapped types are used to create new types based on existing types.
type Optional<T> = {
    [P in keyof T]?: T[P];
};

// 36. What is the 'unknown' type in TypeScript, and when is it used?
// 'unknown' represents a value of an unknown type and provides type safety.
let userInput: unknown;
if (typeof userInput === 'string') {
    let text: string = userInput;
}

// 37. Explain the 'namespace' feature in TypeScript and its use.
// Namespaces are used to organize code into logical containers to avoid naming conflicts.

// 38. Describe the concept of type guards in TypeScript.
// Type guards are used to narrow down the type of a variable within a certain code block.
if (isString(value)) {
    // 'value' is now treated as a string.
}

// 39. How does TypeScript ensure type safety when working with third-party libraries?
// TypeScript declaration files (*.d.ts) provide type information for third-party libraries.

// 40. What is the 'namespace' feature in TypeScript, and when is it used?
// Namespaces are used to organize code into logical containers to avoid naming conflicts.





// 1. Static Typing: Declare types for parameters and return value.
function add(a: number, b: number): number {
    return a + b;
}

// 2. Interfaces: Define an interface to describe object shape.
interface Person {
    name: string;
    age: number;
}

// 3. Classes: Create a class with properties and methods.
class Animal {
    constructor(public name: string) { }
}

// 4. Type Inference: TypeScript infers variable types.
let inferredType = 'Hello'; // TypeScript infers 'string'.

// 5. Enumerations: Define an enum for named constants.
enum Color {
    Red,
    Green,
    Blue,
}

// 6. Union and Intersection Types: Use union and intersection types.
let value: string | number;
let combined: string & number;

// 7. Optional Parameters: Use optional function parameters.
function greet(name: string, greeting?: string): string {
    return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}

// 8. Function Overloading: Define multiple function signatures.
function process(value: string): string;
function process(value: number): number;
function process(value: any): any {
    return value;
}

// 9. Generics: Create reusable functions with generic types.
function identity<T>(arg: T): T {
    return arg;
}

// 10. Modules and Namespaces: Organize code into modules and namespaces.
// Module
import { MyModule } from './module';
// Namespace
namespace MyNamespace {
    export const data = 'Some data';
}

// 11. Type Annotations: Annotate variables with type information.
let age: number = 30;

// 12. Strict Null Checks: Enable 'strictNullChecks' to catch null and undefined errors.

// 13. Type Definitions for Third-Party Libraries: Use type definitions for libraries.
// You can use type definitions (*.d.ts files) for popular libraries to improve tooling support.

// 14. Object Type: Define an object type with properties.
const person: { name: string; age: number } = {
    name: 'Alice',
    age: 30,
};

// 15. Function Type: Specify function type for variables.
let greetFunc: (name: string, greeting?: string) => string;
greetFunc = (name, greeting) => greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;

// 16. Class Type: Use class types to define objects.
let myPet: Animal;
myPet = new Animal('Buddy');

// 17. Template Literals: Create dynamic strings using template literals.
let message: `Hello, ${string}!` = 'Hello, TypeScript!';

// 18. Array Type: Specify array types with elements.
const numbers: number[] = [1, 2, 3, 4, 5];

// 19. Tuple Type: Define fixed-length arrays with specific types.
let pair: [string, number] = ['Apple', 10];

// 20. Literal Types: Use specific values as types.
let status: 'success' | 'error' = 'success';

// 21. Any Type: Opt out of type checking using 'any'.
let dynamicValue: any = 'Hello, World';

// 22. Type Aliases: Create custom type aliases for complex types.
type Point = { x: number; y: number };
const origin: Point = { x: 0, y: 0 };

// 23. Null and Undefined Types: Use 'null' and 'undefined' types.
let n: null = null;
let u: undefined = undefined;

// 24. Boolean Type: Specify boolean types.
let isDone: boolean = false;

// 25. Number Type: Declare number types.
let decimal: number = 6;
let hex: number = 0xf00d;

// 26. String Type: Use string types.
let firstName: string = 'John';

// 27. Void Type: Indicate functions that don't return a value.
function logMessage(message: string): void {
    console.log(message);
}

// 28. Never Type: Represent functions that never return.
function throwError(message: string): never {
    throw new Error(message);
}

// 29. Readonly Type: Make object properties immutable.
const immutableData: Readonly<{ x: number, y: number }> = { x: 10, y: 20 };

// 30. Type Assertions: Override type inference using type assertions.
let stringValue: any = 'TypeScript';
let strLength: number = (stringValue as string).length;

// 31. Destructuring: Destructure objects and arrays.
const { name, age } = person;
const [first, second] = numbers;

// 32. Arrow Functions: Use arrow functions for concise syntax.
const addNumbers = (a: number, b: number): number => a + b;

// 33. Promises: Handle asynchronous operations with promises.
function fetchData(): Promise<string> {
    return fetch('https://example.com/data').then(response => response.text());
}

// 34. Async/Await: Simplify async code with async/await.
async function fetchAsyncData(): Promise<string> {
    const response = await fetch('https://example.com/data');
    return response.text();
}

// 35. instanceof Operator: Check if an object is an instance of a class.
if (myPet instanceof Animal) {
    console.log('It is an Animal');
}

// 36. switch Statement: Use a switch statement for multiple conditions.
switch (status) {
    case 'success':
        console.log('Operation was successful');
        break;
    case 'error':
        console.error('An error occurred');
        break;
}

// 37. for...of Loop: Iterate over iterable objects like arrays.
const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
    console.log(fruit);
}

// 38. Type Guards: Use type guards to narrow down types.
if (typeof age === 'number') {
    console.log('Age is a number');
}

// 39. Namespaces: Organize code with namespaces.
namespace MyNamespace {
    export const data = 'Some data';
}

// 40. Decorators: Modify classes, methods, or properties using decorators.
function MyDecorator(target: any) {
    // Modify the target class or method here
}

// TypeScript is a powerful and flexible language that offers many features for writing clean and maintainable code.

