// example 1

// var name = "cm"
// function hoisting(params) {
//     console.log(name)
// }
// hoisting()


// example 2

const x = 1;
{
  console.log(x); // ReferenceError
//   const x = 2;
}



// example 3

// console.log(x); // undefined
// {
//     console.log(x); // undefined
//     var x = 1;
// }
// console.log(x); // 1
