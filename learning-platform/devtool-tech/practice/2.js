/**
 * Read FAQs section on the left for more information on how to use the editor
**/
// DO CHANGE FUNCTION NAME

function getElementsByClassName(search, root) {
  if (!root) {
    root = this
  }
  const childNodes = this.children
  const nodes = []
  if (root.classList?.includes(search)) {
    nodes.push(root)
  }

  childNodes.forEach(node => {
    if (node) {
      nodes.push(getElementsByClassName(search, node))
    }
  })

  return nodes
}
