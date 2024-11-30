const p = new Promise((resolve) => setTimeout(resolve));

const p2 = new Promise((resolve) => resolve(p)).then(() => {
  console.log("tick 3");
});

p.then(() => {
  console.log("tick 1");
}).then(() => {
  console.log("tick 2");
});

/*******
 * 
 * new Promise((resolve) => resolve(p)).then((a) => console.log(a)); // 5
 * 
 * if p is promise then above line return a new promise which gets resolved after p get resolved
 * only after above steps then is executed
 * 
 * ******/ 

// new Promise(resolve => resolve(value)) would return a
// new promise which has locked in to follow the value promise.
// It needs an extra one tick to make the 'locking-in'.

//  !  something like:
//   addToMicroTaskQueue(() => {
//     p.then(() => {
//       /* resolve newly promise */
//     })
//               ! all subsequent .then on newly promise go on from here
//       .then(() => {
//         console.log("tick 3");
//       });
//   });
