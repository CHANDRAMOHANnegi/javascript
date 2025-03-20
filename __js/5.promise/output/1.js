function example() {
    console.log('Start');

    let promise = new Promise((resolve, reject) => {
        console.log('Promise Executing executor');
        setTimeout(() => resolve('Promise Resolved'), 1000);
    });

    promise.then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });

    console.log('End');
}

example();
