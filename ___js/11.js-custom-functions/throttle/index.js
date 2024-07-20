function throttle(callback, delay = 1000) {
  let shouldWait = false;

  return (...args) => {
    const context = this;
    if (!shouldWait) {
      callback.apply(context, args);
      shouldWait = true;
      setTimeout(() => {
        shouldWait = false;
      }, delay);
    }
    return;
  };
}
