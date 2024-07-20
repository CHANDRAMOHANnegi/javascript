// const findByClass = function (className) {
//     const nodes = []
//     const root = document.body

//     function search(node) {
//         if ([...node.classList].includes(className)) {
//             nodes.push(node)
//         }
//         for (const child of node.children) {
//             search(child)
//         }
//     }

//     search(root)
//     return nodes
// }

// console.log('=-=-=-', findByClass('a'));


const getByClassNameHierarchy = function (classPath) {
    const classes = classPath.split(">")

    const nodes = []
    const root = document.body

    function search(node, i) {
        if (!node)
            return
        if (classes.length - 1 === i && [...node.classList].includes(classes[i])) {
            nodes.push(node)
        }

        /***
         * 
         * 
         * 
         * **/

        if ([...node.classList].includes(classes[i])) {
            for (const child of node.children) {
                search(child, i + 1)
            }
        } else {
            for (const child of node.children) {
                search(child, 0)
            }
        }

        // for (const child of node.children) {
        //     if ([...node.classList].includes(classes[i])) {
        //         search(child, i + 1)
        //     } else {
        //         search(child, 0)
        //     }
        // }

    }
    search(root, 0)
    return nodes
};

// console.log(getByClassNameHierarchy("a>b>c"));


const findElementByColor = (root, color) => {
    // ... your code goes here
}


console.log(findElementByColor(document.getElementById('root'), 'white'));