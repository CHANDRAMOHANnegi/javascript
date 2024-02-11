function sort(nums) {
  const res = mergeSort(nums, 0, nums.length - 1);
  console.log("sorted", res);
}

function mergeSort(nums, start, end) {
  // console.log(start, end);
  if (start >= end) {
    return [nums[start]];
  }
  const n = nums.length;
  // console.log(start, end - start);
  const mid = start + Math.floor((end - start) / 2);
  // console.log(mid);
  const left = mergeSort(nums, start, mid);
  const right = mergeSort(nums, mid + 1, end);

  return merge(left, right);
}

function merge(nums1, nums2) {
  const finalArray = [];
  let k = 0;

  while (nums1.length || nums2.length) {
    if (nums1?.length && nums2.length) {
      if (nums1[k] < nums2[k]) {
        finalArray.push(nums1.shift());
      } else {
        finalArray.push(nums2.shift());
      }
    }
    if (nums1.length && !nums2.length) {
      finalArray.push(nums1.shift());
    }
    if (nums2.length && !nums1.length) {
      finalArray.push(nums2.shift());
    }
    k++;
  }

  return finalArray;
}

const arr = [1, 2, 3, 4, 5];

sort(arr.reverse());

// console.log(arr);
