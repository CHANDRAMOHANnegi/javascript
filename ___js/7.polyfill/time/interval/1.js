(function () {
    const timersMap = {}

    window.mySetInterval = function (callback, interval, ...args) {

        const timerId = Math.random() * Number.MAX_VALUE
        const start = Date.now()
        timersMap[timerId] = { callback, interval, start }

        function triggerCallback() {
            if (!timersMap[timerId]) return
            const { callback, interval, start } = timersMap[timerId]
            callback.apply(this, args)
            setTimeout(triggerCallback, interval)
        }

        setTimeout(triggerCallback, interval)
        return timerId
    }

    window.clearMyInterval = function (timerId) {
        delete timersMap[timerId] // Remove the timer from timersMap to cancel it
    }
})()


var callback = function (name) {
    console.log("Hello, welcome " + name);
};

var callback2 = function (name) {
    console.log("Hello, welcome " + name);
};

var id = mySetTimeOut(callback, 2000, "cm");
var id2 = mySetTimeOut(callback2, 5000, "cm2");

console.log({ id, id2 });