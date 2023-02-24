Array.prototype.myMap = function (fn) {
  const length = this.length;
  const res = [];
  for (let i = 0; i < length; i++) {
    res.push(fn(this[i], i, this));
  }
  return res;
};

console.log([1, 2, 3].myMap((ele) => ele * 2));
