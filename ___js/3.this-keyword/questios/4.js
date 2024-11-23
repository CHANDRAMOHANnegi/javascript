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
        //64 as expected
        this.add({
            a: this.x,
            b: this.y,
            c: () => {
                return this.x + this.y;
            },
        });
    },
};

// testThis.add()
// testThis.test()
// testThis.test2()
testThis.test()