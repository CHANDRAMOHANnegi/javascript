const arr = [1, 2, 3];
// const callback = (ele) => ele * 2;

const double = arr.map((ele, index, arr) => {});

// const double2 = arr.myMap(callback)

// console.log(double);// [2,4,6]

Array.prototype.myMap = function (callback) {
  console.log("=-=>", this);
  var array = this;
  var length = array.length;

  const result = [];

  for (let i = 0; i < length; i++) {
    const ans = callback(this, array[i], i, array);
    result.push(ans);
  }

  return result;
};

// const double2 = arr.myMap(callback)

// console.log(arr);
// console.log(double2);

const str = ["a", "b", "c"];

function cb(ele) {
  console.log("this", this);
  return ele + ele;
}

const ans = str.myMap(cb);

console.log(ans);

// Array.prototype.myMap = function (fn) {
//   const array = this;
//   const length = array.length;
//   const result = [];
//   for (let i = 0; i < length; i++) {
//     result.push(fn(array[i], i, array));
//   }
//   return result;
// };

// const ans = [1, 2, 3].myMap((ele) => ele * 2);
// console.log(ans);
