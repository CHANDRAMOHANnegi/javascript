/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

const createGraph = (edges) => {
    const graph = {}
    for (const [course, dependency] of edges) {
        if (!graph[course]) graph[course] = []
        graph[course].push(dependency)
    }
    return graph
}

var canFinish = function (numCourses, prerequisites) {
    const graph = createGraph(prerequisites)
    const nodes = Object.keys(graph)

    const visited = Array(nodes.length).fill(false)
    const stack = Array(nodes.length).fill(false)

    const hasCycleDirectedDfs = (node) => {
        if (visited[node]) return false
        if (stack[node]) return true

        visited[node] = true
        stack[node] = true

        for (const nbr of (graph[node] ?? [])) {
            if (!visited[nbr]) {
                if (hasCycleDirectedDfs(nbr)) {
                    return true
                }
            }
            if (stack[nbr]) return true
        }
        stack[node] = false
        return false
    }

    for (let course = 0; course <= numCourses; course++) {
        if (!visited[course] && hasCycleDirectedDfs(course)) {
            return false
        }
    }

    return true
};