
// shortest path in terms of edges, 
// then use bfs, because that lie on edges 
// https://patrickkarsh.medium.com/dijkstras-shortest-path-algorithm-in-javascript-1621556a3a15
/***
 * 
 * Dijkstra algorithm is same as BFS,
 * we just have to use priority-queue in place of queue
 * 
 * priority queue, jiski priority jyada usko pehle bahar nikalti hai,
 * ya jiski value kam, use pehle bahar nikalti hai
 * 
 * get distances of all other nodes from the start node
 * we have as distances object which will be updated
 * 
 * ***/

const {PriorityQueue} = require("../queue/priority");

// Define a graph using an adjacency list
const graph = {
    A: { B: 1, C: 4 },       // Node A is connected to Node B with a weight of 1 and Node C with a weight of 4
    B: { A: 1, C: 2, D: 5 }, // ... and so on for other nodes
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};

function dijkstra(graph, start) {
    // Create an object to store the shortest distance from the start node to every other node
    let distances = {};

    // A set to keep track of all visited nodes
    let visited = new Set();

    // Get all the nodes of the graph
    let nodes = Object.keys(graph);

    // Initially, set the shortest distance to every node as Infinity
    for (let node of nodes) {
        distances[node] = Infinity;
    }

    // The distance from the start node to itself is 0
    distances[start] = 0;

    // Loop until all nodes are visited
    while (nodes.length) {
        // Sort nodes by distance and pick the closest unvisited node
        nodes.sort((a, b) => distances[a] - distances[b]);
        let closestNode = nodes.shift();

        // If the shortest distance to the closest node is still Infinity, 
        // then remaining nodes are unreachable and we can break
        if (distances[closestNode] === Infinity) break;

        // Mark the chosen node as visited
        visited.add(closestNode);

        // For each neighboring node of the current node
        for (let neighbor in graph[closestNode]) {
            // If the neighbor hasn't been visited yet
            if (!visited.has(neighbor)) {
                // Calculate tentative distance to the neighboring node
                let newDistance = distances[closestNode] + graph[closestNode][neighbor];

                // If the newly calculated distance is shorter than the previously known distance to this neighbor
                if (newDistance < distances[neighbor]) {
                    // Update the shortest distance to this neighbor
                    distances[neighbor] = newDistance;
                }
            }
        }
    }
    console.log(distances);

    // Return the shortest distance from the start node to all nodes
    return distances;
}

// Example: Find shortest distances from node A to all other nodes in the graph
// console.log(dijkstra(graph, "A")); // Outputs: { A: 0, B: 1, C: 3, D: 4 }



function dijkstra2(graph, start) {

    let distances = {} // distances of all other nodes from start
    let nodes = Object.keys(graph);
    const visited = new Set()

    for (const node of nodes) {
        distances[node] = Infinity
    }

    distances[start] = 0

    // loop all nodes
    while (nodes.length) {

        nodes.sort((a, b) => distances[a] - distances[b])

        const current = nodes.shift(); // may be least distance node

        if (distances[current] === Infinity) {
            // we break it, find some other way
            break
        }

        visited.add(current)

        for (const nbr in graph[current]) {
            if (!visited.has(nbr)) {
                const newDistance = distances[current] + graph[current][nbr]
                distances[nbr] = Math.min(distances[nbr], newDistance)
            }
        }

    }
    return distances
}

// console.log(dijkstra2(graph, "A")); // Outputs: { A: 0, B: 1, C: 3, D: 4 }

function dijkstraPriority(graph, start) {
    const pQueue = new PriorityQueue();
    pQueue.enqueue(start, 0);

    const visited = new Set();
    const distances = {}; // Track shortest distances from start to each node
    distances[start] = 0;

    while (!pQueue.isEmpty()) {

        const { vertex: current, priority: currentDistance } = pQueue.dequeue();

        if (visited.has(current)) {
            continue;
        }

        visited.add(current);

        for (const nbr of Object.keys(graph[current])) {
            const distance = graph[current][nbr];
            const newDistance = currentDistance + distance;

            // If new distance is shorter, update and enqueue
            if (distances[nbr]===undefined || newDistance < distances[nbr]) {
                distances[nbr] = newDistance;
                pQueue.enqueue(nbr, newDistance);
            }
        }
    }

    return distances; // Return shortest distances to all nodes
}

console.log(dijkstraPriority(graph, "A")); // Outputs: { A: 0, B: 1, C: 3, D: 4 }
