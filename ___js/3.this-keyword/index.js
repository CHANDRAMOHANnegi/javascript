function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;
  const that = this;
  function growUp() {
    // In nonstrict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
    console.log(this.age++);
  }
  setTimeout(growUp.bind(this), 1000);
}

const p = new Person();
console.log(p);

// var person = {
//   firstName: "Penelope",
//   lastName: "Barrymore",
//   // Since the "this" keyword is used inside the showFullName method below, and the showFullName method is defined on the person object,
//   // "this" will have the value of the person object because the person object will invoke showFullName ()
//   showFullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// person.showFullName(); // Penelope Barrymore

// https://medium.com/@eamonocallaghan/the-this-keyword-in-javascript-made-simple-320eaddecc22
