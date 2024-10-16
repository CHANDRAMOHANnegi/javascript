
/*****
 * 
 * In Prim's algorithm (Greedy algorithms)
 * we acquire node with lesser weight,
 * so number of nodes may increase
 * connects all the vertices (the point where the sides meet) 
 * together so that the total weight of the edges 
 * is minimized without forming a cycle.
 * 
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
function findMinEdge(edges) {
    let minEdge = null;
    let minWeight = Infinity;
    for (const [v, weight] of Object.entries(edges)) {
        if (weight < minWeight) {
            minEdge = v;
            minWeight = weight;
        }
    }
    return [minEdge, minWeight];
}

// Find the minimum spanning tree using Prim's algorithm
function prim(graph) {
    // Initialize an empty set to hold the vertices in the MST
    const mst = new Set();

    // Select the first vertex to start the tree
    const startVertex = Object.keys(graph)[0];
    mst.add(startVertex);

    // Initialize the set of edges to consider
    const edges = graph[startVertex];

    /****
     * this act as pool of edges, we will add all edges here,
     * and then select edge with min weight
     * ***/

    // Iterate over the graph object until all vertices are in the MST
    while (mst.size < Object.keys(graph).length) {

        // Find the minimum edge in the set of edges
        const [minEdge, minWeight] = findMinEdge(edges);

        // Add the vertex to the MST
        mst.add(minEdge);

        // Add the edges connected to the vertex to the set of edges to consider
        for (const [v, weight] of Object.entries(graph[minEdge])) {
            if (!mst.has(v)) {
                edges[v] = weight;
            }
        }

        // Remove the minimum edge from the set of edges to consider
        delete edges[minEdge];
        /***
         * removing edge is very important
         * ****/
    }

    // Return the MST as an array
    return Array.from(mst);
}

// // Call the prim function with the graph object
// const minimumSpanningTree = prim(graph);

// // Log the result to the console
// console.log(minimumSpanningTree);

// Result: ['A', 'C', 'B', 'D', 'E']


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
    edgesPool = graph[startV]

    /*****
     * 
     * 
     * 
     * 
     * *****/ 

    while (vSet.size < nodes.length) {
        const [minEdge, minWeight] = Object.keys(edgesPool).reduce((acc, edge) => {
            let [minEd, minWei] = acc
            if (edgesPool[edge] < minWei) {
                minEd = edge
                minWei = edgesPool[edge]
            }
            return [minEd, minWei]
        }, [null, Infinity])

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
