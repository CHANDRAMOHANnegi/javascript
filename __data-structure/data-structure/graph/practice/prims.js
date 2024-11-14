// Find the minimum edge in the edge list
function findMinEdge(edgesPool) {
    return Object.keys(edgesPool).reduce((acc, node) => {
        let [minEd, minWeight] = acc
        if (edgesPool[node] < minWeight) {
            minEd = node
            minWeight = edgesPool[node]
        }
        return [minEd, minWeight]
    }, [null, Infinity])
}

const prims = (graph) => {
    const visited = new Set()
    const startNode = Object.keys(graph)[0]

    const edgePool = { ...graph[startNode] }

    visited.add(startNode)

    while (visited.size < Object.keys(graph).length) {
        const [minNode, minWeight] = findMinEdge(edgePool)

        visited.add(minNode)

        for (const nbr in graph[minNode]) {
            if (!visited.has(nbr)) {
                edgePool[nbr] = graph[minNode][nbr]
            }
        }
        delete edgePool[minNode]
    }

    return [...visited]
}

const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 1, 'D': 5 },
    'C': { 'A': 2, 'B': 1, 'D': 8, 'E': 10 },
    'D': { 'B': 5, 'C': 8, 'E': 2 },
    'E': { 'C': 10, 'D': 2 }
};

console.log(prims(graph))