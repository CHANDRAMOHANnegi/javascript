
function greet(name) {
    console.log(`Hello, ${name == null ? "friends" : name} `);
    console.log(`Hello, ${name ?? "friends"} `);
    console.log(`Hello, ${name || "friends"} `);
}

greet("cm")
greet(undefined)

//
greet(0)


function badTimeOut(timeout) {
    setTimeout(() => {
        console.log("hello");
    }, timeout || 1000);

    // here if you pass 0 as parameter , then it will considered falsy
}

badTimeOut(0)


function goodTimeOut(timeout) {
    setTimeout(() => {
        console.log("hello");
    }, timeout ?? 1000);

    // here if you pass 0 as parameter , then it will considered falsy
}

goodTimeOut(0)