let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  },
};

let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;

console.log(rabbit);
console.log(rabbit.jumps);
console.log(rabbit.eats);

// The Object.getOwnPropertyNames() static method returns an array of all
//  properties (including non-enumerable properties
console.log(Object.getOwnPropertyNames(rabbit));

let cow = {
  jumps: true,
  __proto__: animal,
};

console.log(cow);
