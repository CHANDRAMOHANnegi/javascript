const combToPerm = (totalBoxes, totalItems) => {

    const helper = (currentBox, currentAns, totalBoxes, totalItems, itemsSoFar, result) => {
        if (currentBox > totalBoxes) {
            if (itemsSoFar === totalItems) {
                result.push([...currentAns])
            }
            return
        }

        // kisi ko nahi add karunga
        helper(currentBox + 1, [...currentAns, 0], totalBoxes, totalItems, itemsSoFar, result)

        // 1 ko karu, 2 ko karu,....
        for (let i = 1; i <= totalItems; i++) {
            if (!currentAns.includes(i)) {
                helper(currentBox + 1, [...currentAns, i], totalBoxes, totalItems, itemsSoFar + 1, result)
            }
        }
    }
    const result = []
    helper(1, [], totalBoxes, totalItems, 0, result)
    return result
}

// boxes level par hai

console.log(combToPerm(3, 2))

/*****
 * 
 * ye nahi add karne wala option tab ayega, jab boxes jyada ho, items se
 * 
 * jab level par rakha hua jyada ho options se
 * 
 * 
 * itemsSoFar is important here
 * 
 * ***/ 