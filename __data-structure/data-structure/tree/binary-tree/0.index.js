class Node {
    data
    left
    right
    constructor(data, left, right) {
        this.data = data
        this.left = left
        this.right = right
    }
}

function size(node) {
    if (node === null) {
        return 0
    }

    return size(node.left) + size(node.right) + 1
}

function sum(node) {
    if (node === null) {
        return 0
    }

    return sum(node.left) + sum(node.right) + node.data
}

function max(node) {
    if (node === null) {
        return 0
    }

    return Math.max(max(node.left), max(node.right), node.data)
}

function height(node) {
    if (node === null)
        return -1
    /******
     * Keep this in mind, -1 not 0
     * *****/

    return Math.max(height(node.left), height(node.right)) + 1
}


function diameter(root) {
    if (!root)
        return { height: -1, d: 0 }

    const { height: lh, d: ld } = diameter(root.left)
    const { height: rh, d: rd } = diameter(root.right)

    const height = Math.max(lh, rh) + 1
    const dia = Math.max(ld, rd, lh + rh + 2)

    return { height, d: dia }

}

function display(node) {
    if (!node) return;

    let str = "";
    str += node.left === null ? "." : node.left.data + "";
    str += " <- " + node.data + " -> ";
    str += node.right === null ? "." : node.right.data + "";

    console.log(str);

    display(node.left);
    display(node.right);
}


/***
 * R' L R
 * **/
function preOrderTraverse(root) {
    if (!root)
        return

    console.log(root.data);
    preOrderTraverse(root.left)
    preOrderTraverse(root.right)
}

/***
 * L R' R 
 * **/
function inOrderTraverse(root) {
    if (!root)
        return

    inOrderTraverse(root.left)
    console.log(root.data);
    inOrderTraverse(root.right)
}

/***
 * L R R'
 * **/
function postOrderTraverse(root) {
    if (!root)
        return

    postOrderTraverse(root.left)
    postOrderTraverse(root.right)
    console.log(root.data);
}

function levelOrderTraversal(root) {// bfs
    if (!root) return

    const queue = []
    queue.push(root)

    while (queue.length) {
        const top = queue.shift()
        console.log(top.data);
        if (top.left) queue.push(top.left)
        if (top.right) queue.push(top.right)
    }
}

function nodeToRootPath(root, target, path) {
    if (!root) return
    if (root.data === target) {
        path.push(target.data)
        return true
    }

    if (root.left) {
        path.push(root.left.data)
        const isOnLeft = nodeToRootPath(root.left, target, path)
        if (isOnLeft) {
            return true
        } else {
            path.pop()
        }
    }

    if (root.right) {
        path.push(root.right.data)
        const isOnRight = nodeToRootPath(root.right, target, path)
        if (isOnRight) {
            return true
        }
    }

    return false
}


function printKLevel(root, level) {
    if (!root) return

    if (level === 1) {
        console.log(root?.data);
        return
    }

    if (root.left) {
        printKLevel(root.left, level - 1)
    }

    if (root.right) {
        printKLevel(root.right, level - 1)
    }
}

const iterativeTraversal = (root) => {
    const stack = [[root, 1]]

    let pre = ""
    let ino = ""
    let post = ""

    while (stack.length) {
        const [currNode, state] = stack[stack.length - 1]
        if (state == 1) {
            pre += " " + currNode.data
            stack[stack.length - 1][1]++
            if (currNode.left)
                stack.push([currNode.left, 1])
        } else if (state === 2) {
            ino += " " + currNode.data
            stack[stack.length - 1][1]++
            if (currNode.right)
                stack.push([currNode.right, 1])
        } else {
            post += " " + currNode.data
            stack.pop()
        }
    }

    console.log('===pre', pre);
    console.log('===ino', ino);
    console.log('===post', post);
}


/****
 * 
 * 
 * **/

function createBinaryTree(arr = []) {
    // 1 - l
    // 2 - r
    // 3 - pop

    if (arr.length === 0 || arr[0] === null) return null;

    const root = new Node(arr[0]); // Root node
    const stack = [[root, 1]]; // Stack to track nodes and their states
    let idx = 0;

    while (stack.length > 0) {
        const [top, state] = stack[stack.length - 1]; // Peek the stack

        if (state === 1) {
            // Process left child
            stack[stack.length - 1][1] = 2; // Update state to process right child next
            idx++;
            if (idx < arr.length && arr[idx] !== null) {
                top.left = new Node(arr[idx]);
                stack.push([top.left, 1]); // Push left child
            }
        } else if (state === 2) {
            // Process right child
            stack[stack.length - 1][1] = 3; // Mark this node as fully processed
            idx++;
            if (idx < arr.length && arr[idx] !== null) {
                top.right = new Node(arr[idx]);
                stack.push([top.right, 1]); // Push right child
            }
        } else {
            // Both children processed, pop the node
            stack.pop();
        }
    }

    return root;
}

const arr = [10, 20, 50, null, 60, null, null, 30, 70, null, 80, 110, null, 120]

const root = createBinaryTree(arr)

console.log(JSON.stringify(root));

// display(root)
// levelOrderTraversal(root)
// const path = []
// nodeToRootPath(root, 80, path)
// console.log(path);

// printKLevel(root, 3)
// console.log(diameter(root))
// iterativeTraversal(root)

// console.log(size(root))
// console.log(sum(root))
// console.log(max(root))
// console.log(height(root))
// preOrderTraverse(root)
// inOrderTraverse(root)
// postOrderTraverse(root)

module.exports = { createBinaryTree }
