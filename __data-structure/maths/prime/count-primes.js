/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n <= 2) return 0

    const primes = Array(n).fill(1)
    primes[0] = 0
    primes[1] = 0

    for(let i = 2; i * i < n; i++){
        if(primes[i] === 1){
            for(let j = 2; i * j <= n; j++){
                primes[i * j] = 0
            }
        }
    }

    return primes.reduce((all,val)=>all+val,0)
};
