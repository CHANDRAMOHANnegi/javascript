const Event = function () {
    this.listeners = []
    this.subscribe = (fn) => {
        this.listeners.push(fn)
        return () => this.unsubscribe(fn)
    }
    this.unsubscribe = (fn) => {
        this.listeners = this.listeners.filter(listener => listener !== fn);
    }
    this.fire = (...args) => {
        this.listeners.forEach(fn => {
            fn(...args)
        })
    }
}

/* Test cases */
// // 1st observer
const eventHandler = function (item) {
    console.log("fired: " + item);
};

// // 2nd observer
const eventHandler2 = function (item) {
    console.log("Moved: " + item);
};

const event = new Event();

// // subscribe 1st observer
event.subscribe(eventHandler);
event.fire('event #1');

// // unsubscribe 1st observer
event.unsubscribe(eventHandler);
event.fire('event #2');
// Output: "fired: event #1"

// // subscribe 1st & 2nd observer
event.subscribe(eventHandler);
event.subscribe(eventHandler2);
event.fire('event #3');
// Output: "fired: event #3"
// Output: "moved: event #3"