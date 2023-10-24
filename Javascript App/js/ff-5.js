// Modifying a variable is a side effect
let count = 0;

function incrementCounter() {
    count++;
}

incrementCounter();
console.log(count); // Output: 1




// Side causes: The effect of `bar` depends on `x` from outside
function foo(x) {
    return x + bar(x);
}

var y = 3;

foo(1); // Output: 4




// The `PI` variable is constant and not reassigned
const PI = 3.141592;

function calculateArea(radius) {
    return 2 * PI * radius;
}

calculateArea(3); // Output: 18.849552




// Using Math.random() introduces randomness
function getRandomNumber() {
    return Math.random();
}

console.log(getRandomNumber()); // Output: A random number between 0 and 1





// Simulated I/O with a delay (using setTimeout)
function fetchData(callback) {
    setTimeout(() => {
        const data = "Some data fetched from an API";
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log(data); // Output: "Some data fetched from an API" (after 1 second)
});




// Mathematical Idempotence: Math.abs()
// An idempotent operation where repeated calls produce the same result
const num = -5;
const absoluteValue = Math.abs(num); // absoluteValue is 5
const repeatedAbsolute = Math.abs(Math.abs(num)); // repeatedAbsolute is 5




// Programming Idempotence: Repeated HTTP PUT Requests
// Repeated PUT requests with the same data don't change the outcome
// Emulating an idempotent HTTP operation
const updateResource = (data) => {
    // Logic to update the resource
};

const data = { id: 1, value: 'updated' };
updateResource(data);
updateResource(data); // Repeating the same update has the same result




// Pure Functions: No Side Effects
// A pure function with no side effects
function add(x, y) {
    return x + y;
}

const result1 = add(3, 4); // result1 is 7
const result2 = add(3, 4); // result2 is also 7, same inputs produce the same output




// Referential Transparency: Replacing Function Call
// A function with referential transparency where the call can be replaced
function multiplyBy2(x) {
    return x * 2;
}

const num = 5;
const result1 = multiplyBy2(num); // result1 is 10
const result2 = 10; // Replacing the function call with the result




// Memoization: Caching Function Results
// A memoization example where results are cached for reuse
function fibonacci(n) {
    if (n <= 1) return n;
    if (fibonacci.cache[n] !== undefined) {
        return fibonacci.cache[n]; // Return cached result
    }
    // Calculate and cache the result
    fibonacci.cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return fibonacci.cache[n];
}
fibonacci.cache = {};

const result1 = fibonacci(10); // Calculates and caches Fibonacci(10)
const result2 = fibonacci(10); // Returns the cached result



// Designing functions as pure 
// A pure function that adds two numbers.
function add(a, b) {
    return a + b;
}



// refactoring impure functions
// Impure function with a side effect (modifying the array).
function addMaxNum(arr) {
    var maxNum = Math.max(...arr);
    arr.push(maxNum + 1);
}

var nums = [4, 2, 7, 3];

addMaxNum(nums); // Modifies `nums` array.



// Refactoring to make it pure by moving the side effect outside.
function addMaxNum(arr) {
    var maxNum = Math.max(...arr);
    return maxNum + 1;
}

var nums = [4, 2, 7, 3];

nums.push(addMaxNum(nums)); // `addMaxNum` is now pure.




// encapsulation on effects
// Impure function with a side effect (modifying an object).
var users = {};

function fetchUserData(userId) {
    ajax(`http://some.api/user/${userId}`, function onUserData(user) {
        users[userId] = user;
    });
}

// Creating a wrapper function to encapsulate the side effect.
function safer_fetchUserData(userId, users) {
    users = Object.assign({}, users);
    fetchUserData(userId);
    return users;
}




// Quarantining effects
// Impure function with side effects (mutating an array and variables).
var nums = [];
var smallCount = 0;
var largeCount = 0;

function generateMoreRandoms(count) {
    for (let i = 0; i < count; i++) {
        let num = Math.random();

        if (num >= 0.5) {
            largeCount++;
        } else {
            smallCount++;
        }

        nums.push(num);
    }
}

// Creating an interface function to quarantine side effects.
function safer_generateMoreRandoms(count, initial) {
    var orig = {
        nums,
        smallCount,
        largeCount
    };

    nums = [...initial.nums];
    smallCount = initial.smallCount;
    largeCount = initial.largeCount;

    generateMoreRandoms(count);

    var sides = {
        nums,
        smallCount,
        largeCount
    };

    nums = orig.nums;
    smallCount = orig.smallCount;
    largeCount = orig.largeCount;

    return sides;
}


// avoid effects by copying 
// Impure function that mutates an array of user objects.
function handleInactiveUsers(userList, dateCutoff) {
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].lastLogin == null) {
            userList.splice(i, 1);
            i--;
        } else if (userList[i].lastLogin < dateCutoff) {
            userList[i].inactive = true;
        }
    }
}

// Creating an interface function to avoid effects by copying.
function safer_handleInactiveUsers(userList, dateCutoff) {
    let copiedUserList = userList.map(function mapper(user) {
        return Object.assign({}, user);
    });

    handleInactiveUsers(copiedUserList, dateCutoff);

    return copiedUserList;
}




// managing this references
// An impure function relying on `this` context.
var ids = {
    prefix: "_",
    generate() {
        return this.prefix + Math.random();
    }
}

// Creating an interface function to manage the `this` context.
function safer_generate(context) {
    return ids.generate.call(context);
}

