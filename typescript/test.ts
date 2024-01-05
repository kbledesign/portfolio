function greet(first: string, last: Date) {
    console.log(`Hi ${first} ${last.toDateString()}.`);
}
greet("john", new Date());

// tsc --target es2015 hello.ts

let foo = "test";

// parameter and return type annotations
function testFunction(name: string): number {
    console.log(name.toUpperCase());
    if (name) {
        return 1;
    } else {
        return 0;
    }
}

// array types and context and inference
const names = ["Bev", "john", "blake"];

names.forEach(function (s) {
    console.log(s.toUpperCase());
});
names.forEach((s) => {
    console.log(s.toUpperCase());
})

// object annotation with optional g parameter
function printCoordinate(pt: { x: number, y: string, g?: string }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's x value is " + pt.y);
    console.log(pt.g?.toUpperCase());
}
printCoordinate({ x: 3, y: "left" });

// union types number or string
function printId(id: number | string) {
    if (typeof id === "string") {
        console.log(`Your ID is: ${id.toUpperCase()}`);
    } else {
        console.log(`Your ID is: ${id}`);
    }
}
printId(101);
printId("202");

// union array version
function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log(`Hello, ${x.join(" and ")}`);
    } else {
        console.log(`Welcome lone traveler ${x}`);
    }
}

// union with similar methods
function getFirstThree(x: number[] | string) {
    return x.slice(0, 3);
}

// type aliases 
type Point = {
    x: number;
    y: number;
}
function printTypeAlias(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printTypeAlias({ x: 100, y: 100 });

// type alias for unions
type ID = number | string;

type userInputSanitizedString = string;

function sanitizeInput(str: string): userInputSanitizedString {
    return sanitize(str);
}
function sanitize(str: string): string {
    return str;
}
function getInput() {
    return "string";
}
let userInput = sanitizeInput(getInput());
userInput = "new input";

// Interfaces

interface IntPoint {
    x: number;
    y: number;
}

function printIntCoords(pt: IntPoint) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printIntCoords({ x: 300, y: 1 });

// type coercion 
// specific type
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

// complex coercion
type exr = string;
type exrTest = number;
// const a = (exr as any) as exrTest;

// Literal Types - forces specific values
let changingString = "Hello World";
changingString = "OlÃ¡ Mundo";

function printText(s: string, alignment: "left" | "right" | "center") {
    console.log(s, alignment);
}
printText("Hello, world", "left");
printText("G'day, mate", "center"); // centre doesn't work
//
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}
//
interface Options {
    width: number;
}
function configure(x: Options | "auto"): number | string {
    if (x === "auto") {
        return x;
    } else {
        return x.width;
    }
}
configure({ width: 100 })
configure("auto");
configure("auto"); // automatic doesn't work

// literal inference
// not sure look up later
const req = { url: "https://example.com", method: "GET" };
function handleRequest(a, b) { }
handleRequest(req.url, req.method);

// null and undefined - strictNullChecks on or off?
// better to leave on to leave out bugs

// strictNullChecks on
function doSomething(x: string | null) {
    if (x !== null) {
        console.log(`Hello ${x.toUpperCase()}`);
    }
}
function liveDangerously(x?: number | null) {
    console.log(x!.toFixed());
}
// enums ...
// narrowing
function padLeft(padding: number | string, input: string): string {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
// typeof type guards
// null is possibly obj..can'r loop through that
function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
        // for (const s of strs) { 
        //     console.log(s);
        // }
    } else if (typeof strs === "string") {
        console.log(strs);
    } else {
        // do nothing
    }
}
// truthiness narrowing
function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
        return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
}

Boolean("hello");
!!"world";

