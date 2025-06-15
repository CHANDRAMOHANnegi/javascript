// pivot should be array Number, not index
const hoarePartition = (nums, low, high) => {
  let l = low;
  let r = high;

  const pivot = nums[Math.floor((low + high) / 2)]; // pivot is array element, not array index
  while (true) {
    while (l <= high && nums[l] < pivot) {
      l++;
    }
    while (r >= low && nums[r] > pivot) {
      r--;
    }

    if (l >= r) return r;
    swap(nums, l, r);
    l++;
    r--;
  }
};

const partition = hoare;

const quickSort = (nums, low, high) => {
  if (low >= high) return nums;
  const pi = partition(nums, low, high);

  quickSort(nums, low, pi);
  quickSort(nums, pi + 1, high);

  return nums;
};
