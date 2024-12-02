/**
 * @param {number[]} fruits
 * @return {number}
 */

var totalFruit = function(fruits) {
    const freqMap = new Map()
    let basket1 = fruits[0]
    freqMap.set(basket1,1)
    let basket2 = -1
    
    let left = 0
    let max = 1;

    for(let right = 1; right < fruits.length; right++){
        if(fruits[right] === basket1 || fruits[right] === basket2){
            freqMap.set(fruits[right],(freqMap.get(fruits[right]) || 0) + 1)
        }else {
            if(basket2 === -1){
                basket2 = fruits[right]
                freqMap.set(basket2, 1)
            }else{
                while(freqMap.size > 1){
                    const leftFruit = freqMap.get(fruits[left])
                    freqMap.set(fruits[left], leftFruit-1)
                    if(leftFruit - 1 ===0){
                        freqMap.delete(fruits[left])
                        const deletedBasket = fruits[left]
                        if(basket1 === deletedBasket){
                            basket1 = fruits[right]
                        }else if(basket2 === deletedBasket){
                            basket2 = fruits[right]
                        }
                        freqMap.set(fruits[right], 1)
                        break
                    }
                    left++
                }
            }

        }

        max = Math.max(max, (freqMap.get(basket1)||0) + (freqMap.get(basket2)||0))
    }

    return max
};