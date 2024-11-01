/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

class PQ {
    constructor() {
        this.queue = []
    }
    enqueue(ele, priority) {
        const element = { element: ele, priority }
        let idx = 0

        while (idx < this.queue.length && this.queue[idx].priority <= priority) {
            idx++;
        }

        return this.queue.splice(idx, 0, element)
    }

    dequeue() {
        return this.queue.shift()
    }

    isEmpty() {
        return this.queue.length === 0
    }
}

const dijkstra = (graph, start, n) => {
    const visited = new Set()
    const pq = new PQ()
    pq.enqueue(start, 0)

    /******
     * nodes and edges
     * 
     * there can be a node which is not part of any edge
     * 
     * 
     * ***/
    const delays = Array(n + 1).fill(Infinity)
    delays[start] = 0
    while (!pq.isEmpty()) {
        const { element: curr, priority: currDelay } = pq.dequeue()

        if (delays[curr] === Infinity) continue

        visited.add(curr)

        for (const nbr in graph[curr]) {
            if (!visited.has(nbr)) {
                let newDelay = currDelay + graph[curr][nbr]
                if (newDelay < delays[nbr]) {
                    delays[nbr] = newDelay
                    pq.enqueue(nbr, newDelay)
                }
            }
        }
    }
    const res = Math.max(...delays.slice(1))
    return (res !== Infinity) ? res : -1
}

var networkDelayTime = function (times, n, k) {
    const graph = {}

    for (const [u, v, w] of times) {
        if (!graph[u]) graph[u] = {}
        graph[u][v] = w
    }
    return dijkstra(graph, k, n)
};