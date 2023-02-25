function createSetTimeout() {
  var timerId = 1;
  var timerMap = {};

  function setTimeoutPoly(callback, delay, ...args) {
    var id = timerId++;
    timerMap[id] = true;
    var start = Date.now();
    function triggerCallback() {
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

export default createSetTimeout