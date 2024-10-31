
const { createGraph } = require("../1.js")


const bfs = (src, graph, visited) => {
    const queue = []
    queue.push(src)
    let level = 0

    while (queue.length) {
        const curr = queue.shift()

        if (visited[curr] === -1) {
            visited[curr] = level
        } else {
            if (visited[curr] != level) {
                return false
            }
        }

        for (const nbr of graph[curr]) {
            if (visited[nbr] === -1) {
                queue.push(nbr)
            }
        }
        level++
    }

    return true
}

const bipartite = (graph, n) => {
    const visited = Array(n).fill(-1)

    let vtx = 0

    while (vtx < n) {
        if (visited[vtx] === -1) {
            const isBipartite = bfs(vtx, graph, visited)
            if (!isBipartite)
                return false
        }
        vtx++
    }
    return true
}

const edges = [[0, 1], [1, 2], [2, 0], [3, 4], [3, 4], [5, 4]]
const graph = createGraph(edges, edges.length)

console.log(bipartite(graph, edges.length))