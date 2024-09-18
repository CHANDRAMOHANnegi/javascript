console.log(x) // reference error here

x = 10;

function print() {
    console.log(x)
    var x = 20
}

print()