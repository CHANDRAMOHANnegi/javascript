/**
 * @param {string} s
 * @return {boolean}
 * https://leetcode.com/problems/valid-palindrome/description/
 */
const isAlphaNumeric= (ch)=>(ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122) ||(ch.charCodeAt(0) >= 48 && ch.charCodeAt(0) <= 57)

const helper =(s)=>{
    let left = 0, right = s.length - 1
    while(left <= right){
        if(!isAlphaNumeric(s[left])){
            left++
            continue
        }else if(!isAlphaNumeric(s[right])){
            right--
            continue
        }else{
            if(s[left++] != s[right--]){
                return false
            }
        }
    }
    return true
}

var isPalindrome = function(s) {
    return helper(s.toLowerCase())
};