
const todo_form = document.querySelector("form")

const todo_list = document.querySelector('.todo')
const doing_list = document.querySelector('.doing')
const done_list = document.querySelector('.done')

const todo_list_ul = todo_list.querySelector('ul')
const doing_list_ul = doing_list.querySelector('ul')
const done_list_ul = done_list.querySelector('ul')

const todo_data = [
    { label: "todo 1", index: 0, status: "todo", id: Date.now(), }
]

const doing_data = [
    { label: "todo 1", index: 0, status: "doing", id: Date.now(), }
]

const done_data = [
    { label: "todo 1", index: 0, status: "done", id: Date.now(), }
]

const createTodo = (text) => {
    return { label: text, id: Date.now(), status: "todo" }
}

const createItem = (todo) => {
    const li = document.createElement("li")
    
    li.innerHTML = `<span class="title">${todo.label}</span>`
    li.setAttribute("draggable","true")
    li.addEventListener("dragstart",function () {
        li.classList.add("dragging")
    })
    li.addEventListener("dragend",function () {
        li.classList.remove("dragging")
    })

    return li
}

const add_Item = (parent, item) => {
    parent.appendChild(item)
}

function handleClickAddTodo(text) {
    const new_todo = createTodo(text)
    todo_data.push(new_todo)
    const li = createItem(new_todo)
    const ul = todo_list.querySelector("ul")
    add_Item(ul, li)
}

function submitForm(form) {
    const addTodoInput = form.inputbox.value.trim()
    handleClickAddTodo(addTodoInput)
    form.inputbox.value = ""
}