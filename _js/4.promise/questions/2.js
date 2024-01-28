const p = new Promise((resovle) => setTimeout(resovle));

const p2 = new Promise((resolve) => resolve(p)).then(() => {
  console.log("tick 3");
});

p.then(() => {
  console.log("tick 1");
}).then(() => {
  console.log("tick 2");
});
