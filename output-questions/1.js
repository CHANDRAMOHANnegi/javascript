var b = 1;
function outer() {
    var b = 2
    function inner() {
        console.log(b)
        /**
         * b will be undefined here
         * and
         * undefined++ is NaN
         * 
         * **/

        b++;
        console.log(b)

        var b = 3;
        console.log(b)
    }
    inner();
}

console.log(undefined + 1)
outer();



// due to hoisting the code in inner will be interpreted as follows:

// function inner () {
//     var b; // b is undefined
//     b++; // b is NaN
//     b = 3; // b is 3
//     console.log(b); // output "3"
// }