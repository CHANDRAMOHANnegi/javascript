/**
 *
 *
 * The use of this in the global scope
 * In the global scope, when the code is executing in the browser,
 * all global variables and functions are defined on the window object.
 * Therefore, when we use this in a global function,
 * it refers to (and has the value of) the global window object
 * (not in strict mode though, as noted earlier)
 * that is the main container of the entire JavaScript application or web page.
 *
 */

var firstName = "Peter",
  lastName = "Ally";

function showFullName() {
  // "this" inside this function will have the value of the window object
  // because the showFullName () function is defined in the global scope, just like the firstName and lastName
  console.log(this.firstName + " " + this.lastName);
}

var person = {
  firstName: "Penelope",
  lastName: "Barrymore",
  showFullName: function () {
    // "this" on the line below refers to the person object, because the showFullName function will be invoked by person object.
    console.log(this.firstName + " " + this.lastName);
  },
};

showFullName(); // Peter Ally

// window is the object that all global variables and functions are defined on, hence:
window.showFullName(); // Peter Ally

// "this" inside the showFullName () method that is defined inside the person object still refers to the person object, hence:
person.showFullName(); // Penelope Barrymore
