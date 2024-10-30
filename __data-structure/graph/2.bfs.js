const { createGraph } = require("./1.js");

// r m w a

const bfs = (graph, src) => {
    const queue = []
    queue.push({ src, psf: src + "" })
    const visited = [...Array(graph.length)]

    while (queue.length) {
        // remove
        const curr = queue.shift()
        if (visited[curr.src]) {
            continue
        }

        // mark
        visited[curr.src] = true

        // work
        console.log(curr.src + "@" + curr.psf);

        // add children
        graph[curr.src].forEach(child => {
            if (!visited[child]) {
                queue.push({ src: child, psf: curr.psf + child })
            }
        });
    }
}

const n = 3
const edges = [[0, 1], [1, 2], [2, 0]]
const graph = createGraph(edges)
console.log(graph);

bfs(graph, 0)

/*****
 * 
 * When traversing we have to use vertices, not edges,
 * all vertices are in graph 
 * 
 * *****/
