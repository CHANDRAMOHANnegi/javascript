/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

const pow = (x,n)=>{
    if(n <= 0)return 1

    if(n % 2 === 0){
        const half = pow(x, n / 2) 
        return half * half
    }else{
        const half = pow(x, (n - 1) / 2) 
        return half * half * x
    }
}

var myPow = function(x, n) {
    if(n < 0){
        const p = pow(x, -n)
        return 1 / p
    }
    return pow(x, n)
};