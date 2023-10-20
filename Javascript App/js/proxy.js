const obj = { a: 1 };
const handlers = {
    get(target, key, context) {
        console.log("Accessing:", key);
        return Reflect.get(target, key, context);
    }
};
const pobj = new Proxy(obj, handlers);

console.log(obj.a);  // Output: 1
console.log(pobj.a); // Output: Accessing: a
//         1

const messages = [];
const handlers = {
    set(target, key, value) {
        if (typeof value === 'string') {
            value = value.toLowerCase();
            if (target.indexOf(value) === -1) {
                target.push(value);
            }
        }
        return true;
    }
};
const messagesProxy = new Proxy(messages, handlers);

messagesProxy.push("Hello", 42, "World", "World");
console.log(messagesProxy);  // Output: [ 'hello', 'world' ]

const obj = {};
const handlers = {
    get(target, key, context) {
        if (Reflect.has(target, key)) {
            return Reflect.get(target, key, context);
        } else {
            throw new Error("No such property/method!");
        }
    }
};
const pobj = new Proxy(obj, handlers);

pobj.a = 3;
console.log(pobj.a);  // Output: 3
console.log(pobj.b);  // Output: Uncaught Error: No such property/method!
