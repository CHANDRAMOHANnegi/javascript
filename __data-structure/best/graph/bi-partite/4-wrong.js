
const { createGraph } = require("../1.js")

const bfs = (src, graph, visited) => {
    const queue = []
    queue.push(src)

    /*********
     * we are keeping this global level variable, which is not correct, it is changing when 
     * we are traversing children and again coming a level up
     * 
     * for that we are keeping level in queue
     * ****/

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
        /**
         * 
         * it is not good to keep global variable, 
         * tracking them is difficult,
         * so keep data with that variable
         * 
         * **/ 
        level++
    }

    return true
}

const bipartite = (graph, n) => {
    /***
     * here we are using this visited array to keep levels
     * 
     * **/ 
    const visited = Array(n).fill(-1)

    let vtx = 0

    while (vtx < n) {
        if (visited[vtx] === -1) {
            const isBipartite = bfs(vtx, graph, visited)
            /***
             * if any one of the cycle is not bi-partite, then whole graph is not bipartite
             * "ek hi jhooth kafi hai jhootha kahlaye jaane ke liye"
             * ***/
            if (!isBipartite) {
                return false
            }
        }
        vtx++
    }
    return true
}

const edges = [[0, 1], [1, 2], [2, 0], [3, 4], [3, 4], [5, 4]]
const graph = createGraph(edges, edges.length)

console.log(bipartite(graph, edges.length))