const ComputeAmount = function () {
    this.num = 0

    this.crore = (n) => {
        this.num += n * Math.pow(10,7)
        return this
    }

    this.lacs = (n) => {
        this.num += n * Math.pow(10,5)
        return this
    }

    this.thousand = (n) => {
        this.num += n * Math.pow(10,3)
        return this
    }

    this.ten = (n) => {
        this.num += n * Math.pow(10,1)
        return this
    }

    this.unit = (n) => {
        this.num += n * Math.pow(10,0)
        return this
    }

    this.value = (n) => {
        return this.num
    }

    return this
}

const amount = ComputeAmount().lacs(9).lacs(1).thousand(10).ten(1).unit(1).value();
console.log(amount,amount === 1010011); // true

const amount2 = ComputeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();
console.log(amount2,amount2 === 143545000);

