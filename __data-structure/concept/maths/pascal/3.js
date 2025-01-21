function nCr(n, r) {
    return fact(n) / (fact(r) * fact(n - r));
}

// Returns factorial of n 
function fact(n) {
    if (n == 0 || n == 1)
        return 1;
    var res = 1;
    for (var i = 2; i <= n; i++)
        res = res * i;
    return res;
}

function pascalTriangle(n) {
    const arr = []

    // printing the entire row n:
    for (let c = 0; c <= n; c++) {
        const ans = nCr(n, c)
        arr.push(ans)
    }
    console.log(arr);
}

// pascalTriangle(5);
pascalTriangle(24);