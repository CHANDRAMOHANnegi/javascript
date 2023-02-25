Array.prototype.myMap = function (fn) {
  const array = this;
  const length = array.length;
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(fn(array[i], i, array));
  }
  return result;
};

const ans = [1, 2, 3].myMap((ele) => ele * 2);
console.log(ans);
