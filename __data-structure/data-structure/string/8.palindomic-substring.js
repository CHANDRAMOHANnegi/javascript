const palindrome = (s, start, end) => {
    let count = 0
    while (start >= 0 && end < s.length && s[start] === s[end]) {
        start--
        end++
        count++
    }
    return count
}

var countSubstrings = function (s) {
    let count = 0

    for (let i = 0; i < s.length; i++) {
        count += palindrome(s, i, i)// odd
        count += palindrome(s, i, i + 1)// even
    }

    return count
};

/*****
 * 
 * !
 * Below algorithm is very important for getting palindromic substring
 * it can give use all substring within a string
 * it figures wether a substring within given index is palindrome or not
 * 
 * ***/ 

// const palindrome = (s, start, end) => {
//     let count = 0
//     while (start >= 0 && end < s.length && s[start] === s[end]) {
//         start--
//         end++
//         count++
//     }
//     return count
// }
