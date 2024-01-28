//https://www.youtube.com/watch?v=Ci28TR9i9aQ&list=PLe3J6mZBq1xUWVBMpSR2zpp8paWMJQ91b&index=16&ab_channel=JsCafe

import createSetTimeout from "./set-timeout.js";

function createInterval() {
  var intervalId = 1;
  var intervalMap = {};

  var { clearTimeoutPoly, setTimeoutPoly } = createSetTimeout();

  function setIntervalPoly(callback, delay, ...args) {
    var id = intervalId++;
    /**
     * Here we are starting timeout as we enter in this function, with delay of interval,
     * when timeout ends callback runs and we check if interval is not cleared run it again
     *
     * **/
    function reiterate() {
      intervalMap[id] = setTimeoutPoly(function name(params) {
        callback.apply(this, args);
        if (intervalMap[id]) {
          reiterate();
        }
      }, delay);
    }
    reiterate();
    return id;
  }

  function clearIntervalPoly(id) {
    clearTimeoutPoly(id);
    delete intervalMap[id];
  }
  return { setIntervalPoly, clearIntervalPoly };
}

var { setIntervalPoly, clearIntervalPoly } = createInterval();

var counter = 0;
var myId = setIntervalPoly(
  function name(params) {
    counter++;
    console.log("Welcome ", params);
    if (counter >= 2) clearIntervalPoly(myId);
  },
  1000,
  "cm"
);
