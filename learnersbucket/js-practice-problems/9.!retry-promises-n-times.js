const wait = (delay) => Promise.resolve(res => setTimeout(res, delay))

const retryWithDelay = async (operation, retries = 3, delay = 50, finalErr = 'Retry failed') => {

    try {
        await operation()
    } catch (error) {
        if (retries >= 0) {
            await wait(50)
            return retryWithDelay(operation, retries--);
        }
    } finally {
    }

}

// Input:
// Test function
const getTestFunc = () => {
    let callCounter = 0;
    return async () => {
        callCounter += 1;
        // if called less than 5 times
        // throw error
        if (callCounter < 5) {
            throw new Error('Not yet');
        }
    }
}

// Test the code
const test = async () => {
    await retryWithDelay(getTestFunc(), 10);
    console.log('success');
    await retryWithDelay(getTestFunc(), 3);
    console.log('will fail before getting here');
}

// Print the result
test().catch(console.error);

// Output
// "success" // 1st test
// "Retry failed" //2nd test