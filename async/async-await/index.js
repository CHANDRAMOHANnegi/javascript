
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(todoList => {

//         console.log(todoList);
//         fetch('https://jsonplaceholer.typicode.com/todos/5')
//             .then(d => d.json())
//             .then(data => {
//                 console.log(data);
//             }).catch(err => {
//                 console.log('inner error', err);
//                 // return new Error(err)
//             })

//         // return new Error(err)

//     }).then(res => {
//         console.log('-=--', res);
//     })
//     .catch(err => {
//         console.log('outer error', err);
//     })



async function fetchTodos() {
    try {
        const listRes = await fetch('https://jsonplaceholder.typicode.com/todos')
        const list = await listRes.json()
        console.log(list);

        const todoRes = await fetch('https://jsonplceholder.typicode.com/todos/5')
        const todo = await todoRes.json()

        console.log(todo);
    } catch (error) {
        console.log('error', error);
    }
}


fetchTodos()
