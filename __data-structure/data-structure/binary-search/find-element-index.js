const nums = []

const findIndex = (nums,num,left,right)=>{

    while(left < right){
        let mid = Math.floor((left + right) / 2)
        if(num < nums[mid]){
            right = mid - 1
        }else if(num > nums[mid]){
            // left = mid + 1:
            // important, otherwise infinite loop
            left = mid + 1
        }else{
            return mid
        }
    }

    return right + 1
}


/******
 * 
 * left = mid + 1:
 * When num > nums[mid], left needs to move past mid to avoid an infinite loop. 
 * Otherwise, left will remain stuck at mid, resulting in an endless cycle.
 * 
 * ******/ 


nums[findIndex(nums,num)] = num

console.log(nums);
