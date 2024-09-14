function Outer() {
    this.value = 10;

    // Traditional function
    this.traditionalFunction = function () {
        setTimeout(function () {
            console.log(this.value); // 'this' here refers to the global object (or undefined in strict mode)
        }, 1000);
    };

    // Arrow function
    this.arrowFunction = () => {
        setTimeout(() => {
            console.log(this.value); // 'this' here refers to the Outer instance
        }, 1000);
    };
}

const instance = new Outer();
instance.traditionalFunction(); // Output: undefined (or throws an error in strict mode)
instance.arrowFunction();      // Output: 10
