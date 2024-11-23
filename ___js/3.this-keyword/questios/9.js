setTimeout(function () {
    console.log(this); // window
}, 1000);

let obj = {
    value: 42,
    method() {
        setTimeout(() => {
            console.log(this.value); // 42
        }, 1000);
    },
};

obj.method();

// Regular functions default to the global object (window).
// Arrow functions inherit this from their surrounding scope.