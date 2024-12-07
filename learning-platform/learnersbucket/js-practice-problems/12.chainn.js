
function computeAmount() {
    this.total = 0

    this.lacs = (num) => {
        this.total += num * 100000
        return this
    }

    this.crore = (num) => {
        this.total += num * 10000000
        return this
    }

    this.thousand = (num) => {
        this.total += num * 1000
        return this
    }

    this.value = () => {
        return this.total
    }

    return this
}

// console.log(computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value())

/******
 * Ways 2
 * ******/

const ComputedAmount = function () {
    return {
        total: 0,
        lacs: function (num) {
            this.total += num * 100000
            return this
        },
        crore: function (num) {
            this.total += num * 10000000
            return this
        },
        thousand: function (num) {
            this.total += num * 1000
            return this
        },
        value: function () {
            return this.total
        }
    }
}

console.log(ComputedAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value())

