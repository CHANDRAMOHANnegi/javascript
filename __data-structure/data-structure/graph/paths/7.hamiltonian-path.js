const { createGraph } = require("../1.js");

// dfs
/****
 * why DFS
 * 
 * DFS is more efficient for exploring deep paths within the graph.
 * 
 * ***/ 


const dfs = (graph, n, visited, psf, src, osrc) => {
    if (visited.size === n - 1) {
        /******
         * here we are checking it, even before pushing the last element
         * 
         * **/ 
        console.log("hamiltonian path", src, visited, psf);
        if (graph[src].includes(osrc)) {
            console.log("hamiltonian cycle", visited, psf);
        }
        return
    }

    /***
     * pre-order
     * **/ 
    visited.add(src)
    for (const nbr of graph[src]) {
        if (!visited.has(nbr)) {
            dfs(graph, n, visited, psf + nbr, nbr, osrc)
        }
    }
    /***
     * below step is very important, backtracking
     * pre-order, so remove here
     * **/ 
    console.log(src,psf);
    
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


// A Hamiltonian path is a path that visits every vertex of a graph exactly once.
// The path can start and end at different vertices, 
// and it doesn't have to use all the edges in the graph