x = 10;

var x;

console.log(x, this.x);

function print(params) {
    console.log(this.x);
    //   var  x = undefined
    console.log(x);
    // x = 11;
    var x = 10;
    console.log(this.x);

}

print();