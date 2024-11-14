
function hasCycleBFS(graph) {
    const visited = {};

    for (const node in graph) {
        if (!visited[node]) {
            const queue = [[node, null]];

            while (queue.length) {
                const [currentNode, currentParent] = queue.shift();
                visited[currentNode] = true;

                for (const neighbor of graph[currentNode]) {
                    if (!visited[neighbor]) {
                        queue.push([neighbor, currentNode]);
                    } else if (neighbor !== currentParent) {
                        return true;
                    }
                }
            }
        }
    }

    return false;
}

/*****
 * 
 * if a node has multiple parent, means there is chance of cycle
 * 
 * and if the node is visited and its current parent is not same as previous parent
 * 
 * means this node is traveled by some other path
 * 
 * 
 * 
 * 
 * ****/ 