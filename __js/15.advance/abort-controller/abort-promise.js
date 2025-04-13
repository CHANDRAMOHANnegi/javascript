function myCoolPromiseAPI(text, { signal }) {
    return new Promise((resolve, reject) => {
        // If the signal is already aborted, immediately throw in order to reject the promise.
        if (signal.aborted) {
            reject(signal.reason);
            return;
        }

        // Perform the main purpose of the API
        // Call resolve(result) when done.

        // Watch for 'abort' signals
        signal.addEventListener("abort", () => {
            // Stop the main operation
            // Reject the promise with the abort reason.
            reject(signal.reason);
        });

        setTimeout(() => {
            resolve("helol world")
        }, 2000);
    });
}

const init = async () => {
    const abortController = new AbortController()
    setTimeout(() => {
        abortController.abort()
    }, 1000);

    try {
        const data = await myCoolPromiseAPI("text", { signal: abortController.signal })
        console.log('====>', data);
    } catch (error) {
        console.log(error);
    }
}

init()
