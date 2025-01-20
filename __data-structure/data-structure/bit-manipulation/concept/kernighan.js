// count no of 1's in binary
// kernighan's algorithm 

var kernighan = function (x) {
    let count = 0
    while (x != 0) {
        const rsbm = x & (-x)
        /****
         * subtract rsbm from number, it will reduce number of set bits
         * 
         * 
         * **/
        x -= rsbm
        count++
    }

    return count
};