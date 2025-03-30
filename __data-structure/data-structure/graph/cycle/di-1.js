const { createGraph } = require("../1.js");

var isCyclic = (edges) => {
    const graph = createGraph(edges)
    const n = Object.keys(graph).length

    const visited = Array(n).fill(false)
    const stack = Array(n).fill(false)
    /****
     * very important here we are keeping track of very new iteration
     * 
     * **/ 

    const hasCycleDfs = (node) => {
        if (stack[node]) return true
        if (visited[node]) return false

        visited[node] = true
        stack[node] = true

        for (const neighbor of graph[node]) {
            if (hasCycleDfs(neighbor)) {
                return true
            }
        }

        stack[node] = false
        return false
    }

    for (let vtx = 0; vtx < n; vtx++) {
        if (!visited[vtx] && hasCycleDfs(vtx)) {
            return true
        }
    }
    return false
}
const edges = [[0, 1], [1, 2], [2, 0]]
console.log("has cycle", isCyclic(edges));
