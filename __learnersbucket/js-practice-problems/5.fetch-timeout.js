const fetchWithTimeout = async function (url, options) {
    const { timeout, ...restOptions } = options
    let timer = timeout

    const abortController = new AbortController()
    const signal = abortController.signal

    const timerId = setTimeout(() => {
        abortController.abort()
    }, timeout);

    return new Promise((resolve, reject) => {
        try {
            fetch(url, { ...restOptions, signal }).then(response => {
                clearTimeout(timerId)
                resolve(response.json())
            })
        } catch (error) {
            reject("Timeout", error)
        } finally{
            clearTimeout(timerId)
        }
    })
}

fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 100).then((resp) => {
    console.log(resp);
}).catch((error) => {
    console.error(error);
});