// !It delays the execution of a function until a certain
//  !amount of time has passed since the last invocation.
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
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

// Throttle (1 sec): Hello, I am a robot. As long as you keep pinging me, I will keep talking to you,
// but after exactly 1 second each. If you ping me for a reply before a second is elapsed,
// I will still reply to you at exactly 1 second interval. In other words, I just love to reply at exact intervals.

// Debounce (1 sec): Hi, I am that ^^ robot's cousin. As long as you keep pinging me,
// I am going to remain silent because I like to reply only after 1 second is passed since the last time you pinged me.
