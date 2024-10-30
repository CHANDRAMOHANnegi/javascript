const { createGraph } = require("../1.js");

const dfs = (graph, n, visited, psf, src, osrc) => {
    if (visited.size === n - 1) {
        console.log("hamiltonian path", src, visited, psf);
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

const hamiltonian = (graph, n, osrc) => {
    const visited = new Set()
    /****
     * here we din't loop through all nodes, because we
     * just have to find path from src 
     * previously i was looping through all nodes,
     * instead of looping all node,
     * we put a check in dfs
     * check of visited length
     * *****/
    dfs(graph, n, visited, osrc + "", osrc, osrc,)
}

const n = 5
const src = 0
const edges = [[0, 1], [1, 2], [2, 3], [3, 0], [3, 4], [4, 0]]
const graph = createGraph(edges)
const is = hamiltonian(graph, n, src)
