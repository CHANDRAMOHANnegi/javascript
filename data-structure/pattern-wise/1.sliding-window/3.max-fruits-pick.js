// https://leetcode.com/problems/fruit-into-baskets/submissions/1274046494/

/**
 * @param {number[]} fruits
 * @return {number}
 */

var totalFruit = function(fruits) {
    let buckStart =0 
    let buckEnd = 0 

    let max = 0 
    const map = new Map()
    while(buckEnd<fruits.length){
        const currentType = map.get(fruits[buckEnd])
        // add fruit
        map.set(fruits[buckEnd],currentType ? currentType + 1 : 1)

        // if added third type, remove the old fruits till 2 types are left
        while(map.size > 2){
            const first= fruits[buckStart]
            const count = map.get(first)
            map.set(first,map.get(first)-1)
            if(map.get(first)==0){
                map.delete(first)
            }
          buckStart++
        }
        max=Math.max(max,buckEnd-buckStart+1);
        buckEnd++
    }
    return max
};

/***
 * 
 * adding fruits and then removing one of the type of fruit
 * 
 * The mistake i was doing was to add till end, and again start whole loop from start
 * 
 * which was giving TLE
 * 
 * **/ 