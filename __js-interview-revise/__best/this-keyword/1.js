const obj = {
    a: 10,
    b: function (c) {
        console.log('b->', this);
        c()
    },
    c: function () {
        console.log('c->', this);
    },
    d: function () {
        console.log(this);
        this.b(this.c)
        // this.b(this.c.bind(this))
    }
}

obj.d()