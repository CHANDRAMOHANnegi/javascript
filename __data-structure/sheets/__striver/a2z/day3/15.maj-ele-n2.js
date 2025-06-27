
// Approach 3: Moore Voting Algorithm
// Intuition:
// The intuition behind the Moore's Voting Algorithm is based on the fact that if there is a majority element in an array,
// it will always remain in the lead, even after encountering other elements.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let count = 1
    let element = nums[0]

    for (let i = 1; i < nums.length; i++) {
        count += nums[i] === element ? 1 : -1
        if (count == 0) {
            count = 1
            element = nums[i]
        }
    }
    return element
};

// You may assume that the majority element always exists in the array.
// otherwise we will have to verify it also

