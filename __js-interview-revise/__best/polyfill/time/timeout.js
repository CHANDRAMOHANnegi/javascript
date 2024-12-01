(function () {

    const timersMap = {}

    window.mySetTimeOut = function (callback, delay, ...args) {

        const start = Date.now()
        const timerId = Math.random() * Number.MAX_VALUE

        timersMap[timerId] = { callback, start, delay }

        function requestIdleCallback(fn) {
            if (window.requestIdleCallback) {
                window.requestIdleCallback(fn)
            } else {
                setTimeout(triggerCallback, 0)
            }
        }

        function triggerCallback() {
            if (!timersMap[timerId]) return
            const { callback, start, delay } = timersMap[timerId]
            if (Date.now() >= start + delay) {
                callback.apply(this, args)
                delete timersMap[timerId]
            } else {
                requestIdleCallback(triggerCallback)
            }
        }
        requestIdleCallback(triggerCallback)
        return timerId
    }

    window.clearMyTimeout = function (timerId) {
        delete timersMap[timerId]
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