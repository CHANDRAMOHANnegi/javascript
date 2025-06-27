// if n is -ve, it throws error
Array(n)

// if n is -ve, it throws error
Array.from({length:n})// create empty array, do not throw error

<!--
Here all rows have same set reference
 -->

    const rows = Array(board.length).fill(new Set())
