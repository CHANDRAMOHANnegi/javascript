function getThis() {
    console.log(this)
}

const obj = {
    name: "cm",
    age: 26,
    increase: function () {
        this.age++

        (function name(params) {
            console.log(age)
             age=10
        })()

        return this.age
    },
}

// const myBind = getThis.bind(obj)

console.log(obj.increase());

// myBind()