/**
 * @param {number} num
 */

function sum(num) {
    const func = function (num2) { // #4
        return num2 ? sum(num + num2) : num; // #3
    }

    func.valueOf = () => num; // #2
    return func; // #1 // we are returning num from here, num is the accumulated value in the sum
}

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
 * it return sum accumulated till now
 * 
 * **/


function summ(num) {
    const func = (num2) => summ(num + num2)

    func.valueOf = () => num; // #2
    return func; // #1
}
