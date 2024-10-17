//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number[]} dep
 * @param {number} n
 * @returns {number}
*/

class Solution {
    //Function to find the minimum number of platforms required at the
    //railway station such that no train waits.
    findPlatform(arr, dep, n) {
        arr.sort((a, b) => a - b)
        dep.sort((a, b) => a - b)

        // console.log(arr,dep)

        /****
         * use two pointer
         * 
         * **/

        let inn = 1;
        let out = 0;

        let platforms = 1;
        let max = 1

        while (out < n) {
            if (arr[inn] <= dep[out]) {
                platforms++
                inn++
            } else {
                platforms--
                out++
            }
            max = Math.max(max, platforms)
        }

        return max
    }
}