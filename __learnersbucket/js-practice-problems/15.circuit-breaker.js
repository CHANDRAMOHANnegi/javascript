const circuitBreaker = function (fn, failCount, halt) {

    let isHalted = false

    const inner = () => {
        // console.log('service', isHalted);
        if (isHalted) {
            console.log("service unavailable");
            return
            /**
             * if you throw error here, that error need to be caught in
             * the return function call
             * */
            // throw "service unavailable"
        }

        try {
            const res = fn()
            return res
        } catch (error) {
            failCount--
            console.log('error', error, failCount);
            if (failCount > 0) {
                circuitBreaker(fn, failCount, halt)
            } else {
                isHalted = true
                console.log("service halted");
                setTimeout(() => {
                    isHalted = false
                }, halt);
            }
        }

    }

    return inner
}

// test function
const testFunction = () => {
    let count = 0;

    return function () {
        count++;
        if (count < 4) {
            throw "failed";
        } else {
            return "hello";
        }
    }
};

let t = testFunction();
let c = circuitBreaker(t, 3, 200);

c(); // "error"
c(); // "error"
c(); // "error"

// service is closed for 200 MS
c(); // "service unavailable" 
c(); // "service unavailable"
c(); // "service unavailable"
c(); // "service unavailable"
c(); // "service unavailable"

// service becomes available after 300ms
setTimeout(() => { console.log(c()); }, 300); // "hello";