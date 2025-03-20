

const executor = (resolve, reject) => {
    setTimeout(() => {
        console.log("hello");
        resolve("5")
    }, 1000)
}

const p2 = new Promise(executor)

p2.then(d => {
    console.log("->1", d);
    // return new Promise(function (resolve, reject) {
    //     setTimeout(() => {
    //         // console.log(result);
    //         resolve("inner result"); // 3
    //     }, 1000);
    //     // reject("error");
    // })

    // return new Promise((res) => res("then return"))
    return "then return"
}).then(d => {
    console.log('->2', d);
}).then(() => {
    console.log("->3",);
})


p2.then(d => {
    console.log('->4', d);
}).then(() => {
    console.log("->5",);
})
