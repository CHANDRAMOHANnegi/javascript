// https://www.youtube.com/watch?v=JfinxytTYFQ

/**
 * @param {number[]} nums
 * @return {number}
 */

//   [3,4,-1,1]

var firstMissingPositive = function (nums) {
  // remove all out of bound num, conveert thenm to 0
  // [3,4,0,1]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 || nums[i] > nums.length) {
      nums[i] = 0;
    }
  }

  // mark if the number exist in array
  // [3,4,0,1]
  // [-3,4, -5, -1]
  for (let i = 0; i < nums.length; i++) {
    let val = Math.abs(nums[i]);
    if (val > 0 && val <= nums.length) {
      if (nums[val - 1] === 0) {
        nums[val - 1] = -1 * (nums.length + 1);
      } else if (nums[val - 1] > 0) {
        nums[val - 1] = -nums[val - 1];
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      // 0 hai to matlab number exist nahi karta
      return i + 1;
    }
  }

  return nums.length + 1;
};

// 1. remove all out of bound numbers, set them to 0
// 2. to mark

/*************************/
/*************************/
/*************************/
/*************************/
/*************************/

const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

var firstMissingPositive = function (nums) {
  const n = nums.length;
  let i = 0;

  while (i < n) {
    if (nums[i] <= 0 || nums[i] > n) {
      i++;
      continue;
    }
    const index = nums[i] - 1;
    if (nums[index] !== nums[i]) {
      swap(nums, index, i);
    } else {
      i++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      // 0 hai to matlab number exist nahi karta
      return i + 1;
    }
  }

  return n + 1;
};
