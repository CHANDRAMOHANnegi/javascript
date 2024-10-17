// https://leetcode.com/problems/validate-binary-search-tree/description/

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
 * @return {boolean}
 */
var isValidBST = function (root) {
    return isValid(root).valid
};


function isValid(root) {
    if (!root) {
        return { valid: true, min: Infinity, max: -Infinity }
    }

    const { valid: isLeftValid, min: leftMin, max: leftMax } = isValid(root.left)
    const { valid: isRightValid, min: rightMin, max: rightMax } = isValid(root.right)

    if (isLeftValid && isRightValid && leftMax < root.val && rightMin > root.val) {
        return { valid: true, min: Math.min(root.val, leftMin), max: Math.max(root.val, rightMax) }
    }
    return { valid: false }
}