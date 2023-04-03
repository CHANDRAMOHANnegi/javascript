
let person = {
    name: "Leonardo"
};
let animal = {
    species: "snake"
};

Object.freeze(person);

// uncomment below line and it will behave differently
// person=animal
person.name = "Lima"; //TypeError: Cannot assign to read only property 'name' of object
console.log(person);