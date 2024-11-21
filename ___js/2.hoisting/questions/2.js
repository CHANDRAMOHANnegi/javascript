var variable = 10;

function print1() {
  console.log(variable); // undefined
  var variable = 20;
  console.log(variable);
}

// till we reach execution phase, we have the variable,
// so we don't need to look outside print1 scope for variable
print1();
console.log(variable);

/**
 *
 *
 * **/

// function print2() {
//   console.log(variable);
//   variable = 20;
//   console.log(variable);
// }
// // because of "closures" as the first console log gets its value from the variable described outside its scope.

// print2();
// console.log(variable);
