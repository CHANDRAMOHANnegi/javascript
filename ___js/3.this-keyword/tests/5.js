
function inc() {
    console.log("inc", this);
    let x = 0;
    function inner() {
        x++;
        console.log("inner inc : ", x, this);
    }
    return inner;
}

const i = inc();

i(); // 1
i(); // 2
