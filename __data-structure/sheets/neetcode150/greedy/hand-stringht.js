/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */

// 1. each group is of size groupSize. case: (group !== groupSize)
// 2. consecutive cards.
// 3. 

const brute = (hand, groupSize) => {
    let count = 0

    while (count < Math.ceil(hand.length / groupSize)) {
        let group = 0
        let prev = -1
        for (let j = 0; j < hand.length; j++) {
            if (hand[j] != -1) {
                if (prev === -1 || hand[j] === prev + 1) {
                    prev = hand[j]
                    hand[j] = -1
                    group++
                }
            }
            if (group === groupSize) {
                count++
                break
            }
        }
        if (group > 0 && group < groupSize) {
            return false
        }
    }
    return true
}

var isHand = function (hand, groupSize) {
    const map = new Map()
    for (const num of hand) {
        map.set(num, (map.get(num) ?? 0) + 1)
    }

    for (const num of hand) {
        if (map.get(num) > 0) {
            for (let count = 0; count < groupSize; count++) {
                const val = num + count
                if((map.get(val) ?? 0) <= 0){
                    return false
                }
                map.set(val, map.get(val) - 1)
            }
        }
    }

    return true
}


var isNStraightHand = function (hand, groupSize) {
    if (hand.length % groupSize !== 0) {
        return false;
    }
    hand.sort((a, b) => a - b)

    // return brute(hand,groupSize)

    return isHand(hand, groupSize)
};