// 1. Calculate the sum of two numbers.
const sum = 3 + 4;

// 2. Find the difference between two numbers.
const difference = 7 - 2;

// 3. Multiply two numbers to gether.
const product = 5 * 6;

// 4. Divide one number by another.
const quotient = 10 / 2;

// 5. Calculate the remainder when dividing 15 by 4.
const remainder = 15 % 4;

// 6. Round a floating-point number to two decimal places.
const roundedNumber = 3.456.toFixed(2);

// 7. Generate a random integer between 1 and 100.
const randomInt = Math.floor(Math.random() * 100) + 1;

// 8. Calculate the square root of a number.
const squareRoot = Math.sqrt(25);

// 9. Find the value of Pi (π).
const pi = Math.PI;

// 10. Calculate the sine of an angle in degrees.
const degrees = 30;
const radians = (degrees * Math.PI) / 180;
const sineValue = Math.sin(radians);

// 11. Calculate the cosine of an angle in degrees.
const cosineValue = Math.cos(radians);

// 12. Calculate the tangent of an angle in degrees.
const tangentValue = Math.tan(radians);

// 13. Calculate the natural logarithm of a number.
const naturalLog = Math.log(10);

// 14. Calculate the base 10 logarithm of a number.
const logBase10 = Math.log10(100);

// 15. Raise a number to a specific power.
const power = Math.pow(2, 3);

// 16. Calculate the absolute value of a number.
const absoluteValue = Math.abs(-7.5);

// 17. Find the smallest value among a set of numbers.
const minNumber = Math.min(3, 1, 4, 2);

// 18. Find the largest value among a set of numbers.
const maxNumber = Math.max(8, 6, 9, 7);

// 19. Round a number up to the nearest integer.
const roundedUp = Math.ceil(4.3);

// 20. Round a number down to the nearest integer.
const roundedDown = Math.floor(4.7);

// 21. Get the integer part of a floating-point number.
const integerPart = parseInt("7.8");

// 22. Check if a value is NaN (Not-a-Number).
const isNotANumber = isNaN("Hello");

// 23. Convert a number to a string.
const numAsString = 42.5.toString();

// 24. Check if a number is finite (neither NaN nor Infinity).
const isFiniteNumber = isFinite(3.14);

// 25. Check if a number is Infinity.
const isInfinity = isFinite(1 / 0);

// Question 1: Calculate the sum of 3 and 4.
const addition = 3 + 4;

// Question 2: Find the result of subtracting 2 from 7.
const subtraction = 7 - 2;

// Question 3: Multiply 5 by 6.
const multiplication = 5 * 6;

// Question 4: Divide 10 by 2.
const division = 10 / 2;

// Question 5: Calculate the remainder when dividing 15 by 4.
const remainder = 15 % 4;

// Question 6: Round the number 5.6789 to two decimal places.
const rounded = 5.6789.toFixed(2);

// Question 7: Generate a random integer between 1 and 10.
const randomNum = Math.floor(Math.random() * 10) + 1;

// Question 8: What is the value of Pi (π)?
const pi = Math.PI;

// Question 9: Find Euler's number (e).
const euler = Math.E;

// Question 10: Convert 30 degrees to radians.
const degrees = 30;
const radians = (degrees * Math.PI) / 180;

// Question 11: Calculate the sine of 30 degrees.
const sineValue = Math.sin(radians);

// Question 12: Calculate the cosine of 30 degrees.
const cosineValue = Math.cos(radians);

// Question 13: Calculate the tangent of 30 degrees.
const tangentValue = Math.tan(radians);

// Question 14: Find the natural logarithm of 10.
const naturalLog = Math.log(10);

// Question 15: Calculate the base 10 logarithm of 100.
const logBase10 = Math.log10(100);

// Question 16: Calculate 2 to the power of 5.
const power = Math.pow(2, 5);

// Question 17: Find the absolute value of -5.5.
const absoluteValue = Math.abs(-5.5);

// Question 18: Determine the larger of 3.2 and 3.5.
const maxNumber = Math.max(3.2, 3.5);

