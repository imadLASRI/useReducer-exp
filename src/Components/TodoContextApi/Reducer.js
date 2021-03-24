export const ACTIONS = {
	ADDTODO: 'add-todo',
	COMPLETE: 'complete-todo'
}

export const reducer = (todos, action) => {
	switch (action.type){
		case ACTIONS.ADDTODO:
			console.log('adding a todo....');
			if(action.payload.text !== '')
				return [ ...todos, action.payload ];
			else
				return todos;
		case ACTIONS.COMPLETE:
			console.log(action.payload.id)
			return todos.map( todo => {
				if(todo.id === action.payload.id){
					return {...todo, complete: !todo.complete}
				}
				return todo;
			})
		default :
			return todos;
	}
}