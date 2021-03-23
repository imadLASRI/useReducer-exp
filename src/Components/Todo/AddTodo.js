import React from 'react'
import {ACTIONS} from './Reducer'

const AddTodo = ({ reducer, text, setText }) => {
    const addTodo = (e) => {
		e.preventDefault();
		reducer['dispatch']({ type: ACTIONS.ADDTODO, payload: {id: reducer['todos'].length, text, isComplete: false} });
		setText('');
	}

    return (
        <form onSubmit={addTodo}>
            <label htmlFor="todo">Add a todo to the list</label>
            <input type="text" name="todo" value={ text } onChange={ (e) => setText(e.target.value) }/>
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default AddTodo;
