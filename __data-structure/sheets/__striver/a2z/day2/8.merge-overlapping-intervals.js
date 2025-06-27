/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    const res = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        const [prevStart, prevEnd] = res[res.length - 1]
        const [start, end] = intervals[i]
        if (start <= prevEnd) {
            const newStart = Math.min(prevStart, start)
            const newEnd = Math.max(prevEnd, end)
            res[res.length - 1][0] = newStart
            res[res.length - 1][1] = newEnd
        } else {
            res.push(intervals[i])
        }
    }

    return res
};