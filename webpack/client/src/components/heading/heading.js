import './heading.css'

class Heading {
    render(pageName) {
        const body = document.querySelector("body")
        const p = document.createElement("h1")
        p.innerHTML = 'webpack is awesome. This is "' + pageName +' page"'
        body.appendChild(p)
    }
}

export default Heading