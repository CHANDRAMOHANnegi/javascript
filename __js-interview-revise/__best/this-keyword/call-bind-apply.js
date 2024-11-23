function getThis() {
    console.log(this);
}

const counter = {
    name: "cm",
    count: 0,
    getThis,
    decrease: function () {
        console.log("decrease", this);
    },
    increase: () => {
        console.log("increase", this);
    },
};

const obj = { name: "obj", count: 5 };
// counter.decrease.call(obj);
counter.increase.call(obj);

/*****
 * !
 * with arrow functions, this does not work because the 
 * this value is already lexically bound and cannot be changed.
 * ***/

/****
 * an arrow function inherits this from the enclosing lexical scope, 
 * and this cannot be overridden using call, apply, or bind.
 * ****/ 