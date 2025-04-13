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
    if (!root) return 0
    let max = root.val

    const dfs = (root) => {
        if (!root) return 0

        const leftSum = Math.max(0, dfs(root.left))
        /******
         * why use 0 or value,
         * if some node is returning -ve value then that sum is of no use to us
         * 
         * ***/
        const rightSum = Math.max(0, dfs(root.right))

        max = Math.max(leftSum + rightSum + root.val, max)
        return Math.max(leftSum, rightSum) + root.val
    }
    dfs(root)
    return max
};


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

var maxPathSum2 = function (root) {
    if (!root) return 0
    let max = root.val

    const dfs = (root) => {
        if (!root) return 0

        const leftSum = dfs(root.left)
        const rightSum = dfs(root.right)

        max = Math.max(leftSum + rightSum + root.val, max)
        return Math.max(0, Math.max(leftSum, rightSum) + root.val)

        /****
         * either we return sum or 0
         * no point in returning -ve value
         * ****/
    }
    dfs(root)
    return max
};