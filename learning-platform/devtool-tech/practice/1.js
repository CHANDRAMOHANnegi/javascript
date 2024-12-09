/**
 * Read FAQs section on the left for more information on how to use the editor
**/
/**
* Keep the name as `VDocument` only
**/

// write your solution below
const INDENT = 4

const getSpace = (indent) => {
  return " ".repeat(indent)
}

class Node {
  constructor(tagName) {
    this.tagName = tagName
    this.children = []
    this.innerHTML = ""
  }

  appendChild(content) {
    this.children.push(content)
  }

}

class VDocument {
  constructor() {
    this.root = this.createElement("html")
  }

  createElement(tagName) {
    const node = new Node(tagName)
    return node
  }

  appendChild(content) {
    this.root.children.push(content)
  }

  render() {
    const renderNode = (node, str, level) => {
      const tagName = node.tagName
      const openTag = `<${tagName}>`
      const closeTag = `</${tagName}>`

      const indent = getSpace(INDENT * level)

      let output = ""

      output += `${indent}${openTag}\n`;

      if (node.innerHTML) {
        output += `${indent}${getSpace(INDENT)}${node.innerHTML}\n`
      }

      if (node.children?.length) {
        output += node.children.map((child) => renderNode(child, str, level + 1))
      }

      return output + `${indent}${closeTag}\n`;
    }

    const dom = renderNode(this.root, "", 0)
    return dom
  }

}

const vDocument = new VDocument();
const body = vDocument.createElement("body");
const div = vDocument.createElement("div");
const div1 = vDocument.createElement("div");
const div2 = vDocument.createElement("div");

div.innerHTML = "Hello, I am a div!";
div1.innerHTML = "Hello, I am a div 1!";
div2.innerHTML = "Hello, I am a div 2!";

div.appendChild(div1)
div1.appendChild(div2)
body.appendChild(div);
vDocument.appendChild(body);

// proper html structure 
const html = vDocument.render();

console.log(html)