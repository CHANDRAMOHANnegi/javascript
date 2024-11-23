/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function (root, p, q) {
    if (root.val > p.val && root.val > q.val) {
        root = root.left
        return lowestCommonAncestor(root, p, q)
    } else if (root.val < p.val && root.val < q.val) {
        root = root.right
        return lowestCommonAncestor(root, p, q)
    } else {
        return root
    }
};


var lowestCommonAncestor2 = function (root, p, q) {
    while (root) {
        if (root.val > p.val && root.val > q.val) {
            root = root.left
        } else if (root.val < p.val && root.val < q.val) {
            root = root.right
        } else {
            return root
        }
    }
};

/******
 * I was not able to do this question
 * 
 * Now, this is super simple
 * 
 * use BST property
 * 
 * if root is greater than both, means both lie on left of root
 * 
 * if root is smaller than both, means both lie on right of root
 * 
 * if one is smaller and other is greater than this is the root
 * 
 * 
 * 
 * what issue was i facing here,  i was doing search_value,
 * i was not using power of bst
 * 
 * *****/ 