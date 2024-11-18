

const removeNode = (parent, node, key) => {
    if (key === node.val) {
        if (root.left.left && root.left.right) {

        } else if (root.left.left) {

        } else if (root.left.right) {

        }
    }
}

var deleteNode = function (root, key) {
    if (!root) return root
    if (key === root.val) root = null
    removeNode(root, root.left, key)
    removeNode(root, root.right, key)
    return root
};