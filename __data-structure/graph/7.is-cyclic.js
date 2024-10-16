const { createGraph } = require("./1.js");

// r m w a

const bfs = (graph, src, visited) => {
    const queue = []
    queue.push({ src, psf: src + "" })

    while (queue.length) {
        const curr = queue.shift()
        console.log(visited, curr);

        if (visited[curr.src]) {
            // cycle exist, so return 
            return true
        }

        visited[curr.src] = true

        graph[curr.src].forEach(child => {
            if (!visited[child]) {
                queue.push({ src: child, psf: curr.psf + child })
            }
        });
    }
    return false
}


var isCyclic = (edges) => {
    const graph = createGraph(edges)
    const n = Object.keys(graph).length
    console.log(n);
    console.log(graph);
    
    const visited = [...Array(n)].fill(false)
    /***
     * 
     * When traversing, you just have to mark visited vertices,
     * so we do not need to reset visited on each iteration
     * 
     * ***/ 
    
    for (let vtx = 0; vtx < n; vtx++) {
        if (!visited[vtx]) {
            const cyclic = bfs(graph, vtx, visited)
            if (cyclic) {
                console.log('there is cycle', );
                return
            }
        }
    }
    console.log("no cycle");
}


const edges = [[0, 1], [1, 2], [2, 0]]

isCyclic(edges)

// bfs(graph, 0)