console.log("Start"); // 1

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    return Promise.resolve();
  })
  .then(() => {
    console.log("Promise 2");
  });

setTimeout(() => {
  console.log("Timeout 2");
  Promise.resolve().then(() => {
    console.log("Promise inside Timeout 2");
    return Promise.resolve();
  });
}, 0);

console.log("End");


// Start
// End
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2
// Promise inside Timeout 2
