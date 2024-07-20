const arr = ["a", "b", "a"];

const res = arr.filter((ele, index) => arr.indexOf(ele) == index);

const res2 = [...new Set(arr)];

console.log(res);
console.log(res2);
