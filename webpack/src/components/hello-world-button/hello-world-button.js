import './hello-world-button.scss'

class HelloWorldButton {
    buttonCssClass = "hello-world-button"
    render() {
        console.log('Hello world');
        const body = document.querySelector("body")
        const button = document.createElement("button")
        button.innerHTML = "Hello world"
        button.onclick = function () {
            const p = document.createElement("p")
            p.innerHTML = "Hello world"
            p.classList.add('hello-world-text')
            body.appendChild(p)
        }
        button.classList.add(this.buttonCssClass)
        body.appendChild(button)
    }
}

export default HelloWorldButton