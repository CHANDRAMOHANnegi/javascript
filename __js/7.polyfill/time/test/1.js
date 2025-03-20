const setTimeoutPolyfill = function () {
  var id = 0;
  const timeMap = {};

  function mySetTimeout(callback, delay, ...args) {
    const newId = ++id;
    timeMap[newId] = true;
    const startTime = Date.now();

    function callTimeout(idleTimeLeftForBrowser) {
      console.log(idleTimeLeftForBrowser);

      if (!timeMap[id]) return;

      if (startTime + delay <= Date.now()) {
        callback.apply(this, args);
      } else {
        window.requestIdleCallback(callTimeout);
      }
    }
    window.requestIdleCallback(callTimeout);
    return newId;
  }

  function myClearTimeout(id) {
    delete timeMap[id];
  }

  return {
    mySetTimeout,
    myClearTimeout,
  };
};

var { mySetTimeout, myClearTimeout } = setTimeoutPolyfill();

mySetTimeout(() => {
  console.log("hello world");
}, 1000);

const setIntervalPolyfill = function () {
  var intervalId = 0;
  var intervalMap = {};

  var { myClearTimeout, mySetTimeout } = setTimeoutPolyfill();

  const mySetInterval = function (callback, interval, ...args) {
    const newId = ++intervalId;

    function reIterate() {
      intervalMap[newId] = mySetTimeout(function name(params) {
        callback.apply(this, args);
        if (intervalMap[id]) {
          reiterate();
        }
      }, delay);
    }

    reIterate();
    return newId;
  };

  const myClearInterval = function (id) {
    myClearTimeout(id);
    delete intervalMap[id];
  };

  return {
    mySetInterval,
    myClearInterval,
  };
};

const { myClearInterval, mySetInterval } = setIntervalPolyfill();

mySetInterval(() => {
  console.log("hello world");
}, 1000);
