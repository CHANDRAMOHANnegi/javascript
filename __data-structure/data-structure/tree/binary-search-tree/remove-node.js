/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

const findMax = (root) => {
    if (!root) return -Infinity
    return Math.max(findMax(root.left), findMax(root.right), root.val)
}

const removeNode = (node, key) => {
    if (!node) return node
    if (key < node.val) {
        node.left = removeNode(node.left, key)
    } else if (key > node.val) {
        node.right = removeNode(node.right, key)
    } else {
        if (node.val === key) {
            /*********
             * here i thought if we remove node, we need parent so we can connect children to parent,
             * 
             * but here we are not removing the node, we are replacing the data, and removing some other node
             * 
             * REPLACE data instead of removing node
             * 
             * ********/ 
            if (node.left && node.right) {
                const max = findMax(node.left)
                node.val = max
                node.left = removeNode(node.left, max)
                return node
            } else if (node.left) {
                return node.left
            } else if (node.right) {
                return node.right
            } else {
                return null
            }
        }
    }
    return node
}

var deleteNode = function (root, key) {
    if (!root) return root
    return removeNode(root, key)
};