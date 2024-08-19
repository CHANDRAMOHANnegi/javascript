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

// 1 - l
// 2 - r
// 3 - pop



function display(node) {
    if (!node) return

    let str = node.data + " ----> "
    str += node.left === null ? "." : node.left.data + ""
    str += "<- " + node.data + " ->"
    str += node.right === null ? "." : node.right.data + ""

    console.log(str);

    display(node.left)
    display(node.right)
}

function createBinaryTree(arr = []) {
    const root = new Node(arr[0], null, null)
    const pair = { node: root, state: 1 }

    const stack = []
    stack.push(pair)
    let idx = 0

    while (stack.length > 0) {
        let top = stack[stack.length - 1]

        if (top.state === 1 || top.state == 2) {
            idx++
            if (arr[idx]) {
                if (top.state === 1) {
                    top.node.left = new Node(arr[idx], null, null)
                    stack.push({ node: top.node.left, state: 1 })
                } else {
                    top.node.right = new Node(arr[idx], null, null)
                    stack.push({ node: top.node.right, state: 1 })
                }
            }
            top.state++
        } else {
            stack.pop()
        }
    }
    console.log(root);

    display(root)
    console.log(size(root))
    console.log(sum(root))
    console.log(max(root))
    console.log(height(root))
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

    return Math.max(
        Math.max(
            max(node.left),
            max(node.right)
        ), node.data)
}

function height(node) {
    if (node === null)
        return -1
    /******
     * Keep this in mind, -1 not 0
     * *****/

    return Math.max(height(node.left), height(node.right)) + 1
}

const arr = [10, 20, 50, null, 60, null, null, 30, 70, null, 80, 110, null, 120]

createBinaryTree(arr)
