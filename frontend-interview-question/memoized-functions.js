//https://www.youtube.com/watch?v=Mip6ejPRXko&list=PLe3J6mZBq1xUWVBMpSR2zpp8paWMJQ91b&index=2&ab_channel=JsCafe

const addTwoNumber = (...args) => args.reduce((acc, ele) => acc + ele, 0)

const memoized = (fn) => {
    const cache = {};
    return (...args) => {
        console.log(cache);
        const argsToString = JSON.stringify(args);
        if (argsToString in cache) {
            console.log("Fetching value from cache...")
            return cache[argsToString]
        } else {

            // Here apply is used
            const res = fn.apply(this, args)
            cache[argsToString] = res;
            return res;
        }
    }
}

// const add = memoized(addTwoNumber)

// const sum = add(2, 3);
// console.log(sum);

// const sumFromCache = add(2, 3);
// console.log(sumFromCache);

// const summ = add(2, 3, 5);
// console.log(summ);


// factorial memoized
/**
 * 
 * Recursive  memoized function
 */

const factorial = memoized((x) => {
    if (x == 0) return 1
    return x * factorial(x - 1)
})


console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(5));