// Question 19: Determine the smaller of 3.2 and 3.5.
const minNumber = Math.min(3.2, 3.5);

// Question 20: Round 4.3 up to the nearest integer.
const ceilValue = Math.ceil(4.3);

// Question 21: Round 4.7 down to the nearest integer.
const floorValue = Math.floor(4.7);

// Question 22: Get the integer part of 7.8.
const integerPart = parseInt("7.8");

// Question 23: Check if "Hello" is a Not-a-Number (NaN).
const isNotANumber = isNaN("Hello");

// Question 24: Check if 3.14 is a finite number.
const isFiniteNumber = isFinite(3.14);

// Question 25: Check if 1/0 results in Infinity.
const isInfinity = isFinite(1 / 0);

// Question 26: Calculate the square root of 25.
const squareRoot = Math.sqrt(25);

// Question 27: Calculate 2 * 2 * 2 * 2 * 2.
const pow2 = Math.pow(2, 5);

// Question 28: Find the cube root of 27.
const cubeRoot = Math.cbrt(27);

// Question 29: Calculate the hypotenuse of a right triangle with legs of length 3 and 4.
const hypotenuse = Math.hypot(3, 4);

// Question 30: Convert the value 123 to a binary string.
const binaryString = (123).toString(2);

// Question 31: Find the maximum of two numbers using a ternary operator.
const a = 10, b = 15;
const max = (a > b) ? a : b;

// Question 32: Find the minimum of two numbers without using Math.min.
const minWithoutMath = (a < b) ? a : b;

// Question 33: Calculate the factorial of 5 (5!).
const factorial = function (n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
};
const factorialOf5 = factorial(5);

// Question 34: Calculate the sum of all integers from 1 to 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}

// Question 35: Swap the values of two variables without using a temporary variable.
let x = 10, y = 20;
x = x + y;
y = x - y;
x = x - y;

// Question 36: Perform a bitwise AND operation between 5 and 3.
const bitwiseAnd = 5 & 3;

// Question 37: Perform a bitwise OR operation between 5 and 3.
const bitwiseOr = 5 | 3;

// Question 38: Calculate 2 to the power of 10 using a bitwise left shift.
const powerUsingBitwise = 2 << 9;

// Question 39: Determine if a number is even or odd.
const isEven = (n % 2 === 0);

// Question 40: Check if a number is a prime number.
const isPrime = function (n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
};
const primeCheck = isPrime(29);

// Question 41: Calculate the Fibonacci sequence up to the 10th term.
const fibonacci = function (n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
};
const fibonacciSeq = fibonacci(10);

// Question 42: Calculate the square of 7 using exponentiation.
const square = 7 ** 2;

// Question 43: Calculate the cube of 3 using exponentiation.
const cube = 3 ** 3;

// Question 44: Check if a number is a perfect square.
const isPerfectSquare = function (n) {
    const sqrt = Math.sqrt(n);
    return Math.floor(sqrt) ** 2 === n;
};
const perfectSquareCheck = isPerfectSquare(25);

// Question 45: Calculate the greatest common divisor (GCD) of two numbers.
const gcd = function (a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
};
const gcdResult = gcd(48, 18);

// Question 46: Calculate the least common multiple (LCM) of two numbers.
const lcm = function (a, b) {
    return (a * b) / gcd(a, b);
};
const lcmResult = lcm(12, 18);

// Question 47: Check if a number is a palindrome (reads the same forwards and backwards).
const isPalindrome = function (n) {
    return n.toString() === n.toString().split('').reverse().join('');
};
const palindromeCheck = isPalindrome(121);

// Question 48: Convert a binary number "1010" to decimal.
const binaryToDecimal = parseInt("1010", 2);

// Question 49: Convert a decimal number to binary.
const decimalToBinary = (42).toString(2);

// Question 50: Calculate the square root of 2 using the Babylonian method.
const babylonianMethod = function (n) {
    let guess = n / 2;
    for (let i = 0; i < 10; i++) {
        guess = 0.5 * (guess + n / guess);
    }
    return guess;
};
const sqrt2 = babylonianMethod(2);

