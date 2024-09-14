const root = document.getElementById("root");
const target = document.getElementById("target")

// console.log(root.childNodes)
const generateSelector = function (root, target) {

    const selectors = []

    while (true) {
        const parent = target.parentNode
        console.log('=>',parent);
        

        const children = parent.childNodes
        const n = [...children].indexOf(target) + 1

        console.log(children);
        

        selectors.unshift(`${target.tagName.toLowerCase()}:nth-child(${n})`);  // lowercase tag names for CSS selectors
        if (root === target) break
        target = parent

    }

    return selectors.join(" > ")

}

console.log(generateSelector(root, target));

// Output:
// "div[id='root'] > section:nth-child(2) > p:nth-child(1) > span:nth-child(1) > button:nth-child(2)"

