

// PROMISE NESTING

async function lazyHello() {
    // await sleep()
    return Promise.resolve('hello')
}

async function one() {
    const res = await lazyHello()
    console.log(res);
    return res;
}

async function two() {
    return lazyHello()
}

async function three() {
    const res1 = await one()
    const res2 = await one()

    console.log(res1, res2);
}

// https://www.youtube.com/watch?v=zT0k4w_K4uM&ab_channel=mewtru
three()