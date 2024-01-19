var variable = 10;
(() => {
  //   variable_3 = undefined;
  variable_3 = 35;
  var x = 10;
  console.log(variable_3);
  var variable_3 = 45;
  variable_2 = 15;

  console.log(x, variable); // 20
})();

// !

// console.log(variable_2);
// console.log(variable_3);
// // var variable = 30;
// // //

// the ouput will be like this-
// 35
// 10
// 15
// reference error: variable_3 is not defined

// https://dev.to/midasxiv/scopes-hoisting-closures-tricky-questions-4c85

// x = 10;

// var x;

// console.log(x, this.x);

function print(params) {
  console.log(this.x);
  //   var  x = undefined
  console.log(x);
  x = 11;
  //   var x = 10;
}

print();

//

// ! memory creation phase and execution phase for undeclared variables
// undeclared variables comes under execution phase and not memory creation phase
// undeclared variables are connected to global scope during execution phase and not memory creation phase
