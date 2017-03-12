import { combineReducers } from 'redux'
import { sideBar } from './sideBar'
import { topics } from './topics'
import { topic } from './topic'
import { user } from './user'

const rootReducer = combineReducers({
	sideBar,
	topics,
	topic,
	user
})

export default rootReducer