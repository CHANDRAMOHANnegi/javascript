
function findMissingRepeatingNumbers(a) {
    let n = a.length;

    let realSum = (n * (n + 1)) / 2;
    let realSquareSum = (n * (n + 1) * (2 * n + 1)) / 6;

    console.log(realSum,realSquareSum);

    let [currSum, currSquareSum] = a.reduce((a, e) => [a[0] + e, a[1] + e * e], [0, 0])

    console.log(currSum,currSquareSum);

    let val1 = currSum - realSum
    let dup, mis
    // dup - mis = currSum - realSum

    let val2 = currSquareSum - realSquareSum

    // dup^2 - mis^2 =  currSquareSum - realSquareSum

    //  (dup + mis) * (dup - mis) = val2

    // dup + mis = (val2) / (dup - mis)
    // dup + mis = (val2) / val1

    /***
     * so 1. dup - mis = currSum - realSum
     * so 2. dup + mis = (val2) / (dup - mis)
     * so 3. dup + mis = (val2) / val1
     * */ 
    
    // 2 * dup  = val2 + val1
    
    // dup + mis = (val2) / val1
    val2 = val2 / val1

    dup = (val1 + val2) / 2
    mis = dup - val1

    return [mis, dup];
}

// [8, 4, 1, 6, 7, 2, 5, 8]
// console.log(findMissingRepeatingNumbers([1, 5, 3, 2, 5]))
console.log(findMissingRepeatingNumbers([8, 4, 1, 6, 7, 2, 5, 8]))