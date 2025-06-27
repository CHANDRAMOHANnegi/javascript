/**
 * @param {number[]} nums
 * @return {number[]}
 */

var majorityElement = function(nums) {
    const n = nums.length
    let count1 = 0, count2 = 0
    let m1 = null, m2= null

    for(const num of nums){
        if(num === m1){
            count1++
        }else if(num === m2){
            count2++
        }else if(count1===0){
            m1 = num
            count1 = 1
        }else if(count2===0){
            m2 = num
            count2 = 1
        }else{
            count1--
            count2--
        }
    }

    count1 = 0
    count2 = 0

    for(const num of nums){
        if(num === m1){
            count1++
        }
        if(num === m2){
            count2++
        }
    }
    const res = []
    if(count1 > n / 3){
        res[0] = m1
    }
    if(count2 > n / 3){
        res.push(m2)
    }

    return res
};