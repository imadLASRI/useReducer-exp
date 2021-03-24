import React, { useReducer, useState, createContext } from 'react';
import AddTodo from './Components/TodoContextApi/AddTodo'
import TodoList from './Components/TodoContextApi/TodoList'
import {reducer} from './Components/TodoContextApi/Reducer'

export const todoContext = createContext();

const App = () => {
    const [todos, dispatch] = useReducer(reducer, []);
	const [text, setText] = useState('');
	
	return (
		<todoContext.Provider value={{todos, dispatch, text, setText}}>
			<AddTodo/>
			<TodoList/>
		</todoContext.Provider>
	)
}

export default App;