function callMeOnce(fn) {
  let called = false;
  const context = this;
  return function (...args) {
    if (called) {
      return;
    }
    console.log(this, context);
    called = true;
    return fn(args);
  };
}

const obj = { a: "hello" };

const printText = function () {
  console.log("Called!", this);
};

const once = callMeOnce.call(obj, printText);
// const once = callMeOnce(printText);

once();

// function callMeOnce(fn) {
//   let called = false;
//   const context = this;
//   return (...args) => {
//     if (called) {
//       return;
//     }
//     console.log(this, context);
//     called = true;
//     return fn.apply(this, args);
//   };
// }

// const obj = { a: "hello" };

// const printText = () => {
//   console.log("Called!", this);
// };

// const once = callMeOnce.call(obj, printText);

// // once();
// once.call(obj);

// we cannot use call , apply , and bind , methods on Arrow functions to change the value of this ,
// because arrow functions don't have their own this context, this inside arrow
//  function will point to the outer/parent function in which it is present.
// So applying these methods on the arrow function will not make any effect.

//=============================>>>>>>>>

// function run() {
//   console.log("running...", this);
//   setTimeout(() => {
//     console.log("setTimeout", this);
//   }, 1000);
// }

// const obj2 = {
//   name: "p1",
//   run,
// };

// obj2.run();
// // const run2 = obj2.run;
// // run2();
