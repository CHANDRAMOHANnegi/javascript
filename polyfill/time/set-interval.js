import createSetTimeout from './set-timeout.js'

function createInterval() {
    var intervalId = 1;
    var intervalMap = {};

    var { clearTimeoutPoly, setTimeoutPoly } = createSetTimeout()

    function setIntervalPoly(callback, delay, ...args) {
        var id = intervalId++;

        function reiterate() {
            intervalMap[id] = setTimeoutPoly(function name(params) {
                callback.apply(this, args)
                if (intervalMap[id]) {
                    reiterate()
                }
            }, delay);
        }
        reiterate()
        return id;
    }

    function clearIntervalPoly(id) {
        clearTimeoutPoly(id)
        delete intervalMap[id]
    }
    return { setIntervalPoly, clearIntervalPoly }
}

var { setIntervalPoly, clearIntervalPoly, } = createInterval()

var counter = 0;
var myId = setIntervalPoly(function name(params) {
    counter++;
    console.log('Welcome ', params)
    if (counter >= 2) clearIntervalPoly(myId)
}, 1000, "cm")