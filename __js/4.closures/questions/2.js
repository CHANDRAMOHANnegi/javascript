// closure in loop

for (let id = 0; id < 3; id++) {
    setTimeout(function () {
        console.log('seconds: ' + id);
    }, id * 1000);
}
