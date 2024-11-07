
/***
 * get distances of all other nodes from the start node
 * **/

function dijkstra2(graph, start) {
    const visited = new Set()

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

    const nodes = Object.keys(graph)

    const distances = {}

    nodes.forEach(node => distances[node] = Infinity)

    /***
     * KEY STEP
     * value of start point
     * **/ 
    distances[start] = 0;


    while (nodes.length) {
        /****
         * this step is very important we are popping out the node
         * whose distance from source is lowest
         * 
         * of all the nodes we will be adding the node with most priority to our network
         * ***/

        nodes.sort((a, b) => distances[a] - distances[b])

        const closestNode = nodes.shift()

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

console.log(dijkstra2(graph, "A"))
