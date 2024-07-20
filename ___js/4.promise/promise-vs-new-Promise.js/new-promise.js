const p = new Promise((resovle) => setTimeout(resovle));

const p2 = new Promise((resolve) => resolve(p)).then(() => {
  console.log("tick 3");
});

p.then(() => {
  console.log("tick 1");
}).then(() => {
  console.log("tick 2");
});

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
