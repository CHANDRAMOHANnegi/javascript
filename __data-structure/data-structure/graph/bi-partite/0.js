
const { createGraph } = require("../1.js")
const bfs = (src, graph, visited) => {
    const queue = []
    queue.push({ src, level: 0 })

    while (queue.length) {
        const curr = queue.shift()
        if (graph[curr.src]) {
            for (const nbr of graph[curr.src]) {
                if (visited[nbr] === -1) {// neighbor is not visited
                    visited[nbr] = curr.level + 1;
                    queue.push({ src: nbr, level: curr.level + 1 })
                } else {

                    // neighbor is visited means there is cycle and if there is cycle 
                    // its level is same as its parent level
                    // ye pichhle level par visit hua hoga, and 
                    // nbr ka jo parent hai bo bhi usi level par tha, isi liye issue hai
                    // main jo issue hai vo cycle detection ka hai
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

    for (let vtx = 0; vtx < n; vtx++) {
        if (visited[vtx] === -1) {
            const isBipartite = bfs(vtx, graph, visited)
            if (!isBipartite)
                return false
        }
    }
    return true
}

const edges = [[0, 1], [1, 2], [2, 0], [3, 4], [3, 4], [5, 4]]
const graph = createGraph(edges, edges.length)

console.log(bipartite(graph, edges.length))