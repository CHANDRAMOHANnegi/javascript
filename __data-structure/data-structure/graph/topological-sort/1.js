
const createDirectedGraph = (edges) => {
    const graph = {}
    for (let [u, v] of edges) {
        u = `${u}`
        v = `${v}`
        if (!graph[u]) graph[u] = []
        graph[u].push(v)
        if (!graph[v]) graph[v] = []
    }
    return graph
}

const topologicalSort = (edges) => {

    const dfs = (start, directedGraph, stack) => {
        if (!directedGraph[start]) return
        if (visited.has(start)) return

        visited.add(start)
        for (const nbr of directedGraph[start]) {
            if (!visited.has(nbr)) {
                dfs(nbr, directedGraph, stack)
            }
        }
        stack.push(start)
    }

    const directedGraph = createDirectedGraph(edges)
    const visited = new Set()
    const stack = []

    for (const node in directedGraph) {
        if (!visited.has(node)) {
            dfs(node, directedGraph, stack)
        }
    }

    return stack//.reverse()
}


console.log(topologicalSort([[1, 0], [2, 0], [3, 1], [3, 2]]));
