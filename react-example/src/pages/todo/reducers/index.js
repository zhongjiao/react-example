const todo = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: action.id,
					type: action.type,
					text: action.text,
					isShow: true
				}
			]
		case 'TOGGLE_TODO':
			return state.filter(list => {
				list.isShow = !list.isShow
				return list
			})
		case 'FILTER_TODO':
			return state.filter(list => list.id % 2 === 0)
		default:
			return state
	}
}

export default todo