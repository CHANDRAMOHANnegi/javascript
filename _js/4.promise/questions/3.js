const p = new Promise((resolve) => {
  setTimeout(() => {
    console.log("tick 1"); // 1
    resolve("reward");
  });
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve#return_value

// Promise.resolve always return a new resolved promise if p is not a promise

// if p is promise, it returns p

// console.log(Promise.resolve(p) === p); // true
// if p is promise then its then will be executed immediately
Promise.resolve(p).then((a) => {
  console.log("tick 2", a); // 2
});

/***
 *
 *
 *
 * */

// new Promise((resolve) => resolve(p)).then((a) => console.log(a)); // 5

//  if p is promise then above line return a new promise which gets resolved after p get resolved
// only after above steps then is executed

// means, first the then of p will be executed, and after that then of outer will be executed

new Promise((resolve) => {
  const x = resolve(p);
  console.log("x", x);
})
  .then((b) => console.log("b", b))
  .then((a) => console.log("a", a)); // 5

p.then(() => {
  console.log("tick 3"); //3
}).then(() => {
  console.log("tick 4"); // 4
});

// If the value is a promise, Promise.resolve(value)
// would return value exactly.
// Promise.resolve(value) === value would be true.

// if p is promise, then  p === Promise.resolve(p)
// if p is not promise, then  Promise.resolve(p) will return some promise
