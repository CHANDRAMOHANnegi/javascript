let testThis = {
    x: 12,
    y: 20,
    add(obj) {
        // const { a, b, c } 
        let d = obj.a + obj.b + obj.c();
        // let d = obj.a + obj.b + obj.c.call(this);
        console.log('==', obj, d);
        // console.log(this);
    },
    test() {
        //NaN
        this.add({
            a: this.x,
            b: this.y,
            c: function () {
                console.log('---', this);

                //this here is the global object
                return this.x + this.y;
            },
        });
    },
};

// testThis.add()
testThis.test()