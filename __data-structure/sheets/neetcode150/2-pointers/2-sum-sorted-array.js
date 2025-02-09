/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/submissions/
 */

var twoSum = function (numbers, target) {
    let left = 0, right = numbers.length - 1

    while (left < right) {
        if (numbers[left] + numbers[right] > target) {
            right--
        } else if (numbers[left] + numbers[right] < target) {
            left++
        } else {
            break
        }
    }

    return [left + 1, right + 1]
};