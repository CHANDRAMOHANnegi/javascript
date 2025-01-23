function pascalTriangle(rowNumber) {
    let ans = 1;
    const arr = [1]

    for (let colIndex = 1; colIndex <= rowNumber; colIndex++) {
        ans = (ans * (rowNumber - colIndex + 1)) / colIndex;
        arr.push(ans)
    }

    console.log(arr);
}

/**
 * 
 * * C(n, k) = C(n, k-1)⋅(n-k + 1)/k
 * 
 * value = (value * (n - k + 1)) / k; /
 * 
 * Current element = prevElement * (rowNumber - colIndex) / colIndex
 * 
 * ***/

pascalTriangle(0)
pascalTriangle(1)
pascalTriangle(2)

// rowNumber is 1 based index
// colIndex is 0 based index