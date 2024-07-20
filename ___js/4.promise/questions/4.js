const p = new Promise(() => {});

console.log(Promise.resolve(p) === p); // true

// Promise.resolve returns promise
Promise.resolve(3).then((a) => {
  console.log("tick ", a); // tick 3
});

console.log(Promise.resolve(3)); // promise
console.log(Promise.resolve(3) === 3); // false
