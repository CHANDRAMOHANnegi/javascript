const obj = {
    numbers: [1, 2, 3],
    multiplier: 2,
    multiply() {
        return this.numbers.map(function (num) {
            return num * this.multiplier;
        }.bind(this));
    }
};
console.log(obj.multiply()); // [2, 4, 6]


