function getThisWithArgs(doge, saying) {
    console.log(doge, saying)
    console.log(this)
}

// getThisWithArgs("Doge says", "Very args!")
// getThisWithArgs.call({ name: "Dogec" }, "Doge says", "Very args!")
getThisWithArgs.apply({ name: "Dogec" }, ["Doge says", "Very args!"])

