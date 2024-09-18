
print()

console.log(x) // 20
var x = 10;

function print() {
    console.log(x) // this x will not give reference error,because this x will be hoisted because of line 5
    x = 20
}

// undefined
// 20