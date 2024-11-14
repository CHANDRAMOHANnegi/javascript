
/*****
 * 
 * In Prim's algorithm (Greedy algorithms)
 * we acquire node with lesser weight,
 * so number of nodes may increase
 * connects all the vertices (the point where the sides meet) 
 * together so that the total weight of the edges 
 * is minimized without forming a cycle.
 * https://www.freecodecamp.org/news/prims-algorithm-explained-with-pseudocode/
 * ****/

// Define a graph as an adjacent list
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 1, 'D': 5 },
    'C': { 'A': 2, 'B': 1, 'D': 8, 'E': 10 },
    'D': { 'B': 5, 'C': 8, 'E': 2 },
    'E': { 'C': 10, 'D': 2 }
};

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

function prims2(graph) {
    const visited = new Set()
    const nodes = Object.keys(graph)

    const startNode = nodes[0]

    /*****
     * 
     * very important point,
     * add start to set
     * ! MOST important POINT, Mark start as visited
     * ***/
    visited.add(startNode)

    let edgesPool = {}
    edgesPool = { ...graph[startNode] }

    while (visited.size < nodes.length) {
        console.log(edgesPool);

        const [minNode, minWeight] = findMinEdge(edgesPool)

        visited.add(minNode)

        for (const [nbr, weight] of Object.entries(graph[minNode])) {
            if (!visited.has(nbr)) {
                edgesPool[nbr] = weight
            }
        }

        delete edgesPool[minNode]
    }
    return Array.from(visited);
}

console.log(prims2(graph));
