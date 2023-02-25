Array.prototype.myReduce = function (callback, defaultValue) {
  const array = this;
  const length = array.length;
  let res = defaultValue;
  for (let i = 0; i < length; i++) {
    res = callback(res, this[i], i, this);
  }
  return res;
};

const ans = [1, 2, 3].myReduce((sum, ele) => sum + ele, 0);
console.log(ans);
