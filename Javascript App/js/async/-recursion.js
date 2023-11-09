function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const n = 10;
console.log(`Fibonacci(${n}): ${fibonacci(n)}`);



function isPowerOfThree(n) {
    if (n === 1) {
        return true;
    }
    if (n < 1 || n % 3 !== 0) {
        return false;
    }
    return isPowerOfThree(n / 3);
}

const num = 27;
console.log(`${num} is a power of three: ${isPowerOfThree(num)}`);

