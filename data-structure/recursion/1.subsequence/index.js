/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];
  const final = [];
  sets(nums, 0, res, final);
  console.log(final);
};

function sets(nums, i, res, final) {
  if (i >= nums.length) {
    // console.log(res);
    final.push([...res]);
    return;
  }
  res.push(nums[i]);
  sets(nums, i + 1, res, final);
  res.pop();
  sets(nums, i + 1, res, final);
}

subsets([1, 2, 3]);
