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

/*******
 * Way 2 using function
 * ******/

const CALC = function () {

    this.total = 0
    this.add: function (n) {
        this.total += n
        return this
    }
    this.subtract: function (n) {
        this.total -= n
        return this
    }
    this.divide: function (n) {
        this.total /= n
        return this
    }
    this.multiply: function (n) {
        this.total *= n
        return this
    }
    this.value = () => this.total
}