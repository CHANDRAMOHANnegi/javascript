/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var removeDuplicates = function(s , k) {
    const stack = [[s[0],1]]

    let idx = 1

    while(idx < s.length){
        const char = s[idx]

        // if top count == k, remove it
        const top = stack[stack.length-1]
        // console.log(char,top,stack)

        if(stack.length && top[1] === k ){
            stack.pop()
        }else{
            // console.log('====',char,top,)
            if(stack.length&&top[0] === char){
                const top = stack.pop()
                stack.push([top[0],top[1] + 1])
            }else{
                stack.push([char,1])
            }
            idx++
        }
    }
    if(stack.length&&stack[stack.length - 1][1] === k){
        stack.pop()
    }
    // console.log(stack)
    return stack.map(a=>a[0].repeat(a[1])).join("")
};


/********
 * Here is was doing pop first
 * 
 * then push
 * 
 * with this, if we push last element, we wont be able to pop it properly
 * 
 * ******/ 