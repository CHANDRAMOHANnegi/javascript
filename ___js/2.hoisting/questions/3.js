// https://dev.to/midasxiv/scopes-hoisting-closures-tricky-questions-4c85

console.log(x);

x = 10;

// var x;

console.log(x, this.x);

function print(params) {
  console.log(this.x);
  var x = undefined
  console.log(x);
  // x = 11;
  var x = 10;
  console.log(this.x);
}

print();

//

// ! memory creation phase and execution phase for undeclared variables
// undeclared variables comes under execution phase and not memory creation phase
// undeclared variables are connected to global scope during execution phase and not memory creation phase


/****
 *
 * Variables declared with var are hoisted to the top of their scope,
 * but only their declaration is hoisted not the initialization.
 * 
 * declaration is hoisted not the initialization.
 * 
 * ***/ 