(function () {
  var a = b = 3;
})();
// console.log(a)
// console.log(b)
console.log((a));
// console.log("b defined? " + (typeof b !== 'undefined'));

// https://262.ecma-international.org/5.1/#sec-11.4.3
// typeof operator