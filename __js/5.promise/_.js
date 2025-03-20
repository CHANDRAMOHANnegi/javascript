const p = new Promise((resolve) => setTimeout(resolve));

// Promise.resolve(p).then((a) => {
//     console.log("2", a); // 2
// });
// p.then(result => console.log('1', result));  

/***
 * 
 * p1.then and Promise.resolve(p1).then appears to be similar
 * 
 *  Microtasks are executed in the order they are queued:
 *  Promise.resolve(p1).then(...) (attached to p2) executes 
 *  before p1.then(...) because Promise.resolve(p1) queues its .then() first.
 * 
 * ***/

new Promise((resolve) => resolve(p))
.then(() => {
  console.log("tick 3");
})

p.then(() => {
  console.log("tick 1");
}).then(() => {
  console.log("tick 2");
});
