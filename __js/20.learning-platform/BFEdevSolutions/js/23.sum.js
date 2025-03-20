/**
 * @param {number} num
 */


function sum(num) {
    const func = function (num2) { // #4
        return num2 ? sum(num + num2) : num; // #3
    }

    func.valueOf = () => num; // #2
    return func; // #1
}



// function sum(num) {
//     const nums = [num]

//     function inner(...args) {
//         nums.push(...args)

//         return inner
//     }

//     inner.valueOf = function () {
//         const val = nums.reduce((all, ele) => all + ele, 0)
//         nums.length = 0
//         return val
//     }

//     return inner
// }

// const sum1 = sum(1)
// console.log(+sum1(1))//.toBe(true)
// console.log(+sum1(2))//.toBe(true)

const sum1 = sum(1)
sum1(2) == 3 // true
sum1(3) == 4 // true
sum(1)(2)(3) == 6 // true
sum(5)(-1)(2) == 6 // true

/*****
 * Here we are not storing values in closure
 * 
 * **/ 