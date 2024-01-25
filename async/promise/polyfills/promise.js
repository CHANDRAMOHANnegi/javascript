const PENDING = 0;
const FULLFILLED = 1;
const REJECTED = 2;
function isPromise(obj) {
  return obj instanceof Promise;
}

function CustomPromise(executor) {
  let state = PENDING;
  let value = null;

  let handlers = [];
  let catches = [];

  function resolve(result) {
    if (state !== PENDING) return;

    if (isPromise(result)) {
      result.then((a) => {
        state = FULLFILLED;
        value = result;
        handlers.forEach((h) => {
          const r = h(a);

          if (isPromise(r)) {
          }
        });
      });
    } else {
      state = FULLFILLED;
      value = result;
      handlers.forEach((h) => h(value));
    }
    // handlers.forEach((h) => h(value));
  }

  function reject(err) {
    if (state != PENDING) return;

    state = REJECTED;
    value = err;
    catches.forEach((c) => c(value));
  }

  this.then = function (callback) {
    if (state === FULLFILLED) {
      callback(value);
    } else {
      handlers.push(callback);
    }
  };

  executor(resolve, reject);
}

const doWork = (res, rej) => {
  setTimeout(() => {
    res("Hello world");
  }, 2000);
};

const doOtherWork = (res, rej) => {
  setTimeout(() => {
    res("How are you");
  }, 3000);
};

let someText = new Promise(doWork);
// console.log(someText);

someText
  .then((val) => {
    console.log("1st log: " + val);
    return new Promise(doOtherWork);
  })
  .then((val) => {
    console.log("=-=-=-val", val);
  });

// someText.then((val) => {
//     console.log('2nd log: ' + val);
// })

// setTimeout(() => {
//     someText.then((val) => {
//         console.log('3rd log: ' + val);
//     })
// }, 3000)

// someText.then((val) => {
//     console.log('4th log: ' + val);
// })

// https://www.youtube.com/watch?v=fyGSyqEX2dw&ab_channel=TonyAlicea
// https://youtu.be/fyGSyqEX2dw?t=1823
