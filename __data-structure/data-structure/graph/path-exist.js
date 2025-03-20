/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

// dfs

const createGraph = (edges) => {
    const graph = {}
    for (const edge of edges) {
        const [node1, node2] = edge
        if (!graph[node1]) graph[node1] = []
        graph[node1].push(node2)
        if (!graph[node2]) graph[node2] = []
        graph[node2].push(node1)
    }
    return graph
}

const findPath = (graph, visited, src, dest) => {
    if (src === dest) return true
    if (visited[src]) return false // this check is needed only if graph may have cycles
    visited[src] = true
    for (const node of graph[src]) {
        if (!visited[node]) {
            if (findPath(graph, visited, node, dest)) {
                return true
            }
        }
    }
    // visited[src]=false
    /******
     * why not mark it as false,
     * 
     * because we want path to destination, and not all paths
     * 
     * Backtracking is useful for problems requiring all possible paths and combinations
     * 
     * if we reached some node and there is no way, we are not going to visit it again, so no need to backtrack
     * ****/ 
    return false
}

var validPath = function (n, edges, source, destination) {
    const graph = createGraph(edges)
    const visited = Array.from({ length: n })
    return findPath(graph, visited, source, destination)
};