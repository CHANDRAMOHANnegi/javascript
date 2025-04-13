/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(height) {
    let ll = 0
    let largeOnLeft = []

    let i = 0
    while(i < height.length){
        let m = height[i]
        if(ll < height[i]){
            ll = height[i]
        }
        largeOnLeft[i]= ll
        i++
    }

    // largeOnLeft.unshift(0)

    let largeOnRight = []
    let j = height.length - 1
    let lr = height[j]
    while(j >= 0){
        let m = height[j]
        if(lr < height[j]){
            lr = height[j]
        }
        largeOnRight[j]= lr
        j--
    }

    // largeOnRight.push(0)

    let water = 0
    for(let k = 0; k < height.length; k++){
        const level = Math.min(largeOnLeft[k],largeOnRight[k]) 
        if(height[k] < level){
            water += level - height[k]
        }
    }

    return water
};