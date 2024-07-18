import './hello-world-button.scss'

class HelloWorldButton {

    render(){
        console.log('Hello world');
        const button = document.createElement("button")
        button.innerHTML = " Hello world"
        button.classList.add('hello-world-button')

        button.onclick = function () {
            const p = document.createElement("p")
            p.innerHTML = "Hello world"
            p.classList.add('hello-world-text')
            body.appendChild(p)
        }
        const body = document.querySelector("body")
        body.appendChild(button)
    }
}

export default HelloWorldButton