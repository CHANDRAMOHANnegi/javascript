const curry = function (fn) {
    let arg = []
    const inner = (...args) => {
        arg.push(...args)
        if (arg.length >= fn.length) {
            const res = fn(...arg)
            // arg = []
            return res
        }
        return inner
    }

    return inner
}


function sum(a, b, c, d) {
    return a + b + c + d;
}

let curriedSum = curry(sum);

/*********
 * Very important point to remember
 * consecutive calls will be accessing same "closure"
 * 
 * ********/ 

console.log(curriedSum(1, 2, 3, 4, 5));
console.log(curriedSum(1)(2, 3)(4));
console.log(curriedSum(1)(2)(3)(4));

// 10
// 10
// 10