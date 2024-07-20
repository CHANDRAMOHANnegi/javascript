/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];
  const final = [];
  // sets(candidates, 0, res, final, 0, target);
  // console.log(final);

  // return final;

  console.log(getCount(candidates, 0, res, final, 0, target));
};

function sets(nums, i, res, final, sum, target) {
  if (i === nums.length) {
    // console.log(res);
    if (sum === target) final.push([...res]);
    return;
  }
  res.push(nums[i]);
  sets(nums, i + 1, res, final, sum + nums[i], target);
  res.pop();
  sets(nums, i + 1, res, final, sum, target);
}

function getCount(nums, i, res, final, sum, target) {
  /***
   * get count functions
   * return num in base condition and add
   * */
  if (i === nums.length) {
    // console.log(res);
    if (sum == target) {
      return 1;
    }
    return 0;
  }
  // res.push(nums[i]);
  const first = getCount(nums, i + 1, res, final, sum + nums[i], target);
  // res.pop();
  const sec = getCount(nums, i + 1, res, final, sum, target);

  return first + sec;
}

combinationSum([1, 2, 1, 1, 3], 5);
