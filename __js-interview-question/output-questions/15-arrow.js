const obj = {
  value: 10,
  arrowMethod: () => {
    console.log(this); // 'this' refers to the global object or 'undefined' in strict mode
  }
};
obj.arrowMethod(); // Output: Window (or undefined in strict mode)

// this inside the arrow function arrowMethod does not refer to obj
// but to the global object because this is inherited from the surrounding
// scope where arrowMethod was defined.




// Regular Functions: this is dynamic and depends on how the function is called.
// Arrow Functions: this is lexically bound from the surrounding context where the arrow function is defined, 
// which helps maintain the correct this context in nested functions or callbacks.