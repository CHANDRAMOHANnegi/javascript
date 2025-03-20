function Pet(name) {
  this.name = name;

  this.getName = () => this.name;
  this.getFullName = function () {
    // console.log(this);
    return this.name;
  }
}

const cat = new Pet("Fluffy");

console.log(cat.getName());
console.log(cat.getFullName());

const { getName, getFullName } = cat;
console.log(getName());
console.log(getFullName());

// this inside the arrow function equals to this of the outer scope
// output

// Fluffy
// Fluffy
// Fluffy
// undefined