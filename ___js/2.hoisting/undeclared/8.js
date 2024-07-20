var variable;
variable = 10;
(() => {
  var variable;
  console.log(variable); // undefined
  variable = 20;
  console.log(variable); // 20
})();
console.log(variable); // 10
variable = 30;
