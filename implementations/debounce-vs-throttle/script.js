const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")

input.addEventListener("input", e => {
    defaultText.textContent = e.target.value
})
