const obj = {
    a: 10,
    b: function (c) {
        console.log('b->', this);
        c?.()
    },
    c: () => {
        console.log('c->', this);
    },
    d: function () {
        // console.log(this);
        this.b(this.b)
        // this.b(this.c.bind(this))
    },
    e: function () {
        // console.log(this);
        this.c(this.c)
        // this.b(this.c.bind(this))
    }
}

obj.d()