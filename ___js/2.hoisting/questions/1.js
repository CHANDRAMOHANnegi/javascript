var a = 1;
function b() {
  console.log(a); // ! undefined here
  a = 10;
  // console.log(a); // but not here
  return;
  function a() {}
  // var a = 11
}
b();

console.log(a);

// function are also hoisted during memory creation phase

/*****
 * during memory creation, ignore return,
 * but during execution phase nothing matters after return
 * ******/ 