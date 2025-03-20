/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// sort in asc
// 3 pointers
// check if sum is less than 0, increase left
// check if sum is more than 0, decrease right

var threeSum = function(nums) {
    nums.sort((a,b)=>a - b)
    const result = []
    let start = 0

    while(start < nums.length){
        let left = start + 1
        let right = nums.length - 1
        while(nums[start]===nums[start + 1])start++// remove duplicates

        while(left < right){
            const sum = nums[start] + nums[left] + nums[right]
            if(sum === 0){
                result.push([nums[start] , nums[left] , nums[right]])
                while(nums[left]===nums[left + 1])left++// remove duplicates
                while(nums[right]===nums[right - 1])right--// remove duplicates
                left++
                right--
                //  move both inward to remove duplicate because there can be only one combination of numbers which completes the sum
            }else if(sum > 0){
                right--
            }else {
                left++
            }
        }
        start++
    }

    return result
};