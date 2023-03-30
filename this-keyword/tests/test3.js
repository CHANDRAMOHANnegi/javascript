const counter = {
    name: "cm",
    count: 0,
    increase: function () {
        console.log(this.count);
        this.count++
    }
}

counter.increase.call({ count: 5 })
// counter.increase()
// counter.increase()

console.log(counter);