var variable = 10;
(() => {
  console.log(variable); // undefined
  var variable = 20;
  console.log(variable); // 20
})();

console.log(variable); // 10
var variable = 30;
