const fib_rec = (n) => {
    if (n <= 1)
        return n

    return fib_rec(n - 1) + fib_rec(n - 2)
}
// console.log(fib_rec(40))

const fib_memo = (n, dp) => {
    if (n <= 1) {
        /*****
         * Storing in base case is very important, don't forget, it will be useful in tabulation
         * *****/
        return dp[n] = n
    }

    if (dp[n] != 0)
        return dp[n]

    return dp[n] = fib_memo(n - 1, dp) + fib_memo(n - 2, dp)
}

const fib_tabu = (N, dp) => {
    for (let n = 0; n <= N; n++) {
        if (n <= 1) {
            /*****
             * Storing in base case is very important, don't forget
             * *****/
            dp[n] = n
            continue
        }

        dp[n] = dp[n - 1] + dp[n - 2] // fib_tabu(n - 1, dp) + fib_tabu(n - 2, dp)
    }
    return dp[n]
}

const fib_optimal1 = (n) => {
    let a = 0, b = 1;
    /****
     * if start from 1 then, we have current value in "b", which we set in "a"
     * but we calculate next value
     * so we return "a"
     * ****/
    for (let i = 1; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return a;
}

const fib_optimal2 = (n) => {
    let a = 0, b = 1;
    /*****
     * start from 2
     * *****/
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

const n = 10
const dp = Array.from({ length: n + 1 }, () => 0)

// console.log(fib_memo(n, dp))
// console.log(fib_tabu(n, dp))
// console.log(dp);
console.log(fib_optimal(n))
// console.log(fib_optimal2(n))
