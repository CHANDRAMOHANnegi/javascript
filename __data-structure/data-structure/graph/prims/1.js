const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 1, 'D': 5 },
    'C': { 'A': 2, 'B': 1, 'D': 8, 'E': 10 },
    'D': { 'B': 5, 'C': 8, 'E': 2 },
    'E': { 'C': 10, 'D': 2 }
};

// Modified function to find minimum edge with the starting node
function findMinEdge(edgesPool) {
    let minNode = null;
    let minWeight = Infinity;
    let startNode = null;

    for (const [fromNode, neighbors] of Object.entries(edgesPool)) {
        for (const [toNode, weight] of Object.entries(neighbors)) {
            if (weight < minWeight) {
                minNode = toNode;
                minWeight = weight;
                startNode = fromNode;
            }
        }
    }
    return [startNode, minNode, minWeight];
}

function prim(graph) {
    const visited = new Set();
    const mstEdges = [];
    const edgesPool = {};

    // Start from any node (let's start with the first node)
    const startNode = Object.keys(graph)[0];
    visited.add(startNode);

    // Initialize edgesPool with edges from the start node
    edgesPool[startNode] = graph[startNode];

    while (visited.size < Object.keys(graph).length) {
        const [from, to, weight] = findMinEdge(edgesPool);

        if (to === null) break;

        // Add edge to MST
        mstEdges.push({ from, to, weight });
        visited.add(to);

        // Add the new node's edges to the pool if not yet visited
        edgesPool[to] = graph[to];

        // Remove edges pointing to already visited nodes
        for (const node of Object.keys(edgesPool)) {
            edgesPool[node] = Object.fromEntries(
                Object.entries(edgesPool[node]).filter(([neighbor]) => !visited.has(neighbor))
            );
        }
    }

    return mstEdges;
}

console.log(prim(graph));
