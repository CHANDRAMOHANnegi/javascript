function Pet(name) {
  this.name = name;

  this.getName = () => this.name;
}

const cat = new Pet("Fluffy");

console.log(cat.getName()); // What is logged?

// this inside the arrow function equals to this of the outer scope

const { getName } = cat;
console.log(getName()); // What is logged?

// output

// Fluffy
// Fluffy
