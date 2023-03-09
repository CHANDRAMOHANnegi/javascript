function asyncFunc() {
    const eventEmitter = { success: [] };

    setTimeout(() => { // (A)
        for (const handler of eventEmitter.success) {
            handler('DONE');
        }
    }, 0);

    return eventEmitter;
}

const x = asyncFunc()

console.log(x);

x.success.push(x => console.log('Result: ' + x)); // (B)

// console.log(x);
