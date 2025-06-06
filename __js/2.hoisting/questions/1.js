var a = 1;
function b() {
  console.log(a); 
  a = 10;
  console.log(a); // but not here
  return;
  var a = 11
  function a() {}
}

// till we reach execution phase, we have the variable "a",
// so we don't need to look outside b scope for variable "a"
b();
console.log(a);

// function are also hoisted during memory creation phase
// Function declarations take precedence over variable declarations when they share the same name. 

/*****
 * during memory creation, ignore return,
 * but during execution phase nothing matters after return
 * ******/ 