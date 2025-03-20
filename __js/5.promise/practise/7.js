async function chainAsync() {
    let result1 = await Promise.resolve('First');
    console.log(result1);
    let result2 = await Promise.resolve('Second');
    console.log(result2);
}

chainAsync();
