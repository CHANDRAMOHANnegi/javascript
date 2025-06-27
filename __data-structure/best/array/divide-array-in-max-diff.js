/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < nums.length; i += 3) {
    if (nums[i + 2] - nums[i] > k) {
      return [];
    }
    res.push([nums[i], nums[i + 1], nums[i + 2]]);
  }
  return res;
};

//  sort

// greedy

//
