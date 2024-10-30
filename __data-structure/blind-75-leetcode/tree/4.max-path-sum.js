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
 * @return {number}
 */

var maxPathSum = function (root) {
    let max = -Infinity
    const getMaxSum = (root) => {
        if (root == null)
            return 0

        const leftSum = Math.max(0, getMaxSum(root.left))
        const rightSum = Math.max(0, getMaxSum(root.right))
        max = Math.max(max, leftSum + rightSum + root.val)
        return root.val + Math.max(leftSum, rightSum)
    }
    getMaxSum(root)
    return max
};

/********
 * 
 * DO it again
 * 
 * WRONG
 * 
 * ******/ 