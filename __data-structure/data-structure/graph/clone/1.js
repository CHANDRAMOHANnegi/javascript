/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */


var cloneGraph = function (node) {
    if (!node) return null

    const graph = {
        [node.val]: []
    }

    const traverse = (node) => {
        if (!node) return null
        for (const nbr of node.neighbors) {
            if (!graph[node.val].includes(nbr.val)) {
                graph[node.val].push(nbr.val)
                if (!graph[nbr.val]) {
                    graph[nbr.val] = [node.val]
                }
                traverse(nbr)
            }
        }
    }
    traverse(node)

    /****
     * i was not able to convert adjacency list to graph nodes, below part
     * **/

    const map = new Map()

    for (const key in graph) {
        map.set(Number(key), new _Node(Number(key)))
    }

    for (const key in graph) {
        const currentNode = map.get(Number(key))
        currentNode.neighbors = graph[key].map(n => map.get(n))
    }

    return map.get(node.val)
};