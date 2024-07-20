Array.prototype.myFilter = function (fn) {
  const array = this;
  const results = [];
  for (let i = 0; i < array.length; i++) {
    const ele = array[i];
    /**
     *
     * here we need to use call and pass
     * "this" (array) as the "this" keyword
     *
     * */
    // fn(array[i], i, array);
    if (fn.call(this, ele, i, this)) {
      results.push(ele);
    }
  }
  return results;
};

const ans = [1, 2, 3].myFilter(function (params) {
  console.log(this);
});
console.log(ans);
