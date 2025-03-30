const { createGraph } = require("../1.js");

const hasCycleDfs = (graph, visited, node, parent) => {
    visited[node] = true

    for (const nbr of graph[node]) {
        if (!visited[nbr]) {
            if (hasCycleDfs(graph, visited, nbr, node)) {
                return true
            }
        } else if (nbr != parent) {
            return true
        }
    }

    return false
}


var isCyclic = (edges) => {
    const graph = createGraph(edges)
    const n = Object.keys(graph).length
    const visited = [...Array(n)].fill(false)

    for (let vtx = 0; vtx < n; vtx++) {
        if (!visited[vtx]) {
            if (hasCycleDfs(graph, visited, vtx, null)) {
                return true
            }
        }
    }
    return false
}


const edges = [[0, 1], [1, 2], [2, 0]]

console.log("has cycle", isCyclic(edges))
