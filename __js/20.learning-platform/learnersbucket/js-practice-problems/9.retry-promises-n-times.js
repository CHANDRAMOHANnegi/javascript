
const retryWithDelay = async (asyncFn, retries, delay = 50, finalError = "Failed") => {
    try {
        await asyncFn()
    } catch (error) {
        if (retries === 0) {
            throw new Error(finalError)
        }
        await new Promise((resolve) => setTimeout(resolve, delay));
        return retryWithDelay(asyncFn, retries - 1)
    }
}

const getTestFunc = () => {
    let callCounter = 0;
    return async () => {
        callCounter += 1;
        if (callCounter < 5) {
            throw new Error('Not yet');
        }
    }
}

const test = async () => {
    // await retryWithDelay(getTestFunc(), 10);
    // console.log('success');
    await retryWithDelay(getTestFunc(), 3);
    console.log('will fail before getting here');
}

test().catch(console.error);