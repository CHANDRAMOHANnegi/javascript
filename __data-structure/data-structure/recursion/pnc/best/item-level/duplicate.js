/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const perMute = (boxes,itemIndex,nums,result,map)=>{
    if(itemIndex >= boxes.length){
        result.push([...boxes])
        return
    }
    const lastIndex = map.get(nums[itemIndex])
    for(let box = lastIndex + 1; box < boxes.length; box++){
        if(boxes[box] === false){
            boxes[box] = nums[itemIndex]
            map.set(nums[itemIndex],box)
            perMute(boxes,itemIndex + 1,nums,result,map)
            map.set(nums[itemIndex],lastIndex)
            boxes[box] = false
        }
    }
}

var permuteUnique = function(nums) {
    const boxes = Array(nums.length).fill(false)
    const result = []
    const map = new Map()
    nums.forEach(num=>map.set(num,-1))
    perMute(boxes,0,nums,result,map)
    // console.log(result)
    return result
};