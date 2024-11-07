
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
    return Object.keys(edgesPool).reduce((acc, edge) => {
        let [minEd, minWei] = acc
        if (edgesPool[edge] < minWei) {
            minEd = edge
            minWei = edgesPool[edge]
        }
        return [minEd, minWei]
    }, [null, Infinity])
}

function prims2(graph) {
    const vSet = new Set()
    const nodes = Object.keys(graph)

    const startV = nodes[0]

    /*****
     * 
     * very important point,
     * add start to set
     * 
     * ***/
    vSet.add(startV)

    let edgesPool = {}
    edgesPool = { ...graph[startV] }

    while (vSet.size < nodes.length) {
        const [minEdge, minWeight] = findMinEdge(edgesPool)

        vSet.add(minEdge)

        for (const [nbr, wei] of Object.entries(graph[minEdge])) {
            if (!vSet.has(nbr)) {
                edgesPool[nbr] = wei
            }
        }

        delete edgesPool[minEdge]
    }
    return Array.from(vSet);
}

console.log(prims2(graph));
