/**
 * @param {number[]} heights
 * @return {number}
 */

const getNextSmallestElementIndexOnLeft = (heights)=>{
    let stack = []
    let res = [-1]
    let idx = 1
    while(idx < heights.length){
        if(stack.length && heights[idx] <= heights[stack[stack.length - 1]]){
            stack.pop()
        }else{
            res.push(stack.length ? stack[stack.length - 1]  : -1)
            stack.push(idx)
            idx++
        }
    }
   return res
}


const getNextSmallestElementIndexOnRight = (heights)=>{
    let stack = [heights.length - 1]
    let res = Array(heights.length).fill(heights.length)
    let idx = heights.length - 2

    while(idx >= 0){
        if(stack.length && heights[idx] <= heights[stack[stack.length - 1]]){
            stack.pop()
        }else{
            res[idx]=stack.length ? stack[stack.length - 1] : heights.length - 1
            stack.push(idx)
            idx--
        }
    }
   return res
}


var largestRectangleArea = function(heights) {
    const smallestOnLeft = getNextSmallestElementIndexOnLeft(heights)
    const smallestOnRight = getNextSmallestElementIndexOnRight(heights)

    console.log(smallestOnLeft,smallestOnRight)

  return  Math.max(...heights.map((height,idx)=>{
        let  left = smallestOnLeft[idx]
        let  right = smallestOnRight[idx]

        return height * (right - left - 1)
    }))

};