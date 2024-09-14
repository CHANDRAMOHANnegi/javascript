const circuitBreaker = (fn, times, delay) => {
    let failures = times;
    let isOpen = false; // Prevents unwanted calls when service is unavailable
    let timer = null;

    const inner = function () {
        if (isOpen) {
            console.log("service unavailable");
            return; // Prevent further execution when the circuit is open
        }

        try {
            return fn(); // Try executing the function
        } catch (error) {
            console.log(error); // Log the error
            failures--;

            if (failures <= 0) {
                isOpen = true; // Open the circuit
                console.log("Circuit open, service unavailable");

                timer = setTimeout(() => {
                    failures = times; // Reset failure count
                    isOpen = false;    // Close the circuit
                    console.log("Service is now available");
                }, delay);
            }
        }
    };

    return inner;
};


// Test function
const testFunction = () => {
    let count = 0;

    return function () {
        count++;
        if (count < 4) {
            throw "failed"; // Throw an error until the 4th call
        } else {
            return "hello"; // Return "hello" after 3 failures
        }
    };
};

let t = testFunction();
let c = circuitBreaker(t, 3, 200);

c(); // "error"
c(); // "error"
c(); // "error"

// Service is closed for 200ms
c(); // "service unavailable" 
c(); // "service unavailable"
c(); // "service unavailable"

// Service becomes available after 300ms
setTimeout(() => {
    console.log(c()); // "hello" (service restored after delay)
}, 300);
