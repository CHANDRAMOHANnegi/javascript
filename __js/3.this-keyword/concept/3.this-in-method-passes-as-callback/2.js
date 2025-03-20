
// !FIX
// FIX
// To fix this problem in the preceding example, we can use the bind method thus:

// Instead of this line:

//  $ ("button").click (user.clickHandler);
// We have to bind the clickHandler method to the user object like this:
// $("button").click (user.clickHandler.bind (user)); // P. Mickelson 43


var user = {
    data: [
        { name: "T. Woods", age: 37 },
        { name: "P. Mickelson", age: 43 }
    ],
    clickHandler: function (event) {
        var randomNum = ((Math.random() * 2 | 0) + 1) - 1; // random number between 0 and 1

        // This line is printing a random person's name and age from the data array
        console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
    }

}

// Pass the user object's clickHandler method as a callback to the button's click method
// The button is wrapped inside a jQuery $ wrapper, so it is now a jQuery object
// And the output will be undefined

document.querySelector(".buttonGood").addEventListener("click",user.clickHandler.bind(user));
document.querySelector(".buttonError").addEventListener("click",user.clickHandler); // undefined


// Just try to remember this single upshot: callback functions are completely 
// at the power of the higher order function calling them. 
// That outer enclosing function is the call site.