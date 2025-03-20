// update cache

const sum = (...args) => {
    let cache = args;

    if (cache.length === 0) {
        return 0; // Handle empty input
    } else {
        const inner = (...argsInner) => {
            if (argsInner.length > 0) {
                cache.push(...argsInner); // Update cache directly
                return inner; // Return inner for chaining
            } else {
                return cache.reduce((acc, ele) => acc + ele, 0); // Compute sum
            }
        };
        return inner;
    }
};

// Test
console.log(sum(1, 2)(3)(4)()); // Output: 10

const res21 = sum(1, 2, 3, 4)();
const res22 = sum(1)(2)(3)(4)();
const res23 = sum(1, 2)(3, 4)();
const res24 = sum(1, 2, 3)(4)();
const res25 = sum(1)(2, 3, 4)();
const res26 = sum();

console.log(res21, res22, res23, res24, res25, res26);

/***
 * pass arguments
 * **/

const sum2 = (...args) => {
    if (args.length === 0) {
        return 0; // Handle empty input
    }
    const inner = (...argsInner) => {
        if (argsInner.length > 0) {
            return sum2(...args, ...argsInner); // Pass combined arguments to inner
        } else {
            return args.reduce((acc, ele) => acc + ele, 0); // Compute sum
        }
    };
    return inner;
};

// Test
console.log(sum2(1, 2)(3)(4)()); // Output: 10

const res = sum2(1, 2, 3, 4)();
const res2 = sum2(1)(2)(3)(4)();
const res3 = sum2(1, 2)(3, 4)();
const res4 = sum2(1, 2, 3)(4)();
const res5 = sum2(1)(2, 3, 4)();
const res6 = sum2();

console.log(res, res2, res3, res4, res5, res6);

// Output:
// 10 10 10 10 10 0

