const obj = {
    a: 10,
    b: function () {
        console.log(this);         // Step 1: `this` refers to `obj`
        const arrowFunc = () => {
            console.log(this.a);   // Step 2: arrowFunc inherits `this` from `b`
        };
        arrowFunc();               // Step 3: Executes and uses inherited `this`
    },
};

// const detachedB = obj.b;
// detachedB(); // Output:
// 1. Logs `undefined` in strict mode (or `global` in non-strict mode)
// 2. Logs `undefined` because there's no `a` in the global scope


obj.b(); // Output:
// 1. Logs `obj`
// 2. Logs `10`

/****
 * The behavior of the arrow function depends completely on what this was in its surrounding
 * context at the time of invocation, not where the arrow function itself was defined.
 * 
 * **/ 

// Arrow functions inherit this from their surrounding lexical scope.

/*****
 * Key Takeaways
 * 
 * 1. Arrow Functions Capture this Lexically:
 * -At creation, the arrow function is bound to the enclosing scope's this, but the actual value of this is determined during execution.
 * 
 * 2. this Inside Regular Functions Depends Dynamically on How They're Called:
 * -When called as a method (obj.b()), this points to the object (obj).
 * -When detached (b()), this points to the global object or undefined, depending on the mode.
 * **/ 

// Arrow Functions Inherit this From Their Lexical Scope
// Arrow functions capture this from their surrounding (lexical) scope at the time of definition.
// But, the actual value of this in that surrounding scope depends on how the parent function (b) is executed.