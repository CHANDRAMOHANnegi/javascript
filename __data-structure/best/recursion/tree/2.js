const helper = (root, sum) => {
    if (root.left)
        helper(root.left, sum)
    if (root.right)
        helper(root.right, sum)

    if (root.left && !root.left.left && !root.left.right)
        sum[0] += root.left.val
}

var sumOfLeftLeaves = function (root) {
    const sum = [0]
    helper(root, sum)
    return sum[0]
};