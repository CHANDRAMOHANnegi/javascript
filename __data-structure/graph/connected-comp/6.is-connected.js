const { createGraph } = require("../1")

const drawTreeDfs = (graph, node, comp, visited) => {
    visited[node] = true
    comp.push(node)
    for (const nbr of graph[node]) {
        if (!visited[nbr]) {
            drawTreeDfs(graph, nbr, comp, visited)
        }
    }
}

const isConnected = (edges = []) => {
    const visited = Array(edges.length).fill(false)
    const graph = createGraph(edges)

    const res = []

    for (let idx = 0; idx < edges.length; idx++) {
        if (!visited[idx]) {
            drawTreeDfs(graph, idx, visited)
        }
    }
    return true
}

const edges = [[0, 1], [1, 2], [2, 0], [3, 4], [3, 4], [5, 4]]
const comps = connectedComponents(edges)
console.log(comps);
