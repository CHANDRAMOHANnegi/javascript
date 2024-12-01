/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine = function (n, k) {
    const helper = (currentBox, totalBoxes, totalItems, result, currentAns) => {
        if (currentAns.length === totalItems) {
            result.push([...currentAns])
            return
        }
        if (currentBox > totalBoxes) {
            return
        }

        /****
         * 
         * har level par choice hai ki aunga ya nahi aunga
         * 
         * first level par first box me jaunga ya nahi,
         * 
         * second level me second box ki baat hogi
         * 
         * ***/

        helper(currentBox + 1, totalBoxes, totalItems, result, [...currentAns, currentBox])
        helper(currentBox + 1, totalBoxes, totalItems, result, currentAns)
    }

    const result = []
    helper(1, n, k, result, [])

    return result
};


/****
 * 
 * 
 * levels par boxes hai
 * 
 * 
 * ***/ 