/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const leftProduct = Array.from({ length: n });
  leftProduct[0] = nums[0];

  const res = Array.from({ length: n });

  for (let i = 1; i < n; i++) {
    leftProduct[i] = leftProduct[i - 1] * nums[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i > 0; i--) {
    res[i] = leftProduct[i - 1] * rightProduct;
    rightProduct = rightProduct * nums[i];
  }

  res[0] = rightProduct;

  return res;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/******
 *
 * better
 * faster
 *
 *
 * **/
var productExceptSelf = function (nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
};
