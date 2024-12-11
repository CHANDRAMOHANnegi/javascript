/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine = function (n, k) {
    const helper = (currentBox, currentAns, totalBoxes, totalItems, result) => {
        if (currentBox > totalBoxes) {
            console.log(currentAns);
            if (currentAns.length === totalItems) {
                result.push([...currentAns])
                return
            }
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

        helper(currentBox + 1, [...currentAns, currentBox], totalBoxes, totalItems, result)
        helper(currentBox + 1, [...currentAns, 0], totalBoxes, totalItems, result)
    }

    const result = []
    helper(1, [], n, k, result)

    return result
};

console.log(combine(4, 2));



/****
 * 
 * 
 * levels par boxes hai
 * 
 * 
 * ***/ 