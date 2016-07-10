import { combineReducers } from 'redux'
import { sideBarShow } from './sideBarShow'
import { topics } from './topics'
import { topic } from './topic'
import { user } from './user'

const rootReducer = combineReducers({
	sideBarShow,
	topics,
	topic,
	user
})

export default rootReducer