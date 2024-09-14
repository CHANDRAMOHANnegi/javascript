const calculator = {
    total: 0,
    add: (num) => { this.total + num; return calculator },
    subtract: (num) => { this.total - num; return calculator },
    divide: (num) => { this.total / num; return calculator },
    multiply: (num) => { this.total * num; return calculator },
}

/***
 * Wrong because this points to global
 * **/

calculator.add(10).subtract(2).divide(2).multiply(5);

console.log(calculator.total);
