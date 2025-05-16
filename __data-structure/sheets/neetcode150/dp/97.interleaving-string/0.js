/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

// s1 = "aabcc" 

// s2 = "dbbca"

// s3 = "aadbbcbcac" 

const helper = (s1, i, s2, j, s3, k) => {
    if (k === s3.length) {
        return true
    }

    if (i < s1.length && s1[i] === s3[k]) {
        i++ // by incrementing variable "in place" we loose ability to backtrack and check alternative valid branches
    } else if (j < s2.length && s2[j] === s3[k]) {
        j++
    } else {
        return false
    }
    k++
    return helper(s1, i, s2, j, s3, k)
    /***
     * here we have just one recursion call, means we are only choosing one path
     * from above two options
     * 
     * but that should not be the case, we should explore both options,
     * so we need to fix "if else "
     * 
     * **/
}


const helper = (s1, i, s2, j, s3, k) => {
    if (k === s3.length) {
        return true
    }

    if (i < s1.length && s1[i] === s3[k]) {
        if (helper(s1, i + 1, s2, j, s3, k + 1)) { // 1st path 
            return true
        }
    }
    if (j < s2.length && s2[j] === s3[k]) {
        if (helper(s1, i, s2, j + 1, s3, k + 1)) { // 2nd path 
            return true
        }
    }
    return false
}

var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length != s3.length) return false
    return helper(s1, 0, s2, 0, s3, 0)
};