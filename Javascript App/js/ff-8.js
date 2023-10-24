// Recursive function example: foo
function foo(x) {
    if (x < 5) return x;
    return foo(x / 2);
}

// Visualizing the recursion process for foo(16)
// Step 1: Initial call with x=16
// Step 2: x/2 produces 8, recursive call foo(8)
// Step 3: 8/2 produces 4, recursive call foo(4)
// Step 4: Base condition met (x=4<5), returns 4
// The returned value cascades back through the function calls



// Recursive function to check if a number is prime
function isPrime(num, divisor = 2) {
    if (num < 2 || (num > 2 && num % divisor == 0)) {
        return false;
    }
    if (divisor <= Math.sqrt(num)) {
        return isPrime(num, divisor + 1);
    }
    return true;
}
// Example usage: isPrime(7) returns true (7 is a prime number)




// Recursive function to calculate Fibonacci number
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 2) + fib(n - 1);
}
// Example usage: fib(5) returns 5 (Fibonacci sequence: 0, 1, 1, 2, 3, 5, ...)





// Mutual recursive functions to check if a number is odd or even

function isOdd(v) {
    if (v === 0) return false;
    return isEven(Math.abs(v) - 1);
}

function isEven(v) {
    if (v === 0) return true;
    return isOdd(Math.abs(v) - 1);
}
// Example usage: isOdd(5) returns true, isEven(6) returns true



// Recursive function to find the maximum even number in a list
function maxEven(num1, ...restNums) {
    var maxRest = restNums.length > 0 ? maxEven(...restNums) : undefined;
    return (num1 % 2 != 0 || num1 < maxRest) ? maxRest : num1;
}
// Example usage: maxEven(1, 10, 3, 2) returns 10 (the largest even number in the list)



// Definition of a binary tree node
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Recursive function to calculate the depth of a binary tree
function depth(node) {
    if (node) {
        let depthLeft = depth(node.left);
        let depthRight = depth(node.right);
        return 1 + Math.max(depthLeft, depthRight);
    }
    return 0;
}

// Example usage: 
// Construct a binary tree: 
//      1
//     / \
//    2   3
//   / \
//  4   5
const rootNode = new TreeNode(1);
rootNode.left = new TreeNode(2);
rootNode.right = new TreeNode(3);
rootNode.left.left = new TreeNode(4);
rootNode.left.right = new TreeNode(5);

// Calculate depth of the binary tree
// depth(rootNode) returns 3 (the longest path from root to leaf is 1 -> 3)





// Example 1: Basic Function Call
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Alice"); // Calls the greet function with "Alice"



// Example 2: Call Stack
function multiply(a, b) {
    return a * b;
}

function squareAndPrint(x) {
    const squared = multiply(x, x);
    console.log(`The square of ${x} is ${squared}`);
}

squareAndPrint(4); // Calls squareAndPrint, which in turn calls multiply


// Example 3: Recursion
function countDown(num) {
    if (num <= 0) {
        console.log("Done!");
    } else {
        console.log(num);
        countDown(num - 1); // Recursive call
    }
}

countDown(5); // Calls countDown function recursively to count down from 5



// Example 4: Tail Call
function factorial(n, result = 1) {
    if (n <= 1) {
        return result;
    }
    return factorial(n - 1, n * result); // Tail call
}

const result = factorial(5); // Calls factorial with a tail call
console.log(`Factorial: ${result}`);





// Example 5: Proper Tail Calls (PTC)
"use strict";

function properTailCallExample(x, y) {
    return x ? foo(y) : bar(y); // PTC form
}

function foo(y) {
    return y + 1;
}

function bar(y) {
    return y - 1;
}

const result = properTailCallExample(true, 5);
console.log(`Result: ${result}`);



// replacing the stack
function sum(num1, num2, ...nums) {
    num1 = num1 + num2;
    if (nums.length == 0) return num1;
    return sum(num1, ...nums);
}



// continuation passing style, multiple recursions
function fib(n, cont = identity) {
    if (n <= 1) return cont(n);
    return fib(n - 2, n2 => fib(n - 1, n1 => cont(n2 + n1)));
}


function fib(n, cont) {
    if (cont === undefined) {
        cont = identity;
    }

    if (n <= 1) {
        return cont(n);
    } else {
        return fib(n - 2, function (n2) {
            return fib(n - 1, function (n1) {
                return cont(n2 + n1);
            });
        });
    }
}

function identity(x) {
    return x;
}



// trampoline

function trampoline(fn) {
    return function trampolined(...args) {
        var result = fn(...args);

        while (typeof result === "function") {
            result = result();
        }

        return result;
    };
}

function sum(num1, num2, ...nums) {
    num1 = num1 + num2;
    if (nums.length === 0) {
        return num1;
    }
    return () => sum(num1, ...nums);
}

var trampolineSum = trampoline(sum);

var xs = [];
for (let i = 0; i < 20000; i++) {
    xs.push(i);
}

var result = trampolineSum(...xs);
console.log(result); // 199990000
