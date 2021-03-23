import React from 'react'
import { ACTIONS} from './Reducer'

const TodoList = ({ todos, complete }) => {
    return (
        <ul style={{ background: '#efefef' }}>
            { todos.map(todo => {
                return (
                    <li key={todo.id} onClick={() => complete({type: ACTIONS.COMPLETE, payload: {id: todo.id}})}
                        style={{ textDecoration: todo.complete ? 'line-through' : ''}}
                        >
                        { todo.text }
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList;