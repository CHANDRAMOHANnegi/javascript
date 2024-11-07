/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */

const bfs = (graph, visited, src, flowers) => {
    const queue = []
    queue.push(src)

    while (queue.length) {
        const curr = queue.shift()
        if (graph[curr]) {
            visited[curr] = true
            // const flowersWeCantHave = new Set(graph[curr] ? graph[curr].map(nbr => flowers[nbr]) : []);
            // const flowersWeCantHave = graph[curr].reduce((all,ele)=>[...all,flowers[ele]],[])
            
            /****
             * 
             * a simple loop can increase time complexity
             * so choose proper data structure and proper function
             * 
             * i was using reduce instead of map, so it gave me TLE
             * 
             * a better approach is Set
             * 
             * ***/

            const flowersWeCantHave = graph[curr].map((ele) => flowers[ele])
            const flowersWeCanHave = [1, 2, 3, 4].filter(flow => !flowersWeCantHave.includes(flow))
            flowers[curr] = flowersWeCanHave[0]
            for (const nbr of graph[curr]) {
                if (!visited[nbr]) {
                    queue.push(nbr)
                }
            }
        }
    }
    return true
}

var gardenNoAdj = function (n, paths) {
    const graph = {}
    for (const [a, b] of paths) {
        if (!graph[a]) graph[a] = []
        if (!graph[b]) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }
    const visited = Array(n + 1).fill(false)
    const flowers = Array(n + 1).fill(1)

    let vtx = 1
    while (vtx <= n) {
        if (!visited[vtx]) {
            bfs(graph, visited, vtx, flowers)
        }
        vtx++
    }
    return flowers.slice(1)
};