
"use client"

import React, { useRef, useState } from 'react'

type TodoProp = {
    id: number,
    label: string,
    isComplete: boolean
}

const Todo = ({ todo, updateTodo, removeTodo }:
    {
        todo: TodoProp,
        updateTodo: (t: TodoProp) => void,
        removeTodo: (t: number) => void,
    }) => {

    const handleStatus = () => {
        updateTodo({ ...todo, isComplete: !todo.isComplete })
    }

    const handleRemove = () => {
        removeTodo(todo.id)
    }

    return <div className='flex justify-between'>
        <span onClick={handleStatus}>{!todo.isComplete ? "Y" : "N"}</span>
        <div className='mx-2' >
            {todo.isComplete ? <del>{todo.label}</del> : <input type="text" value={todo.label} />}
        </div>
        <span onClick={handleRemove}>X</span>
    </div>
}

export const EditableTodos = () => {

    const [todos, setTodos] = useState<TodoProp[]>([{ id: 1, label: "hello todo", isComplete: false }])

    const inputRef = useRef<HTMLInputElement>(null)

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && inputRef?.current?.value) {
            const inputValue = inputRef?.current?.value
            /****
             * uncontrolled inputs
             * *****/ 
            inputRef.current.value = ""
            setTodos([...todos, { id: Date.now(), label: inputValue, isComplete: false }])
        }
    }

    const updateTodo = (todo: TodoProp) => {
        setTodos(todos.map(td => td.id == todo.id ? { ...todo } : td))
    }

    const removeTodo = (todoId: number) => {
        setTodos(todos.filter(td => td.id != todoId))
    }

    return (
        <div className='flex justify-center flex-col items-center'>
            <div>Todo list</div>
            <input type="text" ref={inputRef} onKeyDown={handleKeyDown} />
            {todos?.map(todo => <Todo key={todo.id} todo={todo} updateTodo={updateTodo} removeTodo={removeTodo} />)}
        </div>
    )
}

export default EditableTodos