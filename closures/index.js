/**
 * 
 * A closure is a function having access to the parent scope, 
 * even after the parent function has closed.
 * It makes it possible for a function to have "private" variables.
 * 
 * **/ 

var multFn = function multiply() {
    // This variable is local to
    // the closure and holds
    // its value inbetween
    // multiple calls
    var mult = 9;
    return function (val) {
        mult = mult * val;
        return mult;
    }
};

var mult = multFn();

// Call the method
// multiple times
console.log(mult(2));
console.log(mult(3));
console.log(mult(5));