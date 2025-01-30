/**
 * @param {number} n
 * @return {string[]}
 */

const helper = (open,close,curr,result,n)=>{
    if(open===n && close === n){
        result.push(curr)
        return
    }
    if(open<n)
    helper(open+1,close,curr+"(",result,n)
    /*****
     * I was missing this check,
     * close call tabhi lagegi, jab koi open hai
     * 
     * ***/ 
    // if(close<n)
    if(close<open)
    helper(open,close+1,curr+")",result,n)
}

var generateParenthesis = function(n) {
    const result = []
    helper(1,0,"(",result,n)

    return result
};