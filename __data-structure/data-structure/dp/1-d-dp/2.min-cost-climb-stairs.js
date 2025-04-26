/**
 * @param {number[]} cost
 * @return {number}
 */

var climb = function (cost, n) {
    if (n < 0) {
        return 0
    }

    if (n === 0 || n === 1)
        return cost[n]

    const stepOne = climb(cost, n - 1)
    const stepTwo = climb(cost, n - 2)

    /*****
     * const_to_reach_point_n = prev_min_cost + cost_of_point_n
     * 
     * ****/
    return Math.min(stepOne, stepTwo) + cost[n]
}


var climb_dp = function (cost, n, dp) {
    if (n < 0) {
        return dp[n] = 0
    }
    if (n === 0 || n === 1)
        return dp[n] = cost[n]

    /*****
     * {0} is part of solution, so we initiate DP with {-1} 
     * ***/
    if (dp[n] !== -1)
        return dp[n]

    const stepOne = climb_dp(cost, n - 1, dp)
    const stepTwo = climb_dp(cost, n - 2, dp)

    return dp[n] = Math.min(stepOne, stepTwo) + cost[n]
}


var climb_tabu = function (cost, N, dp) {
    /***
     * tabulation is bottom-up, so we always solve smaller problem first,
     * so, loop smart from {0}
     * ***/
    for (let n = 0; n <= N; n++) {
        if (n <= 1) {
            dp[n] = cost[n]
            continue
        }

        const stepOne = dp[n - 1]
        const stepTwo = dp[n - 2]

        dp[n] = Math.min(stepOne, stepTwo) + cost[n]
    }

    return dp[N]
}

var climb_optimal = function (cost, N) {
    let a = cost[0], b = cost[1]

    for (let n = 2; n < N; n++) {
        const c = Math.min(a, b) + cost[n]
        a = b
        b = c
    }

    return Math.min(a, b)
}


var minCostClimbingStairs = function (cost) {
    const n = cost.length
    const newCosts = [...cost, 0]

    /********
     * 
     * why we push "0" element to cost array, because we have to go from (0th element to nth element)
     * array have( n-1) elements to we add a element with cost 0,
     * cost to reach top,
     *  user have to ultimately reach top, not to stand at (n-1)th stair
     * 
     * *****/ 
    
    // return climb(newCosts, newCosts.length - 1)

    /*****
     * {0} is part of solution, so we initiate DP with {-1} for memoization
     * ***/

    // const dp_m = [...Array(newCosts.length)].fill(-1)
    // return climb_dp(newCosts, newCosts.length - 1, dp_m)

    /*****
     * {0} is part of solution, so we initiate DP with {-1} for memoization
     * ***/

    // const dp_t = [...Array(cost.length)].fill(0)
    // climb_tabu(cost, n - 1, dp_t)
    // return Math.min(dp_t[n - 1],dp_t[n - 2])

    return climb_optimal(cost, n)
};


/*******
 * In this question we are starting recursion from reverse order,
 * 
 * 
 * 
 * *******/ 

/**
 * @param {number[]} cost
 * @return {number}
 */

var rec = (cost,n)=>{
    if(n < 0){
        return 0
    }
    if(n === 0 || n === 1){
        return cost[n]
    }

    const stepOne = rec(cost, n - 1)
    const stepTwo = rec(cost, n - 2)

    return Math.min(stepOne,stepTwo) + cost[n]
}

var minCostClimbingStairs = function(cost) {
    // return rec([...cost,0],cost.length)
    return Math.min(rec(cost,cost.length - 1),rec(cost,cost.length - 2))

    /****
     * no of ways to reach ((n-1)th stair  or (n -2)th stair)
     * **/ 
};