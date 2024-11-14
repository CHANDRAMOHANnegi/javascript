const curry = (fn) => {
    const inner = (...args) => {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        /***
         * here we are returning a new arrow function which returns inner function
         * 
         * no variable in outer closure
         * ****/
        return (...args2) => inner(...args, ...args2);
    };
    return inner;
};

const sum = (a, b, c) => a + b + c;
let curriedSum = curry(sum);

const alpha = curriedSum(1);
const beta = curriedSum(1)()()()();

console.log(alpha(2, 3));  // Output: 6
console.log(beta(2)(3));   // Output: 6

/*****
 * 
 * In the inner function, instead of modifying a shared args array,
 * we recursively accumulate arguments by returning a new function with the current args spread into it.
 * When the number of accumulated arguments matches the 
 * original function's arity (length), it invokes the function fn with the arguments.
 * 
 * *****/


