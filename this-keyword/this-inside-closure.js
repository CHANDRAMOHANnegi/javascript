/***
 * 
 * Another instance when this is misunderstood is when we use an inner method (a closure). 
 * It is important to take note that closures cannot access the outer function’s this variable
 * by using the this keyword because the this variable is accessible only by the function itself,
 * not by inner functions.
 * 
 * ***/

var user = {
    tournament: "The Masters",
    data: [
        { name: "T. Woods", age: 37 },
        { name: "P. Mickelson", age: 43 }
    ],

    clickHandler: function () {
        // the use of this.data here is fine, because "this" refers to the user object, and data is a property on the user object.

        this.data.forEach(function (person) {
            // But here inside the anonymous function (that we pass to the forEach method), "this" no longer refers to the user object.
            // This inner function cannot access the outer function's "this"

            console.log("What is This referring to? " + this); //[object Window]

            console.log(person.name + " is playing at " + this.tournament);
            // T. Woods is playing at undefined
            // P. Mickelson is playing at undefined
        })
    }

}

user.clickHandler(); // What is "this" referring to? [object Window]



//! FIX

// * Solution to maintain this inside anonymous functions:

/***
 *  To fix the problem with using this inside the anonymous function 
 *  passed to the forEach method, we use a common practice in JavaScript
 *  and set the this value to another variable before we enter the forEach method:
 * **/


var user = {
    tournament: "The Masters",
    data: [
        { name: "T. Woods", age: 37 },
        { name: "P. Mickelson", age: 43 }
    ],

    clickHandler: function (event) {
        // To capture the value of "this" when it refers to the user object, we have to set it to another variable here:
        // We set the value of "this" to theUserObj variable, so we can use it later
        var theUserObj = this;
        this.data.forEach(function (person) {
            // Instead of using this.tournament, we now use theUserObj.tournament
            console.log(person.name + " is playing at " + theUserObj.tournament);
        })
    }

}

user.clickHandler();
    // T. Woods is playing at The Masters
    //  P. Mickelson is playing at The Masters