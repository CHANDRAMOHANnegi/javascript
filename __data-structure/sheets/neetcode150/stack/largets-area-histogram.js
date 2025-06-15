/**
 * @param {number[]} heights
 * @return {number}
 */

const nextSmallerToLeft = (nums) => {
  const n = nums.length;
  const stack = [];
  const res = Array(n).fill(-1);

  let idx = 0;

  while (idx < n) {
    while (stack.length && nums[idx] <= nums[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length) {
      res[idx] = stack[stack.length - 1];
    }
    stack.push(idx);
    idx++;
  }
  return res;
};

const nextSmallerToRight = (nums) => {
  const n = nums.length;
  const stack = [];
  const res = Array(n).fill(-1);

  let idx = n - 1;

  while (idx >= 0) {
    while (stack.length && nums[idx] <= nums[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length) {
      res[idx] = stack[stack.length - 1];
    }
    stack.push(idx);
    idx--;
  }
  return res;
};

// [  2 ,  1, 5, 6,  2,   3]
// [ -1,  -1, 1, 2,  1,   4]
// [  1,  -1, 4, 4, -1, -1]

var largestRectangleArea = function (heights) {
  const smallerToRight = nextSmallerToRight(heights);
  const smallerToLeft = nextSmallerToLeft(heights);

  // console.log(smallerToLeft , smallerToRight,)

  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    let rightmin = smallerToRight[i];
    let leftmin = smallerToLeft[i];

    if (rightmin < 0) {
      rightmin = heights.length;
    }

    // console.log(rightmin,leftmin)

    const area = (rightmin - leftmin - 1) * heights[i];
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
};
