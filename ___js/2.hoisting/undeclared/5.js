var variable = 10;
(() => {
  console.log(variable);
  variable = 20;
  console.log(variable);
})();
var variable = 30; // re-declaring
console.log(variable);

// 10
// 20
// 30
