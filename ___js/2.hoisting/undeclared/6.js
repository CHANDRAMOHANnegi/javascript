var variable;
variable = 10;
(() => {
  console.log(variable);
  variable = 20;
  console.log(variable);
})();
variable = 30;
console.log(variable);

// 10
// 20
// 30
