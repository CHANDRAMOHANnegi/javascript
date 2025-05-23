/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

var canCompleteCircuit = function (gas, cost) {
    const n = gas.length

    for (let i = 0; i < n; i++) {
        let oil = 0
        let j = 0
        while (j < n) {
            const index = (i + j) % n
            oil += gas[index] - cost[index]
            if (oil < 0) break
            j++
        }
        if (j === n) return i
    }

    return -1
};