/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

var validPath = function (n, edges, source, destination) {
    const visited = new Set()

    const graph = createGraph(edges)
    console.log(graph);// { '0': [ 1, 2 ], '1': [ 0, 2 ], '2': [ 1, 0 ] }

    // return isValidPath(n,edges,source,destination,visited)
    const bool = isValidPathGraph(graph, source, destination, visited)

    return bool
}

function createGraph(edges) {
    let adjacencyList = {}

    for (let [a, b] of edges) {
        if (adjacencyList[a] === undefined) adjacencyList[a] = []
        if (adjacencyList[b] === undefined) adjacencyList[b] = []
        adjacencyList[a].push(b)
        adjacencyList[b].push(a)
    }

    return adjacencyList
}

var isValidPathGraph = function (graph, src, dest, visited) {
    if (src === dest) {
        return true
    }
    if (visited.has(src)) return false

    visited.add(src)

    for (const nbr of graph[src]) {
        if (isValidPathGraph(graph, nbr, dest, visited))
            return true
    }
    return false
}

var isValidPath = function (n, edges, source, destination, visited) {
    if (source === destination)
        return true

    visited[source] = true
    for (const [u, v] of edges) {
        if (u === source && !visited[v]) {
            if (isValidPath(n, edges, v, destination, visited)) return true
        } else if (v === source && !visited[u]) {
            if (isValidPath(n, edges, u, destination, visited)) return true
        }
    }

    return false
};


const n = 3
const edges = [[0, 1], [1, 2], [2, 0]]
const src = 0
const dest = 2
// { '0': [ 1, 2 ], '1': [ 0, 2 ], '2': [ 1, 0 ] }
// console.log(validPath(n, edges, src, dest))


module.exports = { createGraph }