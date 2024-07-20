const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"

/**
 * Here
 *
 * */

// Create a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Create a new object
let person = Object.create(Person.prototype);

// Add a method to the prototype
Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

// Call the method on the new object
person.sayHello();
