function debounce(fn, delay) {
  let timerId = null;

  return function (...args) {
    const context = this;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.call(context, ...args);
    }, delay);
  };
}

const print = () => console.log("hello");
const debounced = debounce(print, 1000);

debounced();
debounced();

const delay = (del) => new Promise((res) => setTimeout(res, del));

delay(2000).then(() => {
  console.log("hhhh");
  debounced();
});

// Debouncing delays the execution of your code until the user stops
// performing a certain action for a specified amount of time.
// Throttling limits the execution of your code to once in every
//  specified time interval.
