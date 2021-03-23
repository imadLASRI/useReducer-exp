import React, {useReducer} from 'react'

const initialState = { counter : 0 };
const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

const reducer = (state, action) => {
    switch (action.type){
        case ACTIONS.INCREMENT:
            return { counter : state.counter + 1};
        case ACTIONS.DECREMENT:
            return { counter : state.counter - 1};
        default:
            return state;
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <button onClick={() => dispatch({ type: ACTIONS.DECREMENT})}>-</button>
            <span>{ state.counter }</span>
            <button onClick={() => dispatch({ type: ACTIONS.INCREMENT})}>+</button>
        </div>
    )
}
