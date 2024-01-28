Array.prototype.myReduce = function (callback, defaultValue) {
  const array = this;
  let accumulator = defaultValue;

  for (let i = 0; i < array.length; i++) {
    const ele = array[i];
    if (accumulator === undefined) {
      accumulator = ele;
    } else {
      accumulator = callback.call(array, accumulator, ele, i, array);
    }
  }

  return accumulator;
};

const ans = [1, 2, 3].myReduce((sum, ele) => sum + ele, 0);
console.log(ans);
