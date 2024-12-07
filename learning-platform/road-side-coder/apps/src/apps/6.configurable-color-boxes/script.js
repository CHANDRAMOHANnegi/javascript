const data = [
    { width: "33.33%", color: "red" },
    { width: "33.33%", color: "green" },
    { width: "33.33%", color: "blue" },
    { width: "50%", color: "yellow" },
    { width: "50%", color: "pink" },
    { width: "20%", color: "indigo" },
    { width: "30%", color: "violet" },
    { width: "50%", color: "orange" },
]

window.addEventListener("DOMContentLoaded", function () {

    const container = document.createElement("div")
    container.className = "container"

    const fragment = document.createDocumentFragment()

    data.forEach(({ width, color }) => {
        const item = document.createElement("div")
        item.className = "item"
        item.style.width = width
        item.style.backgroundColor = color
        fragment.appendChild(item)
    })

    container.appendChild(fragment)

    document.body.appendChild(container)

    container.addEventListener("click", function (event) {
        const target = event.target
        if (target.classList.contains("item")) {
            const index = Array.from(container.children).indexOf(target)
            const width = target.style.width
            const color = target.style.backgroundColor
            alert(`${width} ${color} ${index + 1}`)
        }
    })
})