
/***
 * get distances of all other nodes from the start node
 * GREEDY ALGORITHM
 * **/

function dijkstra(graph, start) {
    /***
     * 
     * instead of queue use priority-queue
     * nodes act as queue
     * 
     * nodes act as a priority queue which will
     * keep track of shortest distance element
     * from start
     * 
     * 
     * distances stores the shortest distance 
     * from the start node to every other node
     * 
     * everything is from start-node
     * 
     * **/
    
    const distances = {}
    const visited = new Set()
    
    const nodesQueue = Object.keys(graph)
    nodesQueue.forEach(node => distances[node] = Infinity)

    /***
     * KEY STEP
     * value of start point
     * ! in both prims and dijkstra there is key step
     * don't forget the key step
     * **/
    distances[start] = 0;


    while (nodesQueue.length) {
        /****
         * this step is very important we are popping out the node
         * whose distance from source is lowest
         * 
         * of all the nodesQueue we will be adding the node with most priority to our network
         * ***/

        nodesQueue.sort((a, b) => distances[a] - distances[b])
        const closestNode = nodesQueue.shift()

        // important check
        if (distances[closestNode] === Infinity) continue

        visited.add(closestNode)

        /****
         * iterate through the neighbors of closest-node
         * ***/

        for (const nbr in graph[closestNode]) {
            if (!visited.has(nbr)) {
                let closestDistanceOfNbr = graph[closestNode][nbr] + distances[closestNode]
                /*****
                 * why this check
                 * if current distance is less than some other path
                 * then we set this as min distance
                 * 
                 * if distance to the nbr is less than its previous distance so update the distance of that nbr,
                 * means we have found some smaller way
                 * 
                 * ****/
                if (closestDistanceOfNbr < distances[nbr]) {
                    distances[nbr] = closestDistanceOfNbr
                }
            }
        }
    }

    return distances
}

const graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};

console.log(dijkstra(graph, "A"))
// { A: 0, B: 1, C: 3, D: 4 }



// Dijkstra's Algorithm: Solves the single-source shortest path problem,
// where it finds the shortest path from a single source node to all other
// nodes in a weighted graph (all edge weights must be non-negative).