// factorial 
const factorial = n => {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
};

// exponential 
const power = (base, exponent) => {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
};

// fibonacci 
const fib = n => {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
};

// reverse str
const reverseString = str => {
    if (str === "") {
        return "";
    }
    return reverseString(str.substr(1)) + str[0];
};


// Palindrome Check ADA


const isPalindrome = str => {
    if (str.length <= 1) {
        return true;
    }
    return str[0] === str[str.length - 1] && isPalindrome(str.slice(1, -1));
};


// binary search

const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
    if (start > end) {
        return -1;
    }
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, start, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, end);
    }
};
