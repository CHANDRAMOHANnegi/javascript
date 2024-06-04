// https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    const n = cardPoints.length

    let sum = 0

    let left = k - 1
    let right = n - 1

    for (let i = 0; i <= left; i++) {
        sum += cardPoints[i]
    }

    let max = sum

    /**
     * yaha par mene max ko 0, se initialize kar diya tha,
     * 
     * to dhyan rakhna hai,
     * 
     * aadat hai, lekin har variable ka alag se sochna hai
     * 
     * GOOD
     * */

    while (left >= 0) {
        sum = sum - cardPoints[left--] + cardPoints[right--]
        max = Math.max(max, sum)
    }

    return max
};


/**
 * 
 * T -> O(2k)
 * S -> O(1)
 * 
 * **/ 