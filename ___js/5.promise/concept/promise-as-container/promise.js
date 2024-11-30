function asyncFunc() {
  console.log("asyncFunc"); //1
  const blank = [];
  setTimeout(() => blank.push("DONE"), 100);
  console.log("asyncFunc timer end"); //2
  return blank;
}
const blank = asyncFunc();
// Wait until the value has been filled in

console.log("outer", blank); //3

setTimeout(() => {
  console.log(blank);
  const x = blank[0]; // (A)
  console.log("Result: " + x); //4
}, 150);
