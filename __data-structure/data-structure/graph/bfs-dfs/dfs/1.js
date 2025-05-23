function hasCycleDFS(graph, node, visited, parent) {
    visited[node] = true;

    for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
            if (hasCycleDFS(graph, neighbor, visited, node)) {
                return true;
            }

            /****
             * this node is visited but it is not my parent,
             * means it is visited from some other ways
             * so there is cycle
             * 
             * node ke children me bas uska parent hi visited hoga, 
             * agar ye child parent nahi hai, to kahi aur se visit hua hai
             * matlab cycle hai
             * 
             * ***/
        } else if (neighbor !== parent) {
            return true;
        }
    }

    return false;
}

const graph = { '0': [1, 2], '1': [0, 2], '2': [1, 0] }

console.log(hasCycleDFS(graph, "0", {}, null));
