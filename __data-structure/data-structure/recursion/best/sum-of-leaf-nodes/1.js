const helper = (root) => {
    if (!root) return 0; // Base case: if the node is null, return 0

    let sum = 0;

    // Check if the left child is a leaf node
    if (root.left && !root.left.left && !root.left.right) {
        sum += root.left.val; // Add the value of the left leaf node
    }

    // Recurse on left and right children
    sum += helper(root.left);
    sum += helper(root.right);

    return sum;
}

var sumOfLeftLeaves = function (root) {
    return helper(root);
};
