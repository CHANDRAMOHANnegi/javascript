/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (!intervals.length) return 0
        const [starts, ends] = intervals.reduce((all, a) => [[...all[0], a.start],
        [...all[1], a.end]], [[], []])

        starts.sort((a, b) => a - b)
        ends.sort((a, b) => a - b)

        let start = 1
        let end = 0
        let max = 1
        let count = 1

        while (end < ends.length) {
            if (starts[start] < ends[end]) {
                count++
                start++
            } else {
                count--
                end++
            }
            max = Math.max(count, max)
        }

        return max
    }
}
