var a = 1;
function b() {
  console.log(a);
  a = 10;
  return;
  // function a() {}
  var  a = 11
}
b();

console.log(a);

// function are also hoisted during memory creation phase
//
