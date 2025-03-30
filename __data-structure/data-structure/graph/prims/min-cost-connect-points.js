/**
 * @param {number[][]} points
 * @return {number}
 */

const manhattanDistance = (point1, point2) => {
    const [x1, y1] = point1
    const [x2, y2] = point2
    return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}

const createGraph = (points) => {
    const graph = {}

    for (const [x1, y1] of points) {
        const key1 = `${x1}-${y1}`
        for (const [x2, y2] of points) {
            const key2 = `${x2}-${y2}`
            if (key1 === key2) continue
            if (!graph[key1]) graph[key1] = {}
            graph[key1][key2] = Math.min(graph[key1][key2] ?? Infinity, manhattanDistance([x1, y1], [x2, y2]))
        }
    }

    return graph
}

const getMinOfEdges = (edgePool) => {

    let minVal = Infinity
    let minNode = null

    for (const node in edgePool) {
        if (edgePool[node] < minVal) {
            minVal = edgePool[node]
            minNode = node
        }
    }
    return { minVal, minNode }
}

var minCostConnectPoints = function (points) {
    const graph = createGraph(points)

    const visited = new Set()

    const nodes = Object.keys(graph)
    const startNode = nodes[0]
    let minCost = 0

    const edgePool = { ...graph[startNode] }
    // visited.add(startNode)// I forgot this point, i did wrong calculation
    visited.add(startNode)

    while (visited.size < nodes.length) {
        const { minVal, minNode } = getMinOfEdges(edgePool)

        if (visited.has(minNode)) {
            delete edgePool[minNode]
            continue
        }

        visited.add(minNode)
        minCost += minVal

        for (const nbr in graph[minNode]) {
            if (!visited.has(nbr)) {
                // edgePool[nbr] = graph[minNode][nbr] // 
                edgePool[nbr] = Math.min(edgePool[nbr] ?? Infinity, graph[minNode][nbr]) // 
            }
        }

        delete edgePool[minNode]
    }

    return minCost
};














