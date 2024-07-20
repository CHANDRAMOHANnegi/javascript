function sum(n) {
  if (n == 0) {
    return 0;
  }
  return n + sum(n - 1);
}

// console.log(sum(10));

/**
 *
 * reverse array
 * */

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function reverse(nums, i) {
  const n = nums.length;

  if (i > Math.floor(n / 2)) {
    return;
  }

  reverse(nums, i + 1);
  swap(nums, i, n - i - 1);
}

const nums = [1, 2, 3, 4, 5];
reverse(nums, 0);
console.log(nums);
