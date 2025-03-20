var variable = 10;
(() => {
  //   variable_3 = undefined;
  variable_3 = 35;
  var x = 10;
  console.log(variable_3); // ! variable_3 is not undefined here, take care
  var variable_3 = 45;
  variable_2 = 15;

  console.log(x, variable); // 20
})();

console.log(variable_2); // Undeclared variables are always global.
console.log(variable_3); // reference error: variable_3 is not defined, because we are using var inside iifi and var is function scoped

// the output will be like this-
// 35
// 10, 10
// 15
// reference error: variable_3 is not defined