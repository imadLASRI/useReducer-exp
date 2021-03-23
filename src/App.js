import React, { useReducer, useState } from 'react';
import AddTodo from './Components/Todo/AddTodo'
import TodoList from './Components/Todo/TodoList'
import {reducer} from './Components/Todo/Reducer'

const App = () => {
    const [todos, dispatch] = useReducer(reducer, []);
	const [text, setText] = useState('')
	
	return (
		<div>
			<AddTodo text={text} setText={setText} reducer={{todos, dispatch}}  />
			<TodoList todos={ todos } complete={dispatch}/>
		</div>
	)
}

export default App;