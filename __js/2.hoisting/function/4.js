function test() {
    // console.log(y);
    var x, y;

    if (false) {
        x = 50;
    }

    console.log(x);
    console.log(y); // [Function y]

    y = 100;

    function y(params) {

    }

    console.log(y);
}

test();
