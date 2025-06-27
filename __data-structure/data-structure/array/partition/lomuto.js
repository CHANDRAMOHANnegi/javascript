// pivot should be array Number, not index
const lomutoPartition = (nums, low, high) => {
  const pivot = nums[high];

  let swapIdx = low

  for (let j = low; j < high; j++) {
    if (nums[j] <= pivot) {
      [nums[j], nums[swapIdx]] = [nums[swapIdx], nums[j]]
      swapIdx++
    }
  }

  [nums[j], nums[swapIdx]] = [nums[swapIdx], nums[j]]
  return swapIdx
};

const quickSort = (nums, low, high) => {
  if (low >= high) return nums;
  const pivotIndex = lomutoPartition(nums, low, high);

  quickSort(nums, low, pivotIndex - 1);
  quickSort(nums, pivotIndex + 1, high);

  return nums;
};


/****
 *  Lomuto partition
 * 
 * 1. more swaps,
 * 2. pivot may is always placed in its final sorted position after partition
 * 3. return partition index resulting in two non-overlapping segments
 * 
 * **/