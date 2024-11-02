/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var removeDuplicates = function (s, k) {
    const stack = []
    stack.push(s[0])

    let idx = 1

    while (idx <= s.length) {
        if (s[idx] !== stack[stack.length - 1]) {
            const ele = s[idx - 1]
            let jdx = 0

            while (jdx < k && stack[stack.length - 1] === ele) {
                stack.pop()
                jdx++
            }
            if (jdx < k) {
                while (jdx > 0) {
                    stack.push(ele)
                    jdx--
                }
            } else {
                /****
                if we have removed k elements, again look for last ke elements
                *****/
                continue
            }
        }
        stack.push(s[idx])
        idx++
    }

    return stack.join("")
};

/****
 * proper debugging is required
 * ***/ 


// "wilddddddddddgooowwwwwwwwwwoooossssssssssoccccccchhhhhhhhhhcccccccccccccooryyyyyyyffffffffffyyynaicv"

/****
 * 
 * 7 c + 13 c = 20c
 * we only removed 10c
 * 
 * ***/ 