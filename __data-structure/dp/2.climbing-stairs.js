

const climbing_stairs = (n) => {
    if (n <= 1) {
        return 1
    }

    const wayOne = climbing_stairs(n - 1)
    const wayTwo = climbing_stairs(n - 2)

    return wayOne + wayTwo
}

const climbing_stairs_memo = (n, dp) => {
    if (n <= 1) {
        return dp[n] = 1
    }

    if (dp[n] != 0)
        return dp[n]

    const wayOne = climbing_stairs_memo(n - 1, dp)
    const wayTwo = climbing_stairs_memo(n - 2, dp)

    return dp[n] = wayOne + wayTwo
}

const climbing_stairs_tab = (N, dp) => {
    for (let n = 0; n <= N; n++) {
        if (n <= 1) {
            dp[n] = 1
            continue
        }

        // const wayOne = dp[n - 1]
        // const wayTwo = dp[n - 2]

        dp[n] = dp[n - 1] + dp[n - 2]
    }

    return dp[N]
}

const climbing_stairs_optimal1 = (n) => {
    let a = 1, b = 1;
    for (let i = 1; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return a;
}

const climbing_stairs_optimal2 = (n) => {
    let a = 1, b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}


const n = 5
const dp = [...Array(n)].fill(0)//.from({ length: n + 1 }, () => 0)
// console.log(climbing_stairs(n, 0))
// console.log(climbing_stairs_memo(n, dp))
console.log(climbing_stairs_tab(n, dp))
console.log(dp);
