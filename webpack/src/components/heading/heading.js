import './heading.css'

class Heading {
    render() {
        const body = document.querySelector("body")
        const p = document.createElement("h1")
        p.innerHTML = "webpack is awesome"
        body.appendChild(p)
    }
}

export default Heading