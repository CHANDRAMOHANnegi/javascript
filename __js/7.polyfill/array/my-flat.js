

// This is a JavaScript coding problem from BFE.dev 
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */

function flat1(arr, depth = 1) {
    if (depth === 0) return arr

    const result = []
    let hasArray = false

    for (let i = 0; i < arr.length; i++) {
        if (!(i in arr)) continue // check for empty elements
        const ele = arr[i]
        if (Array.isArray(ele)) {
            result.push(...flat1(ele, depth - 1))
            hasArray = true
        } else {
            result.push(ele)
        }
    }
    if (!hasArray) {
        return result
    }

    return result
}

/****
 * here i was using a variable "hasArray", to check if there is not array in elements and we gave depth Infinity, we stop the recursion,
 * but it will happen automatically, further recursion will only run when there is any array in elements
 * ***/



// This is a JavaScript coding problem from BFE.dev 
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */

function flat(arr, depth = 1) {
    if (depth === 0) return arr
    const result = []
    // no need to check for empty elements
    arr.forEach(ele => {
        if (Array.isArray(ele)) {
            result.push(...flat(ele, depth - 1))
        } else {
            result.push(ele)
        }
    })
    return result
}



