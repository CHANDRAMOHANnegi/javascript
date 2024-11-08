
document.addEventListener("DOMContentLoaded", function () {

    const todoInput = document.querySelector("input")
    const addButton = document.querySelector("button")
    const todoList = document.querySelector("ul")

    let editMode = false
    let editElement = null

    addButton.addEventListener("click", addTodo)

    function addItem(todo) {
        const li = document.createElement("li")
        const editButton = document.createElement("button")
        const removeButton = document.createElement("button")
        li.innerHTML = `<span>${todo}</span>`

        editButton.innerText = "edit"
        removeButton.innerText = "X"

        li.appendChild(editButton)
        li.appendChild(removeButton)

        todoList.appendChild(li)
        todoInput.value = ""
    }

    function addTodo(e) {
        e.preventDefault()
        const inputValue = todoInput.value
        if (inputValue !== "") {
            if (!editMode) {
                addItem(inputValue)
            } else {
                editElement.firstChild.textContent = inputValue
                addButton.innerText = "Add Todo"
                todoInput.value = ""
                editMode = false
                editElement = null
            }
        } else {
            alert("Enter valid task")
        }
    }

    todoList.addEventListener("click", function (event) {
        const target = event.target
        /**
         * tagName
         * */ 
        if (target.tagName === "BUTTON") {
            /**
             * parentNode
             * **/ 
            const todoItem = target.parentNode
            if (target.innerText === "edit") {
                editMode = true
                editElement = todoItem
                /***
                 * beware
                 * firstChild, to access first child, it can give text, commentNodes
                 * 
                 * we can use firstElementChild
                 * ***/ 
                todoInput.value = todoItem.firstChild.textContent
                addButton.innerText = "Edit todo"
                /***
                 * to focus element on dom
                 * **/
                todoInput.focus()
            } else if (target.innerText === "X") {
                /***
                 * remove function, to remove element from dom
                 * **/
                todoItem.remove()
            }
        }
    })
})