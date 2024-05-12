const root = document.getElementById("root");
const target = document.getElementById("target");

// console.log(root.childNodes)
console.log(root.children)

const generateSelector = function (root, target) {
    let selectors = []
    while (target !== root) {
        const nthChild = Array.from(target.parentNode.children).indexOf(target) + 1
        const selector = `${target.tagName.toLowerCase()}:nth-child(${nthChild})`//

        selectors.unshift(selector)
        target = target.parentNode
    }

    selectors.unshift(`${root.tagName.toLowerCase()}:[id="${target.id}"]`)

    return selectors.join(" > ")
}

console.log(generateSelector(root, target));

// Output:
// "div[id='root'] > section:nth-child(2) > p:nth-child(1) > span:nth-child(1) > button:nth-child(2)"

