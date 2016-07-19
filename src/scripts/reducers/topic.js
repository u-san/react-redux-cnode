 import { GET_TOPIC } from '../constants/constants'

let initalState = {loading: true, data: {}};

export function topic(state = initalState, action) {
	switch(action.type) {
		case GET_TOPIC:
			return Object.assign({}, state, action.data);
		default:
			return state;
	}
}