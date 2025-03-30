const { createGraph } = require("../1.js");

const dfs = (graph, n, visited, psf, src, osrc) => {
    if (visited.size === n - 1) {//
        if (graph[src].includes(osrc)) {
            console.log("hamiltonian cycle", visited, psf);
        }
        return
    }
    visited.add(src)
    for (const nbr of graph[src]) {
        if (!visited.has(nbr)) {
            dfs(graph, n, visited, psf + nbr, nbr, osrc)
        }
    }
    visited.delete(src)
}

const hamiltonian = (edges, n, osrc) => {
    const graph = createGraph(edges)
    const visited = new Set()
    dfs(graph, n, visited, osrc + "", osrc, osrc,)
}

const n = 5
const src = 0
const edges = [[0, 1], [1, 2], [2, 3], [3, 0], [3, 4], [4, 0]]
const is = hamiltonian(edges, n, src)
