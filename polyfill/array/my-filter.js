Array.prototype.myFilter = function (fn) {
  const array = this;
  const length = array.length;
  const result = [];
  for (let i = 0; i < length; i++) {
    const isValid = fn(array[i], i, array);
    if (isValid) result.push(array[i]);
  }
  return result;
};

const ans = [1, 2, 3].myFilter((ele) => ele > 1);
console.log(ans);
