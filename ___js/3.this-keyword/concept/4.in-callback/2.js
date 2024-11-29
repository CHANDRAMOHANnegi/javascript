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
            console.log(person.name + " is playing at " + this.tournament);
        })
    }

}

user.clickHandler();
    // T. Woods is playing at The Masters
    //  P. Mickelson is playing at The Masters