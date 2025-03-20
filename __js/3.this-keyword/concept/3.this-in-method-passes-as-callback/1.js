// We have a simple object with a clickHandler method that we want to use when a button on the page is clicked
var user = {
    data: [
        { name: "T. Woods", age: 37 },
        { name: "P. Mickelson", age: 43 }
    ],
    clickHandler: function (event) {
        console.log(this);
        console.log(event);

        var randomNum = ((Math.random() * 2 | 0) + 1) - 1; // random number between 0 and 1

        // This line is printing a random person's name and age from the data array
        console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
    }
}

// The button is wrapped inside a jQuery $ wrapper, so it is now a jQuery object
// And the output will be undefined because there is no data property on the button object
document.querySelector("button").addEventListener("click", user.clickHandler); // Cannot read property '0' of undefined

/****
 * In the code above, since the button ($(“button”)) is an object on its own,
 * and we are passing the user.clickHandler method to its click() method as a callback,
 *  we know that this inside our user.clickHandler method will no longer refer to
 * the user object. this will now refer to the object where the user.clickHandler
 *  method is executed because this is defined inside the user.clickHandler method.
 *  And the object that is invoking user.clickHandler is the button object—user.clickHandler
 *  will be executed inside the button object’s click method.
 * **/

//! HERE button is invoking the callback, not user 

/***
 * 
 * Note that even though we are calling the clickHandler () method with user.clickHandler 
 * (which we have to do, since clickHandler is a method defined on user), 
 * the clickHandler () method itself will be executed with the button object as the context 
 * to which “this” now refers. So this now refers to is the button ($(“button”)) object.
 * **/
