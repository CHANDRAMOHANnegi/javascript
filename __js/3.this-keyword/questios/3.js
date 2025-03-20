let testThis = {
    x: 12,
    y: 20,
    add(obj) {
        // const { a, b, c } 
        let d = obj.a + obj.b + obj.c();
        console.log('==', obj, d);
        // console.log(this);
    },
    test() {
        //the result is NaN
        this.add({
            a: this.x,
            b: this.y,
            c: () => {
                //this here is testThis, NOT the object literal here
                console.log(this);
                // console.log(this.a, this.b);
                return this.a + this.b;
            },
        });
    },
};

// testThis.add()
testThis.test()