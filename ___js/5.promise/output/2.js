function testPromise() {
    console.log('Start');
    const p = new Promise((resolve, reject) => {
        console.log('Inside Promise');
        resolve('Resolved');
    });
    p.then(result => console.log(result));
    console.log('End');
}

testPromise();
