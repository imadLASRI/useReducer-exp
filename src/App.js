import React, { useReducer, useState } from 'react';
import AddTodo from './Components/Todo/AddTodo'
import TodoList from './Components/Todo/TodoList'

export const ACTIONS = {
	ADDTODO: 'add-todo',
	COMPLETE: 'complete-todo'
}

const reducer = (todos, action) => {
	switch (action.type){
		case ACTIONS.ADDTODO:
			console.log('adding a todo....');
			if(action.payload.text !== '')
				return [ ...todos, action.payload ];
			else
				return todos;
		case ACTIONS.COMPLETE:
			console.log(action.payload)
			return todos.map( todo => {
				if(todo.id === action.payload){
					return {...todo, complete: !todo.complete}
				}
				return todo;
			})
		default :
			return todos;
	}
}

const App = () => {
    const [todos, dispatch] = useReducer(reducer, []);
	const [text, setText] = useState('')

	const addTodo = (e) => {
		e.preventDefault();
		dispatch({ type: ACTIONS.ADDTODO, payload: {id: todos.length, text, isComplete: false} });
		setText('');
	}
	
	return (
		<div>
			<AddTodo text={text} setText={setText} addTodo={ (e) => addTodo(e) }  />
			<TodoList todos={ todos } complete={dispatch}/>
		</div>
	)
}

export default App;