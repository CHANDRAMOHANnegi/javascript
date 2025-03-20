function getThisWithArgs(dog, saying) {
  console.log(dog, saying);
  console.log(this);
}

// getThisWithArgs("Dog says", "Very args!")
// getThisWithArgs.call({ name: "Dog" }, "german shepher", "barkss");
// getThisWithArgs.apply({ name: "Dog" }, ["german shepher", "barkss"]);
