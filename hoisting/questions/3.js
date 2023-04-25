var variable = 10;
(()=>{
   variable_3 = 35;
   console.log(variable_3);
   var variable_3 = 45;
   variable_2 = 15;
   console.log(variable);   // 20
})();

console.log(variable_2);
console.log(variable_3);
var variable=30;
//


// the ouput will be like this-
// 35
// 10
// 15
// reference error: variable_3 is not defined

// https://dev.to/midasxiv/scopes-hoisting-closures-tricky-questions-4c85