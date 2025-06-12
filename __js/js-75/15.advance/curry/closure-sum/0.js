/*****
 * Here we are storing values in closure
 * 
 * **/


function sum(initValue) {
    let currentSum = initValue
    const func = (num2) => {
        currentSum += num2
        return func
    }

    func.valueOf = () => currentSum; // #2
    return func; // #1
}


const sum1 = sum(1)
console.log(+sum1(2))// == 3 // true
console.log(+sum1(3))// == 4 // true
console.log(+sum(1)(2)(2))// == 6 // true
console.log(+sum(1)(2)(3))// == 6 // true
console.log(+sum(5)(-1)(2))// == 6 // true


// func.valueOf = () => num; // #2
// this returns the sum accumulated till now