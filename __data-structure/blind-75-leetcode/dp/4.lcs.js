/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * https://www.youtube.com/watch?v=0Ql40Llp09E
 */
var longestCommonSubsequence = function (text1, text2) {
    const n1 = text1.length
    const n2 = text2.length

    const dp = Array.from({ length: n1 + 1 }, () => Array(n2 + 1).fill(0));

    for (let i = n1 - 1; i >= 0; i--) {
        for (let j = n2 - 1; j >= 0; j--) {
            const c1 = text1[i]
            const c2 = text2[j]

            if (c1 === c2) {
                dp[i][j] = dp[i + 1][j + 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1])
            }
        }
    }

    return dp[0][0]
};

// https://www.youtube.com/watch?v=0Ql40Llp09E

/******
 * 
 * s1 = c1 + r1
 * s2 = c2 + r2
 * 
 * ****/ 

/*******
 * 
 * !const dp = Array(n1 + 1).fill(Array(n2 + 1).fill(0));
 *
 * This creates an array where each element points to the same subarray, 
 * so changing one subarray affects them all. 
 * all subarrays refer to the same reference.
 * For example, modifying dp[1][1] would inadvertently change the entire column at index 1 in all rows.
 * Proper initialization of a 2D array where each row is an independent array
 * 
 * const dp = Array.from({ length: n1 + 1 }, () => new Array(n2 + 1).fill(0));
 * *******/ 

