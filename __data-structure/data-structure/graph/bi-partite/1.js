
const { createGraph } = require("../1.js")

const bfs = (graph, visited, src) => {
    const queue = [src]
    visited[src] = 0

    while (queue.length) {
        const curr = queue.shift()
        for (const nbr of graph[curr]) {
            if (visited[nbr] === -1) {
                queue.push(nbr)
                visited[nbr] = 1 - visited[curr]
            } else {
                if (visited[nbr] === visited[curr]) {
                    return false
                }
            }
        }
    }

    return true
}

const bipartite = (edges) => {
    const graph = createGraph(edges)
    const n = Object.keys(graph).length
    const visited = Array(n).fill(-1)
    for (let node = 0; node < n; node++) {
        if (visited[node] === -1 && !bfs(graph, visited, node)) {
            return false
        }
    }
    return true
}

const edges = [[0, 1], [1, 2], [2, 0], [3, 4], [3, 4], [5, 4]]

console.log(bipartite(edges))