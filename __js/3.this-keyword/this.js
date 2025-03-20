// http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/
// https://thenewstack.io/mastering-javascript-callbacks-bind-apply-call/


// It’s important to bear in mind that once bind() sets a chosen ‘this’ value, it’s immutable.
//  That is, a function returned from bind() can never again be bound to a different ‘this’ value.

var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    // Since the "this" keyword is used inside the showFullName method below, and the showFullName method is defined on the person object,
    // "this" will have the value of the person object because the person object will invoke showFullName ()
    showFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }

}

person.showFullName(); // Penelope Barrymore

// A very common piece of jQuery code

// $("button").click(function (event) {
//     // $(this) will have the value of the button ($("button")) object
//     // because the button object invokes the click () method
//     console.log($(this).prop("name"));
// });


/****
 * 
 * I shall expound on the preceding jQuery example: The use of $(this),
 *  which is jQuery’s syntax for the this keyword in JavaScript, is used 
 * inside an anonymous function, and the anonymous function is executed 
 * in the button’s click () method. The reason $(this) is bound to the 
 * button object is because the jQuery library binds $(this) to the object
 *  that invokes the click method. Therefore, $(this) will have the value
 *  of the jQuery button ($(“button”)) object, even though $(this) is 
 * defined inside an anonymous function that cannot itself access the 
 * “this” variable on the outer function.
 * 
 * */ 