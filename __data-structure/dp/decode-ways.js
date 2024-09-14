/**
 * @param {string} s
 * @return {number}
 */

// "123"
// a = 1, b= 2

const alphaMap = [..."abcdefghijklmnopqrstuvwxyz"].reduce((acc, ele, idx) => ({
    ...acc, [idx + 1]: ele
}), {})

var decodeRec = function (s,n) {
    if (n === 0) {
        return 1
    }
    if (s[0] === "0")
        return 0

    const [num1, num2] = [s[n-1],s[n-2]]
    let count = 0

    if (alphaMap[num1]) {
        count += decodeRec(s,n-1)
    }

    if (alphaMap[num2 + num1]) {
        count += decodeRec(s,n-2)
    }

    return count
}


var decode_memo = function (s, n, dp_memo) {
    // console.log(s,n,dp_memo)
    if (n == 0) {
        return 1;  // // One valid way to decode an empty string
    }

    if (dp_memo[n] != -1) {
        return dp_memo[n]
    }

    const [num1, num2] = [s[n - 1], s[n - 2]];
    let count = 0

    if (alphaMap[num1]) {
        count += decode_memo(s, n - 1, dp_memo)
    }

    if (n >= 2) {
        if (alphaMap[num2 + num1]) {
            count += decode_memo(s, n - 2, dp_memo)
        }
    }

    return dp_memo[n] = count
}

var decode_tabu = function (s, N, dp_tabu) {
    for (let n = 0; n <= N; n++) {
        if (n == 0) {
            dp_tabu[n] = 1;  // One valid way to decode an empty string
            continue
        }
        const [num1, num2] = [s[n - 1], s[n - 2]];
        let count = 0

        if (alphaMap[num1]) {
            count += dp_tabu[n - 1] // decode_memo(s.slice(1), n - 1, dp_memo)
        }

        if (alphaMap[num2 + num1]) {
            count += dp_tabu[n - 2] // decode_memo(s.slice(2), n - 2, dp_memo)
        }
        dp_tabu[n] = count

    }
    return dp_tabu[N]
}


// "abc"
var numDecodings = function (s) {
    // return decodeRec(s,s.length)

    const dp_memo = [...Array(s.length + 1)].fill(-1)
    const res= decode_memo(s,s.length,dp_memo)
    // const res = decode_tabu(s, s.length, dp_memo)

    // console.log(dp_memo)
    return res
};


/*****
 * Here we are solving this in reverse order
 * ****/ 