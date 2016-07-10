 import { GET_TOPIC } from '../constants/constants'

let initalState = {loading: true, data: {}};

export function topic(state = initalState, action) {
	switch(action.type) {
		case GET_TOPIC:
		let obj = Object.assign({}, state, action.data)
		console.log(obj)
			return obj;
		default:
			return state;
	}
}