/**
 * @param {number[][]} intervals
 * @return {number}
 */

var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    let count = 0
    let prevEnd = intervals[0][1]

    // keep track of prevEnd,
    // if two intervals are overlapping, one which finishes first should be kept and other should be removed

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i]
        if (prevEnd > start) {
            count++
            prevEnd = Math.min(end, prevEnd)
        } else {
            prevEnd = end
        }
    }

    return count
};