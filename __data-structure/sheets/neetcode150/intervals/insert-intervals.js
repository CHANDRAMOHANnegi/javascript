/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */


var insert = function (intervals, newInterval) {

    const [start, end] = newInterval
    const res = []
    let index = 0

    // add remaining intervals which comes before `newIntervals`
    while (index < intervals.length && start > intervals[index][1]) {
        res.push(intervals[index])
        index++
    }

    let [currStart, currEnd] = newInterval

    // merge intervals which comes before `newIntervals`
    /*****
     * 
     * intervals[index][0] <= newInterval[1]
     * 
     * 
     * 
     * **/ 
    while (index < intervals.length && intervals[index][0] <= newInterval[1]) {
        currStart = Math.min(currStart, intervals[index][0])
        currEnd = Math.max(currEnd, intervals[index][1])
        index++
    }

    res.push([currStart, currEnd])

    // add remaining intervals which comes after `newIntervals`
    while (index < intervals.length) {
        res.push(intervals[index])
        index++
    }

    return res
};