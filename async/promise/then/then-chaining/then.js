function asyncFunc() {
    return new Promise(
        function (resolve, reject) {
            setTimeout(() => {
                console.log('asyncFunc');
                resolve("result");
            }, 1000);
            // reject("error");
        });
}

asyncFunc()
    .then(result => {
        return new Promise(
            function (resolve, reject) {
                setTimeout(() => {
                    console.log(result);
                    resolve("inner result");
                }, 1000);
                // reject("error");
            });
    }).then(d => {
        console.log('outer', d);
    })
    .catch(error => {
        console.log('error', error);
    });