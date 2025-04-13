import { getSuggestionList } from "./data.js";
// getSuggestionList("ba").then(console.log)

const input = document.querySelector("input")
const listSection = document.querySelector("section")

let text = ""
let options = []
let currentOption = -1
let abortController

const resetState = () => {
    listSection.classList.add("hidden")
    options = []
    currentOption = -1
}

const handleInputChange = async (e) => {
    text = e.target.value.trim()
    if (abortController) {
        // console.log('======', text);
        abortController.abort()
    }
    abortController = new AbortController()

    try {
        const values = await searchValue(text, { signal: abortController.signal })
        console.log(values);
        if (text && values.length) {
            createListOptions(values)
            options = values
        } else {
            resetState()
        }
    } catch (error) {
        console.log(error);
    }

}

const searchValue = (...args) => {
    return getSuggestionList(...args)
}

const createListOptions = (options) => {
    const fragment = document.createDocumentFragment()
    options.forEach(option => {
        const li = document.createElement("li")
        li.innerHTML = option
        li.setAttribute("data-key", option)
        fragment.appendChild(li)
    })
    const ul = document.createElement("ul")
    ul.appendChild(fragment)
    listSection.innerHTML = ""
    listSection.appendChild(ul)
    listSection.classList.remove("hidden")
}

const setTextInputValue = (text = "") => {
    input.value = text
}

const updateClicked = (text) => {
    setTextInputValue(text)
    resetState()
}

const handleListClick = (ev) => {
    const target = ev.target
    // const clickedLi = target.closest("li")
    // const option = clickedLi.innerHTML
    // setTextInputValue(option)

    const { key } = target.dataset
    if (key) {
        updateClicked(key)
    }
}

const keys = [38, 39, 40]

const navKeys = (val) => {
    return {
        38: -1,
        40: 1
    }
}

const handleKeyDown = (event) => {
    const { keyCode } = event
    if (options.length) {
        if (keys.includes(keyCode)) {
            const ul = listSection.firstChild
            if (currentOption >= 0) {
                const prevChild = ul.childNodes[currentOption]
                prevChild.classList.remove("highlight")
            }

            currentOption += navKeys(currentOption)[keyCode]
            console.log(currentOption);
            if (currentOption < 0) {
                input.focus()
                return
            } else if (currentOption >= options.length) {
                currentOption = 0
            }

            const currentChild = ul.childNodes[currentOption]
            currentChild.classList.add("highlight")
        } else if (keyCode === 13) {
            updateClicked(options[currentOption])
        }
    }
}


function init() {
    input.addEventListener("input", deBounce(handleInputChange))
    listSection.addEventListener("click", handleListClick)
    // do not use change
    input.addEventListener("keydown", handleKeyDown)
}

init()


function deBounce(fn, delay = 500) {
    let timer = null
    const context = this
    const inner = function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay)
    }
    return inner
}