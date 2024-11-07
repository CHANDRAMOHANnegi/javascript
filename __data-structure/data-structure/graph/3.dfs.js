// User function Template for javascript

/**
 * @param {number[][]} adj
 * @returns {number[]}
 */

class Solution {
    // Function to return a list containing the DFS traversal of the graph.
    dfsOfGraph(adj) {
        const visited = Array(adj.length).fill(false)
        const list = []
        this.dfs(adj, 0, visited, list)
        return list
    }

    dfs(adj, idx, visited, list) {
        let i = 0
        list.push(idx)
        visited[idx] = true
        const nbrs = adj[idx]
        while (i < nbrs.length) {
            /****
             * pro-active check
             * ***/
            if (!visited[nbrs[i]]) {
                this.dfs(adj, nbrs[i], visited, list)
            }
            i++
        }
    }
}


/**
 * @param {number[][]} adj
 * @returns {number[]}
 */
class SSolution {
    // Function to return a list containing the DFS traversal of the graph.
    dfsOfGraph(adj) {
        const visited = Array(adj.length).fill(false)
        const list = []
        list.push(0)
        this.dfs(adj, 0, visited, list)
        return list
    }

    dfs(adj, idx, visited, list) {

        visited[idx] = true

        const nbrs = adj[idx]
        let i = 0
        while (i < nbrs.length) {
            if (!visited[nbrs[i]]) {
                list.push(nbrs[i])
                this.dfs(adj, nbrs[i], visited, list)
            }
            i++
        }
    }
}