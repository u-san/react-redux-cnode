import { GET_TOPICS, SAVE_SCROLLX } from '../constants/constants'

let initalState = {
	loading: true,
	tab: '',
	scrollX: 0,
	data: []
};

export function topics(state = initalState, action) {
	switch(action.type) {
		case GET_TOPICS:
			return Object.assign({}, state, action.data)
		case SAVE_SCROLLX: 
			return Object.assign({}, state, {scrollX: action.scrollX})
		default:
			return state;
	}
}