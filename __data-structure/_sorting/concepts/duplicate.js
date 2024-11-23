/**
 * @param {number[]} nums
 * @return {number}
 */

//  [1,3,4,2,2]
//  []

var findDuplicate = function (nums) {
    let slow = 0
    let fast = 0

    slow = nums[slow]
    fast = nums[nums[fast]]

    while (slow != fast) {
        slow = nums[slow]
        fast = nums[nums[fast]]
    }

    let point1 = 0
    let point2 = slow

    while (point1 != point2) {
        point1 = nums[point1]
        point2 = nums[point2]
    }

    return point1
};

/*****
 *
 * think of this array as linked list
 * where every element is index of next elements
 * and point towards next elements
 * 
 * **/ 