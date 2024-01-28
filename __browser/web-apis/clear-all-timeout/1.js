window.timeoutIds = [];

// store the original method
const originalTimeoutFn = window.setTimeout;

window.setTimeout = function (fn, delay) {
  const id = originalTimeoutFn.call(this, fn, delay);
  window.timeoutIds.push(id);
  return id;
};

window.clearAllTimeout = function () {
  while (timeoutIds.length) {
    clearTimeout(timeoutIds.pop());
  }
};
