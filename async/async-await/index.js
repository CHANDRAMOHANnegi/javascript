
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todoList => {
        console.log(todoList);
    })
    .then(json => console.log(json))

export { };