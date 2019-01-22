import { combineReducers } from 'redux'
import counter from '../pages/counter/reducers'
import todo from '../pages/todo/reducers'

export default combineReducers({
	counter,
	todo
})