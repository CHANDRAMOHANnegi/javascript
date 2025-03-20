const curry = function (fn) {

    const inner = (...args1) => {

        if (args1.length >= fn.length) {
            return args1.slice(0, fn.length).reduce((acc, ele) => acc + ele, 0)
        }
        const temp = (...args2) => {
            return inner(...args1, ...args2)
        }

        return temp
    }
    return inner

}

function sum(a, b, c, d) {
    return a + b + c + d;
}

let curriedSum = curry(sum);

/**
 * 
 * curry is returning a function curriedSum
 * 
 * curriedSum further return a function
 * 
 * which in turn can return recursive functions
 * 
 * */

console.log(curriedSum(1, 2, 3, 4, 5));
console.log(curriedSum(1)(2, 3)(4));
console.log(curriedSum(1)(2)(3)(4));

// 10
// 10
// 10