
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
 * @return {TreeNode}
 */

var invertTree = function (root) {
    if (!root)
        return null
    /****
     * Explicitly return null
     * 
     * this is very important
     * 
     * ***/ 

    const newLeft = invertTree(root.left)
    const newRight = invertTree(root.right)

    root.left = newRight
    root.right = newLeft

    return root
};

/***
 * Returning null is more intentional. undefined can happen when a function doesn’t return anything, 
 * while null is an explicit way to say, “there is no node here.”
 * **/ 