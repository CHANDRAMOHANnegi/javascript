/*****
 * for-of loop is the simplest
 * 
 * 1. for loop with await ensures sequential execution, 
 * each iteration waiting for the previous one to finish.
 * it waits for each operation to finish before moving to the next.
 * 
 * 2. map() with Promise.all() allows parallel execution of asynchronous tasks.
 * 
 * ****/

const asyncSeriesExecuterForOf = async function (promises) {
    console.log('start');
    const results = []
    for (const promise of promises) {
        const res = await promise
        console.log(res);
        results.push(res)
    }
    console.log('end');
    return results
}

// with reduce
const asyncSeriesExecuterReduce = async function (promises) {
    console.log('start');
    // const promise = new Promise(()=>{})
    const results = []
    const finalPromise = promises.reduce((acc, promise) => {
        return acc.then(() => {
            return promise.then(d => {
                console.log(d);
                results.push(d);
                return results;
            })
        })
    }, Promise.resolve())
    console.log('end');
    return finalPromise//.then((d) => { console.log('===', d) })
}

// with recursion
const asyncSeriesExecuterRec = async function (promises) {
    const promise = promises.shift()
    const res = await promise

    console.log(res);
    if (promises.length) {
        asyncSeriesExecuterRec(promises)
    }
}

const asyncTask = function (i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Completing ${i}`), 100 * i)
    });
}

const promises = [
    asyncTask(3),
    asyncTask(1),
    asyncTask(7),
    asyncTask(2),
    asyncTask(5),
];

const pro = asyncSeriesExecuterReduce(promises);

pro.then(d => {
    console.log('=-=', d);
})
// Output:
// "Completing 3"
// "Completing 1"
// "Completing 7"
// "Completing 2"
// "Completing 5"