function printAllWithCoercion(strs: string | string[] | null) {
    if (strs && typeof strs === "object") { // added truthy str check, check the truthy version
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    }
}
// check this truthy version to see whats wrong later
function printAllTruthVesion(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function printAllNullCheck(strs: string | string[] | null) {
    if (strs !== null) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
// check this value of truthiness and negation
function multiplyAll(
    values: number[] | undefined,
    factor: number
): number[] | undefined {
    if (!values) {
        return values;
    } else {
        return values.map((x) => x * factor);
    }
}

// equality narrowing
function example(x: string | number, y: string | boolean) {
    if (x === y) {
        x.toUpperCase();
        y.toLowerCase();
    } else {
        console.log(x);
        console.log(y);
    }
}
// >>
interface Container {
    value: number | null | undefined;
}
function multiplyValue(container: Container, factor: number) {
    // Remove both 'null' and 'undefined' from the type.
    if (container.value != null) {
        console.log(container.value);
        // Now we can safely multiply 'container.value'.
        container.value *= factor;
    }
}

// in operator
type Fish = { name?: string, swim: () => void };
type Bird = { name?: string, fly: () => void };

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
// instance of narrowing
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toLowerCase());
    }
}
// assignments
let x = Math.random() < 0.5 ? 10 : "Hello world!";
x = 1; // cannot assign to boolean true/false
console.log(x);
x = "Good bye!";
console.log(x);

// control flow analysis
function exampleControlFlow() {
    let x: string | number | boolean;
    x = Math.random() < 0.5;
    console.log(x);
    if (Math.random() < 0.5) {
        x = "hello";
        console.log(x);
    } else {
        x = 100;
        console.log(x);
    }
    return x;
}
// type predicates
// look into this one i am still confused
function isFish(pet: Fish | Bird): pet is Fish { // pet is fish is predicate
    return (pet as Fish).swim !== undefined;
}
function getSmallPet(test: true | false): Fish | Bird {
    if (test) {
        return { swim: () => void }
    } else {
        return { fly: () => void }
    }
}
let pet = getSmallPet(true);
if (isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()]
const underWater1: Fish[] = zoo.filter(isFish);
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
// The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
    if (pet.name === "sharkey") return false;
    return isFish(pet);
});

// discriminated unions
interface Circle {
    kind: "circle";
    radius: number;
}
interface Square {
    kind: "square";
    sideLength: number;
}
interface Triangle {
    kind: "Triangle";
    sideLength: number;
}


type Shape = Circle | Square; // | triangle not assignable to never due to switch

function getArea(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
}
// never type
// represent a state that should never exist
function getAreaNever(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            const _exhaustiveCheck: never = shape; // the kind should never be a shape
            return _exhaustiveCheck;
    }
}

// function type expressions
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
    fn("Hello World!")
}
function printToConsole(s: string) {
    console.log(s);
}
greeter(printToConsole);

// call signatures - look this up later, i don't fully understand
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
}
function doSomethingSignature(fn: DescribableFunction) {
    console.log((fn.description + " returned " + fn(6)));
}

// construct signatures
type SomeConstructor = {
    new(s: string): someObject; // look this up later
}
function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}
interface CallOrConstruct { // same here
    new(s: string): Date;
    (n?: number): number;
}

// generic functions
// declare type parameter in function signature, type is inferred
function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0]
}

const a = firstElement(["a", "b"])
const b = firstElement([1, 2])
const c = firstElement([])

//Inference - look this up, inputs same as outputs
/*
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): O
return arr.map(func);
}
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
*/

//constraints

function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}
// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
//   const notOK = longest(10, 100);// not okay

// working with constrained values - maybe look

// specifying type arguments
// what does the <Type> do?

function combineArray<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}
const arr = combineArray<string | number>([1, 2, 3], ["hello"]);
// errors

// guidelines for writing good generic functions


// optional parameters -- look into this
function optional(n?: number): void {
    console.log(n.toFixed());
    console.log(n.toFixed(3));
}
optional(3);


// optional parameters in callbacks
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i)
    }
}

myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i))

// function overloads ???
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);


// writing good overloads

function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
    return x.length;
}
// better version
function len2(x: any[] | string) {
    return x.length;
}

// declaring this in a function
const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};

interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
}
const db = getDB();
const admins = db.filterUsers(function (this: User) {
    return this.admin;
});

// other types to know about

function noop() {
    return // void is inferred, is not the same as undefined
}

