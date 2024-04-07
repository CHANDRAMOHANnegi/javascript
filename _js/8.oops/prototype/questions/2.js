function User(name) {
  this.name = name;
}

/**
 * if we replace the default prototype as a whole, then there will be no "constructor" in it.
 * */

User.prototype = {}; // (*)

/**
 * forgets to recreate constructor to reference User, then it would fail.
 * */

let user = new User("John");
let user2 = new user.constructor("Pete");

alert(user2.name); // undefined

/**
 * FIX
 **/

// 1. Not overwrite Rabbit.prototype totally just add to it
Rabbit.prototype.jumps = true;
// the default Rabbit.prototype.constructor is preserved

// 2. recreate the constructor property manually:
Rabbit.prototype = {
  jumps: true,
  constructor: Rabbit,
};

// now constructor is also correct, because we added it
