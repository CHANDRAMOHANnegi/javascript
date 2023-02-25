Array.prototype.myReduce = function (callback, defaultValue) {
  const array = this;
  const length = array.length;
  let result = defaultValue;
  for (let i = 0; i < length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};

const ans = [1, 2, 3].myReduce((sum, ele) => sum + ele, 0);
console.log(ans);
