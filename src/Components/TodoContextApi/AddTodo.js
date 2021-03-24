import React, { useContext } from 'react'
import {ACTIONS} from './Reducer'
import {todoContext} from '../../App'

const AddTodo = () => {
    const {todos, dispatch, text, setText} = useContext(todoContext);

    const addTodo = (e) => {
		e.preventDefault();
		dispatch({ type: ACTIONS.ADDTODO, payload: {id: todos.length, text, isComplete: false} });
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
