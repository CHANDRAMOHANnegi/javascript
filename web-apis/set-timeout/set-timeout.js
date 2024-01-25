function myFunc(p1, p2) {
  console.log("Parameters: " + p1 + " " + p2);
}

// setTimeout(function () {
//     myFunc("param1", "param2")
// }, 2000);

setTimeout(myFunc, 2000, "param1", "param2");
