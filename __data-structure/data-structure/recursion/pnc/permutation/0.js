/**
 * @param {number[]} nums
 * @return {number[][]}
 * https://www.youtube.com/watch?v=QKkHCS5bq0I&list=PL-Jc9J83PIiHO9SQ6lxGuDsZNt2mkHEn0&index=20
 * 
 * Items decide at each level which box to choose
 */

var permute = function (nums) {
    const helper = (nums, idx, result, box) => {
        if (idx === nums.length) {
            result.push([...box])
            return
        }

        for (let i = 0; i < box.length; i++) {
            /****
             * nums[idx] ke pass choices hai ki vo kon se box me jaye, to isi liye nums[idx] ko har box me daal ke call lagate hai
             * 
             * ***/
            if (box[i] === false) {
                /****
                 * pehle box me dala and aage call laga di, usi item ko phir doosre box me dala and call laga di
                 * */ 
                box[i] = nums[idx]
                /***
                 * Items decide at each level which box to choose
                 * **/
                helper(nums, idx + 1, result, box)
                box[i] = false
            }
        }
    }

    const result = []
    const box = Array(nums.length).fill(false)
    helper(nums, 0, result, box)

    return result
};

/****
 * https://www.youtube.com/watch?v=QKkHCS5bq0I&list=PL-Jc9J83PIiHO9SQ6lxGuDsZNt2mkHEn0&index=20
 * 
 * permutations me levels par items hai and options me boxes
 * 
 * ***/ 

console.log(permute([1,2,3]))
