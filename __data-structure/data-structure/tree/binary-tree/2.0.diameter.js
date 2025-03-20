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

var diameterOfBinaryTree = function(root) {
    let diameter = 0
    var maxDepth = function(root) {
        if(root === null) return 0

        const leftL = maxDepth(root.left)
        const rightL = maxDepth(root.right)

        diameter = Math.max(leftL + rightL, diameter) 
        
        return Math.max(leftL,rightL) + 1
    };
    maxDepth(root)
    return  diameter
};


/******
 * diameter can be at any node, not just at root
 * 
 * depth is number of nodes
 * ***/ 