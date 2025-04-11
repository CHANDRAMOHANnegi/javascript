/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */


var reverseStr = function (str, k) {
    const s = [...str]

    for (let i = 0; i < str.length; i += 2 * k) {
         /***
          * i += 2 * k
          * i += k
          * here this loop trick is good
          * **/ 
        let left = i
        let right = Math.min(s.length - 1, i + k - 1) // here this out of bound trick is good

        while (left <= right) {
            const temp = s[left]
            s[left] = s[right]
            s[right] = temp
            right--
            left++
        }
    }

    return s.join("")
};