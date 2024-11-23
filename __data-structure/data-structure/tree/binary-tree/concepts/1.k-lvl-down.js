const { createBinaryTree } = require("../0.index");

function printKLevelDown(node, k) {
    if (!node || k < 0) return

    if (k === 0) {
        console.log(node.data);
    }

    printKLevelDown(node.left, k - 1)
    printKLevelDown(node.right, k - 1)
}


const arr = [10, 20, 50, null, 60, null, null, 30, 70, null, 80, 110, null, 120]

const root = createBinaryTree(arr)

// printKLevelDown(root, 0)
// printKLevelDown(root, 1)
// printKLevelDown(root, 2)
printKLevelDown(root, 3)