
function add() {
    let counter = 0;
    function plus() { counter += 1; }
    plus();
    return counter;
}

console.log(add());