
// // example 1

// // Initiate counter
// let counter = 0;

// // Function to increment counter
// function add() {
//     counter += 1;
// }

// // Call add() 3 times
// add();
// console.log(counter); //  1
// add();
// console.log(counter); //  2
// add();
// console.log(counter); //  3



// //example 2

// // Initiate counter
// let counter = 0;

// // Function to increment counter
// function add() {
//     let counter = 0;
//     counter += 1;
// }

// // Call add() 3 times
// add();
// console.log(counter); // 0
// add();
// console.log(counter); // 0
// add();
// console.log(counter); // 0

// //The counter should now be 3. But it is 0


// example 3

// function add() {
//     let counter = 0;
//     function plus() { counter += 1; }
//     plus();
//     return counter;
// }

// console.log(add());

// example 4

// const add = (function () {
//     let counter = 0;
//     return function () {counter += 1; return counter}
//   })();
  
const add = function () {
    let counter = 0;
    return function () { counter += 1; return counter }
}

const adder = add()

console.log(adder());
console.log(adder());
console.log(adder());