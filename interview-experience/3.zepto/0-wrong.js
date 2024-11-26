
const sum = (a, b, c) => a + b + c
const multiply = (a, b) => a * b

const curry = (fn)=>{
	let args= []

	const inner = (...args2)=>{
	    args.push(...args2)
	    const res = args.length === fn.length ? fn(...args) :  inner
	    if(args.length === fn.length){
	        args = []
	    }
	    return res
	}

    return inner
}

// let curriedSum = curry(sum)
// console.log(curriedSum(1, 2, 3)) // Output: 6
// console.log(curriedSum(1)(2, 3)) // Output: 6
// console.log(curriedSum(1)()()()()(2)(3)) // Output: 6

// let curriedMultiply = curry(multiply)

// console.log(curriedMultiply(1, 2)) // Output: 2
// console.log(curriedMultiply(1)(2)) // Output: 2

let curriedSum = curry(sum)
// console.log(curriedSum(1, 2, 3)) // Output: 6
const alpha = curriedSum(1);
const beta = curriedSum(1)()()()();
console.log(alpha(2, 3)) // Output: 6
// console.log(beta(2)(3)) // Output: 6


















