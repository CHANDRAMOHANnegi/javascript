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
    if (!node) return node

    const graphMap = new Map()

    const cloneDfs = (current) => {
        if (graphMap.has(current)) return graphMap.get(current)

        const newNode = new _Node(current.val)
        graphMap.set(current, newNode)
        for (const nbr of current.neighbors) {
            newNode.neighbors.push(cloneDfs(nbr))
        }
        return newNode
    }

    return cloneDfs(node)
};

/*****
 * we keep the map of current node to cloned Node
 * 
 * 
 * 
 * ***/ 