/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function (temperatures) {
    // for last element temp is 0
    const result = Array.from({ length: temperatures.length }, () => 0)
    // add last element to stack
    const stack = [temperatures.length - 1]
    // will start loop from second-last element
    let n = temperatures.length - 2

    while (n >= 0) {
        while (stack.length && temperatures[n] >= temperatures[stack[stack.length - 1]]) {
            stack.pop()
        }
        if (stack.length) {
            result[n] = (stack[stack.length - 1] - n)
        }
        stack.push(n)
        n--
    }

    return result
};

/******
 * 
 * BELOW answer gave TLE
 * 
 * So below, I din't create a array firstly, but was pushing elements to it,
 * 
 * so if ultimately we need an array, so we can create it before-hand
 * 
 * *****/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function (temperatures) {
    // for last element temp is 0
    const result = [0]
    // add last element to stack
    const stack = [temperatures.length - 1]
    // will start loop from second-last element
    let n = temperatures.length - 2

    while (n >= 0) {
        while (stack.length && temperatures[n] >= temperatures[stack[stack.length - 1]]) {
            stack.pop()
        }
        if (stack.length) {
            result.unshift(stack[stack.length - 1] - n)
        } else {
            result.unshift(0)
        }
        stack.push(n)
        n--
    }

    return result
};