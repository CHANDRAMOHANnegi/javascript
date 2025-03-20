
const add = function () {
    let counter = 0;
    return function () { counter += 1; return counter }
}

const adder = add()

console.log(adder());
console.log(adder());
console.log(adder());