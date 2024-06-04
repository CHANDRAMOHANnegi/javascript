
/**
 *  ! WRONG APPROACH
 *  ! WRONG APPROACH
 *  ! WRONG APPROACH
 *  ! WRONG APPROACH
 *  ! WRONG APPROACH
 * **/ 

/**
 * @param {string} 
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {

    const n = s.length
    const map = new Map()

    let left = 0
    let right = 0

    let maxLen = 0

    while(left < n){
        const char = s[right]

        /***
         * yaha mene sochaa nahi, me soch nahi raha hu
         * 
         * yaha me map se delete kar raha hu elements
         * 
         * jo nahi karna hai, we can directly set left to that point jaha duplicate aa gaya hai
         * 
         * map me me true set kar raha hu, we can make better use of it
         * 
         * **/ 
        if(map.has(char)){
            maxLen = Math.max(maxLen,right-left)
            while(left < right){
                const ch = s[left]
                if(map.has(ch)){
                    map.delete(ch)
                    left++
                    break;
                }
                map.delete(ch)
                left++
            }
        }else{
            map.set(char,true)
            right++
        }
    }

    return maxLen
};