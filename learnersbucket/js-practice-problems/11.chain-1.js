const calculator = {
    total: 0,
    add: function (n) {
        this.total += n
        return this
    },
    subtract: function (n) {
        this.total -= n
        return this
    },
    divide: function (n) {
        this.total /= n
        return this
    },
    multiply: function (n) {
        this.total *= n
        return this
    },
};

calculator.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator.total);