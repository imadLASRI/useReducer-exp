import React, { useContext } from 'react'
import { todoContext } from '../../App'
import { ACTIONS} from './Reducer'

const TodoList = () => {
    const {todos, dispatch} = useContext(todoContext);

    return (
        <ul>
            { todos.map(todo => {
                return (
                    <li key={todo.id} onClick={() => dispatch({type: ACTIONS.COMPLETE, payload: {id: todo.id}})}
                        style={{ background: todo.complete ? 'lightgreen' : 'lightgrey', margin: '10px 0'}}
                        >
                        { todo.text }
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList;