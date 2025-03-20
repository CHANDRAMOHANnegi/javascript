const fetchWithTimeout = async function (url, options) {

    return new Promise((resolve, reject) => {
        const { timeout, ...restOptions } = options
        let timer = timeout

        const abortController = new AbortController()
        const signal = abortController.signal

        let timerId = setTimeout(() => {
            console.log('Aborted');
            abortController.abort()
        }, timeout);
        fetch(url, { ...restOptions, signal }).then(response => {
            clearTimeout(timerId)
            resolve(response.json())
        }).catch((error) => {
            reject("Timeout", error)
        })
    })
}

fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', { timeout: 1000 }).then((resp) => {
    console.log(resp);
}).catch((error) => {
    console.error(error);
});