

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
            if (distances[nbr] === undefined || newDistance < distances[nbr]) {
                distances[nbr] = newDistance;
                pQueue.enqueue(nbr, newDistance);
            }
        }
    }

    return distances; // Return shortest distances to all nodes
}

console.log(dijkstraPriority(graph, "A")); // Outputs: { A: 0, B: 1, C: 3, D: 4 }
