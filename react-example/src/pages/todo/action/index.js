let listId = 0;

export const addToDo = (text) => ({
	id: listId++,
	type: 'ADD_TODO',
	text
})

export const VisibilityFilters = {
  TOGGLE_TODO: 'TOGGLE_TODO',
	FILTER_TODO: 'FILTER_TODO'
}

export const setVisibilityFilter = type => ({
	type
})