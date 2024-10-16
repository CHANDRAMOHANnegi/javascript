class Node {
    data
    constructor() {
        this.children = []
    }
}

function display(node) {
    let str = node.data + " ----> "

    node.children.forEach(child => str += child.data + ", ")

    str += " . "
    console.log(str);

    node.children.forEach(display)
}

function size(node) {
    let s = 1
    node.children.forEach(child => {
        s += size(child)
    })
    return s
}

function max(node, m) {
    m = Math.max(m, node.data)
    node.children.forEach(child => {
        m = Math.max(m, max(child, m))
    })
    return m
}

function height(node) {
    let h = -1
    node.children.forEach(child => {
        h = Math.max(h, height(child))
    })
    return h + 1
}

function preOrderTraverse(root) {
    if (!root)
        return

    console.log(root.data);
    preOrderTraverse(root)

}

function inOrderTraverse(root) {
    inOrderTraverse(root)
}

function postOrderTraverse(root) {
    postOrderTraverse(root)
}

function traverse(root) {
    preOrderTraverse(root)
    // inOrderTraverse(root)
    // postOrderTraverse(root)
}


function main() {
    const arr = [10, 20, 50, null, 60, null, null, 30, 70, null, 80, 110, null, 120]
    let root = null
    const stack = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === null) {
            stack.pop()
        } else {
            const t = new Node()
            t.data = arr[i]

            if (stack.length > 0) {
                stack[stack.length - 1].children.push(t)
            } else {
                root = t
            }
            stack.push(t)
        }
    }
    display(root)
    traverse(root)
    console.log(size(root))
    console.log(max(root, 0))
    console.log(height(root))
}

main()
