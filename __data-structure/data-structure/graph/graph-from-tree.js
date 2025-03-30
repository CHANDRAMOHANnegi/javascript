const createGraphfromTree = (node, graph) => {
    if (!node) return graph
    if (!(node.val in graph)) graph[node.val] = [];
    if (node.left) {
        graph[node.val].push(node.left.val)
        if (!(node.left.val in graph))
            graph[node.left.val] = []
        graph[node.left.val].push(node.val)
        createGraphfromTree(node.left, graph)
    }
    if (node.right) {
        graph[node.val].push(node.right.val)
        if (!(node.right.val in graph))
            graph[node.right.val] = []
        graph[node.right.val].push(node.val)
        createGraphfromTree(node.right, graph)
    }
    return graph
}

const graph = createGraphfromTree(root, {})
