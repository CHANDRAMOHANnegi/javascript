const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 1, 'D': 5 },
    'C': { 'A': 2, 'B': 1, 'D': 8, 'E': 10 },
    'D': { 'B': 5, 'C': 8, 'E': 2 },
    'E': { 'C': 10, 'D': 2 }
};

const minInEdgePool = (edgePool) => {
    let minNode = null, minWeight = Infinity
    for (const node in edgePool) {
        if (edgePool[node] < minWeight) {
            minNode = node
            minWeight = edgePool[node]
        }
    }
    return { minNode, minWeight }
}

const prims = (graph) => {
    const visited = new Set()
    const nodes = Object.keys(graph)

    const startNode = nodes[0]

    const edgePool = { ...graph[startNode] }
    visited.add(startNode)

    let mstWeight = 0
    let mstEdges = []

    while (visited.size < nodes.length) {
        const { minNode, minWeight } = minInEdgePool(edgePool)
        if (visited.has(minNode)) {
            delete edgePool[minNode]
            continue
        }

        mstWeight += minWeight
        mstEdges.push({ start: [...visited][visited.size - 1], end: minNode, weight: minWeight })

        visited.add(minNode)
        for (const nbr in graph[minNode]) {
            if (!visited.has(nbr)) {
                edgePool[nbr] = graph[minNode][nbr]
            }
        }
        delete edgePool[minNode]
    }

    return { mstEdges, mstWeight }

}

console.log(prims(graph));
