const p = new Promise(res=>res(2));

console.log(Promise.resolve(p) === p); // true

// Promise.resolve returns promise
Promise.resolve(p).then((a) => {
  console.log("tick ", a); // tick 3
});

console.log(Promise.resolve(3)); // promise
console.log(Promise.resolve(3) === 3); // false
