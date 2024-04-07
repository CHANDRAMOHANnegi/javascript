//https://www.youtube.com/watch?v=j1-fbe5F5uE&list=PLe3J6mZBq1xUWVBMpSR2zpp8paWMJQ91b&index=15&ab_channel=JsCafe

// https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback

/***
 *
 * The window.requestIdleCallback() method queues a
 * function to be called during a browser's idle periods.
 *
 *
 * ! key take-away is Date.now()
 *
 * **/

function createSetTimeout() {
  var timerId = 1;
  var timerMap = {};

  function setTimeoutPoly(callback, delay, ...args) {
    var id = timerId++;
    timerMap[id] = true;

    //! Date.now()
    // 1706460218221
    // new Date()
    // Sun Jan 28 2024 22:13:46 GMT+0530 (India Standard Time)

    var start = Date.now();
    function triggerCallback(idleTimeLeftForBrowser) {
      console.log(idleTimeLeftForBrowser); //  IdleDeadline {didTimeout: false}
      if (!timerMap[id]) return;
      if (Date.now() >= start + delay) {
        callback.apply(this, args);
      } else {
        window.requestIdleCallback(triggerCallback);
      }
    }

    window.requestIdleCallback(triggerCallback);
    return id;
  }

  function clearTimeoutPoly(id) {
    delete timerMap[id];
  }

  return { setTimeoutPoly, clearTimeoutPoly };
}

var { clearTimeoutPoly, setTimeoutPoly } = createSetTimeout();

// var callback = function (name) {
//   console.log("Hello, welcome " + name);
// };

// var id = setTimeoutPoly(callback, 2000, "cm");

export default createSetTimeout;
