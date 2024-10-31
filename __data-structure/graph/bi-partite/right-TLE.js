
const { createGraph } = require("../1.js")

/*****
 * 
 * bfs is good for levels
 * 
 * ***/

const bfs = (src, graph, visited) => {
    const queue = []
    queue.push({ src, level: 0 })

    while (queue.length) {
        const curr = queue.shift()

        /*****
         * This was giving TLE
         * ****/

        if (visited[curr.src] === -1) {
            visited[curr.src] = curr.level
        } else {
            if (visited[curr.src] != curr.level) {
                return false
            }
        }

        /***
         * check for vertex with no edges
         * 
         * ***/ 
        if(graph[curr.src])
        for (const nbr of graph[curr.src]) {
            if (visited[nbr] === -1) {
                queue.push({ src: nbr, level: curr.level + 1 })
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