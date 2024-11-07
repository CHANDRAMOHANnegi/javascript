function sort(nums) {
  const res = mergeSort(nums, 0, nums.length - 1);
  console.log("sorted", res);
}

function mergeSort(nums, start, end) {
  if (start >= end) {
      return
  }

  const n = nums.length

  /***
   * 
   * mid = start + (end - start) / 2
   * mid equals start plus half of the length.
   * 
   * both are same => (start / 2) + (end / 2) 
   * 
   * mid = (start + end) / 2
   * mid equals the average of start and end
   * 
   * **/

  const mid = Math.floor((start + end) / 2)

  mergeSort(nums, start, mid)
  mergeSort(nums, mid + 1, end)
  merge2(nums, start, mid, end)
}

function merge(nums, start, mid, end) {
  const n = nums.length

  const finalArray = []

  let i = start
  let j = mid + 1
  while (finalArray.length < n) {
      if (i <= mid && j <= end && nums[i] && nums[j]) {
          if (nums[i] < nums[j]) {
              finalArray.push(nums[i])
              i++
          } else {
              finalArray.push(nums[j])
              j++
          }
      } else if (i <= mid && nums[i]) {
          finalArray.push(nums[i])
          i++
      } else if (j <= end) {
          finalArray.push(nums[j])
          j++
      } else {
          break
      }
  }
  console.log(finalArray);
  for (let i = start; i <= end; i++) {
      nums[i] = finalArray[i - start]
  }
  return nums
}


const arr = [1, 2, 3, 4, 5];

sort(arr.reverse());

// console.log(arr);
