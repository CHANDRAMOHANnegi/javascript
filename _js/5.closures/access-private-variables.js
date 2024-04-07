// Define the closure
var rentPrice = function (initialRent) {
    var rent = initialRent;

    // Define private variables for
    // the closure
    return {
        getRent: function () {
            return console.log(rent);
        },
        incRent: function (amount) {
            rent += amount;
            console.log(rent);
        },
        decRent: function (amount) {
            rent -= amount;
            console.log(rent);
        }
    }
}

var Rent = rentPrice(8);

// Access the private methods
Rent.incRent(2);
Rent.decRent(5);
Rent.decRent(1);
Rent.incRent(2);
Rent.getRent();