let testThis = {
    x: 12,
    y: 20,
    add(obj) {
        // const { a, b, c } 
        let d = obj.a + obj.b + obj.c();
        // let d = obj.a + obj.b + obj.c.call(this);
        console.log('==', d);
        // console.log(this);
    },
    test() {
        //NaN
        this.add({
            a: this.x,
            b: this.y,
            c: function () {
                console.log('---', this);
                return this.x + this.y;
            },
        });
    },
};

// testThis.add()
testThis.test()