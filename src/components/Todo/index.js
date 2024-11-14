import React, { useState } from "react";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        console.log(newTodo)
        if (newTodo.trim() !== '') {
            setTodos([
                ...todos,
                {text: newTodo, commpleted: false, id: Date.now()}
            ])
        }

        setNewTodo('')
    }

    const deleteTodo = (id) => {
        console.log(id)
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleCompletion = (id) => {
        setTodos(todos.map( (todo) => 
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        ))
    }

    return (
        <div>
            <h1>Todo</h1>
            <input 
                type = "text"
                value = {newTodo}
                onChange={ (e) => setNewTodo(e.target.value) }
                placeholder="Add a new todo"
            />

            <button onClick={addTodo}>Add</button>
            {console.log(todos)}
            <ul>
                {todos.map(todo => 
                    <li key={todo.id}>
                        <span onClick={() => toggleCompletion(todo.id)}>{todo.text}</span>
                        <button onClick={() => deleteTodo(todo.id)}>Deletes</button>
                    </li>
                )}
            </ul>
        </div>
    )    
}

export default Todo;