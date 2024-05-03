

const calculator = {
    total: 0,
    // your code goes here...
    add: function (a) {
        this.total += a
        return this
    },
    subtract: function (s) {
        this.total -= s
        return this
    },
    multiply: function (m) {
        this.total *= m
        return this
    },
    divide: function (d) {
        this.total /= d
        return this
    }
};

calculator.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator.total);