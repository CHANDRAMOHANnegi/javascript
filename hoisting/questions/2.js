// var variable = 10;
// (() => {
//     console.log(variable);
//     var variable = 20;
//     console.log(variable);
// })();


// var variable = 10;
// (()=>{
//    console.log(variable);   // undefined
//    let variable = 20;
//    console.log(variable);   // 20
// })();


var variable = 10;

function print1() {
    console.log(variable);   // undefined
    var variable = 20;
    console.log(variable);
}

function print2() {
    console.log(variable);   // undefined
    variable = 20;
    console.log(variable);
}
// because of "closures" as the first console log gets its value from the variable described outside its scope.
// print1()
// console.log(variable);

print2()
// console.log(variable);
