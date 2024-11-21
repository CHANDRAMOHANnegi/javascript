
function Foo() {
}

// valueOf returns an object which is not a primitive
Foo.prototype.valueOf = () => {
    console.log('converting to primitive');
    return {};
};

// valueOf returns an object which is not a primitive
Foo.prototype.toString = () => {
    console.log('converting to string');
    return 42;
};

const foo1 = new Foo();
const foo2 = new Foo();

console.log(foo1 * foo2);