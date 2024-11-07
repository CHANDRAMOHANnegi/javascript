
const { createGraph } = require("../1.js")

/*****
 * bfs is good for levels
 * ***/

const bfs = (src, graph, visited) => {
    const queue = []
    queue.push({ src, level: 0 })

    while (queue.length) {
        const curr = queue.shift()

        /*****
         * This was giving TLE
         * ****/

        /***
         * check for vertex with no edges
         * ***/
        if (graph[curr.src]) {
            for (const nbr of graph[curr.src]) {
                if (visited[nbr] === -1) {
                    visited[nbr] = curr.level + 1;
                    queue.push({ src: nbr, level: curr.level + 1 })
                } else {
                    /**
                     * if adjacent nodes have same levels then its not bipartite
                     * **/
                    if (visited[nbr] === curr.level) {
                        return false
                    }
                }
            }
        }
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