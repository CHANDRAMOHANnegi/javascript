const p = new Promise((resolve) => setTimeout(() => resolve(0)));

Promise.resolve(1)
    .then(console.log)

/***
 * 
 * 1. If "p" is not a promise, "Promise.resolve(p)" always return a new resolved promise 
 * 
 * 2. If the "p" is a promise, "Promise.resolve(p)" would return "p" exactly.
 *    "Promise.resolve(p) === p" would be "true".
 * 
 * ***/
