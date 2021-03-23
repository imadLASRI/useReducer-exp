import React from 'react'


const AddTodo = ({ addTodo, text, setText }) => {

    return (
        <form onSubmit={addTodo}>
            <label htmlFor="todo">Add a todo to the list</label>
            <input type="text" name="todo" value={ text } onChange={ (e) => setText(e.target.value) }/>
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default AddTodo;
