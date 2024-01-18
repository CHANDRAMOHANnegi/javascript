function callMeOnce(fn) {
  let called = false;
  const context = this;
  return function (...args) {
    if (called) {
      return;
    }
    console.log(this, context);
    called = true;
    return fn.apply(context, args);
  };
}

const obj = { a: "hello" };

const printText = function () {
  console.log("Called!", this);
};

// const once = callMeOnce.call(obj, printText);
const once = callMeOnce(printText);

once();

// function callMeOnce(fn) {
//   let called = false;
//   const context = this;
//   return function (...args) {
//     if (called) {
//       return;
//     }
//     console.log(this, context);
//     called = true;
//     return fn.apply(this, args);
//   };
// }

// const obj = { a: "hello" };

// const printText = function () {
//   console.log("Called!", this);
// };
// const once = callMeOnce(printText);

// once.call(obj);
