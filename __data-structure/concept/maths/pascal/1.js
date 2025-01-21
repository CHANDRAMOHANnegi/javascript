function pascalTriangle(rowNumber) {
    let ans = 1;
    const arr = [1]

    for (let colIndex = 1; colIndex < rowNumber; colIndex++) {
        ans = (ans * (rowNumber - colIndex)) / colIndex;
        arr.push(ans)
    }

    console.log(arr);
}

// Current element = prevElement * (rowNumber - colIndex) / colIndex

pascalTriangle(5)
pascalTriangle(6)

// rowNumber is 1 based index
// colIndex is 0 based index