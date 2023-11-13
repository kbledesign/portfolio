const fib = n => {
    if (n <= 1) {
        return n
    }
    return fib(n - 1) + fib(n - 2);
}




// full sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21



const memo = {};

const fibonacci = num => {
    let returnValue;

    if (memo[num]) {
        returnValue = memo[num];
    } else if (num === 0 || num === 1) {
        returnValue = num;
    } else {
        returnValue = fibonacci(num - 1) + fibonacci(num - 2);
        memo[num] = returnValue;
    }
    return returnValue;
}

// Test your code with calls here:
console.log(fibonacci(20));
console.log(fibonacci(200));





{
    const recursiveKnapsack = function (weightCap, weights, values, i) {
        // Base case: If the knapsack cannot hold any more weight (weightCap is 0) or there are no more items to consider (i is 0), return 0.
        if (weightCap === 0 || i === 0) {
            return 0;
        } else if (weights[i - 1] > weightCap) {
            // If the weight of the current item is greater than the remaining capacity of the knapsack, skip this item and move to the next.
            return recursiveKnapsack(weightCap, weights, values, i - 1);
        } else {
            // Calculate the value if the current item is included and if it is excluded, then return the maximum of these two values.
            const includeItem = values[i - 1] + recursiveKnapsack(weightCap - weights[i - 1], weights, values, i - 1);
            const excludeItem = recursiveKnapsack(weightCap, weights, values, i - 1);
            return Math.max(includeItem, excludeItem);
        }
    };

    let weightCap = 5;
    let weights = [1, 3, 5];
    let values = [250, 300, 500];
    console.log(recursiveKnapsack(weightCap, weights, values, values.length));

}
// 500
// 300 250

// 250







const dynamicKnapsack = function (weightCap, weights, values) {
    // Get the number of items
    const n = weights.length;

    // Create a memoization table with dimensions (n + 1) x (weightCap + 1)
    const memo = Array.from({ length: n + 1 }, () => Array(weightCap + 1).fill(-1));

    // Define a helper function for recursive calls with memoization
    function knapsackHelper(weightCap, weights, values, i) {
        // Base case: If there are no items or the knapsack cannot hold any more weight, return 0.
        if (i === 0 || weightCap === 0) {
            return 0;
        }

        // If the result for the current combination is already memoized, return it
        if (memo[i][weightCap] !== -1) {
            return memo[i][weightCap];
        }

        // If the weight of the current item is greater than the remaining capacity of the knapsack, skip this item and move to the next.
        if (weights[i - 1] > weightCap) {
            memo[i][weightCap] = knapsackHelper(weightCap, weights, values, i - 1);
        } else {
            // Calculate the value if the current item is included and if it is excluded, then return the maximum of these two values.
            const includeItem = values[i - 1] + knapsackHelper(weightCap - weights[i - 1], weights, values, i - 1);
            const excludeItem = knapsackHelper(weightCap, weights, values, i - 1);
            memo[i][weightCap] = Math.max(includeItem, excludeItem);
        }

        // Return the calculated result
        return memo[i][weightCap];
    }

    // Call the helper function with the initial parameters
    return knapsackHelper(weightCap, weights, values, n);
};

// Given inputs
let weightCap = 5;
let weights = [1, 3, 5];
let values = [250, 300, 500];

// Output sample
console.log(dynamicKnapsack(weightCap, weights, values)); // Output: 500






























// Test the function
{
    const dynamicKnapsack = function (weightCap, weights, values) {
        const numItems = weights.length;
        const matrix = new Array(numItems + 1);

        for (let index = 0; index <= numItems; index++) {
            matrix[index] = new Array(weightCap + 1);

            for (let weight = 0; weight <= weightCap; weight++) {
                // Base case: if no items or no weight, set the element to 0
                if (index === 0 || weight === 0) {
                    matrix[index][weight] = 0;
                } else if (weights[index - 1] <= weight) {
                    // If the weight of the current item can be included
                    const includeItem = values[index - 1] + matrix[index - 1][weight - weights[index - 1]];
                    const excludeItem = matrix[index - 1][weight];
                    // Set the element to the maximum value of including or excluding the item
                    matrix[index][weight] = Math.max(includeItem, excludeItem);
                } else {
                    // If the weight of the current item exceeds the available weight
                    matrix[index][weight] = matrix[index - 1][weight];
                }
            }
        }

        // Return the element at the bottom right of the matrix
        return matrix[numItems][weightCap];
    };

    let weightCap = 50;
    let weights = [31, 10, 20, 19, 4, 3, 6];
    let values = [70, 20, 39, 37, 7, 5, 10];
    console.log(dynamicKnapsack(weightCap, weights, values));
}
// Export the function for testing
module.exports = dynamicKnapsack;
