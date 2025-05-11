
// with reduce
const asyncSeriesExecuterReduce = async function (promises) {
    console.log('start');
    // const promise = new Promise(()=>{})
    const results = []
    /****
     * 
     * here a closure of "result"  will be formed, and that closure will get updated by reduce function
     * 
     * **/
    const finalPromise = promises.reduce((acc, promise) => {
        console.log('----->', acc);

        return acc.then((s) => {
            console.log('-=', s);

            return promise().then(d => {
                console.log('-----', d);
                results.push(d);
                return results;
            })
        })
    }, Promise.resolve())
    console.log('end');
    return finalPromise//.then((d) => { console.log('===', d) })
}

const asyncTask = function (i) {
    return new Promise((resolve, reject) => {
        console.log('start', i)
        setTimeout(() => resolve(`Completing ${i}`), 100 * i)
    });
}

const promises = [
    () => asyncTask(3),
    () => asyncTask(1),
    () => asyncTask(7),
    () => asyncTask(2),
    () => asyncTask(5),
];

const d = asyncSeriesExecuterReduce(promises)
console.log(']]]', d);

d.then(d => {
    console.log('=-=', d);
})
// Output:
// "Completing 3"
// "Completing 1"
// "Completing 7"
// "Completing 2"
// "Completing 5"