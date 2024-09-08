
const knapsackRec = (values, weights, n, w) => {
    if (n >= values.length || w === 0) {
        return 0;
    }

    let include = Number.MIN_VALUE;
    if (weights[n] <= w) {
        return Math.max(values[n] +
            knapsackRec(values, weights, n + 1, w - weights[n]),
            knapsackRec(values, weights, n + 1, w));
    }
    return knapsackRec(values, weights, n + 1, w);
};

const knapsackDp = (values, weights, n, w, dp) => {
    if (n >= values.length || w === 0) {
        return 0;
    }

    if (dp[w][n] !== -1) {
        return dp[w][n]
    }

    let include = Number.MIN_VALUE;
    if (weights[n] <= w) {
        return dp[w][n] = Math.max(values[n] +
            knapsackDp(values, weights, n + 1, w - weights[n], dp),
            knapsackDp(values, weights, n + 1, w, dp));
    }
    return dp[w][n] = knapsackDp(values, weights, n + 1, w);
};

const values = [12, 2, 1, 4, 1];
const weights = [4, 2, 1, 10, 2];
const w = 15;

// console.log(knapsackRec(values, weights, 0, w));  // Output should be 17

const dp = Array.from({ length: values.length }, () => (Array.from({ length: w })).map(() => -1))
// console.log(dp);
console.log(knapsackRec(values, weights, 0, w, dp));  // Output should be 17
