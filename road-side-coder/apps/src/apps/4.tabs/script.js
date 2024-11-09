
// https://dev.to/vivek96_/efficient-dom-manipulation-with-documentcreatedocumentfragment-54i6
const data = [
    { id: 1, content: "1Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.", label: "tab 1" },
    { id: 2, content: "2Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.", label: "tab 2" },
    { id: 3, content: "3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.", label: "tab 3" },
]

document.addEventListener("DOMContentLoaded", function () {
    const ul = document.querySelector("UL")

    function createAccordion(item) {
        const li = document.createElement("li")
        const fragment = document.createDocumentFragment()

        const titleElement = document.createElement("div")
        titleElement.innerText = item.label
        titleElement.classList.add("title")

        const contentElement = document.createElement("p")
        contentElement.innerText = item.content
        contentElement.classList.add("content", "hidden")

        fragment.appendChild(titleElement)
        fragment.appendChild(contentElement)

        li.appendChild(fragment)

        ul.appendChild(li)
    }

    ul.addEventListener("click", function (event) {
        /****
         * classList contains, not includes
         * ***/ 
        if (event.target.classList.contains("title")) {
        /****
         * closest parent element
         * 
         * 
         * ***/ 
            const targetLi = event.target.closest("li");
            targetLi.children[1].classList.toggle("hidden");

            [...(ul.children)].forEach(li => {
                if (li !== targetLi) {
                    li.children[1].classList.add("hidden")
                }
            })
        }
    })

    data.map(createAccordion)
    ul.children[0].children[1].classList.remove("hidden")
})