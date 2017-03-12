import { GET_TOPICS, SAVE_SCROLLY } from '../constants/constants'

let initalState = {
	loading: true,
	tab: '',
	scrollY: 0,
	data: []
};

export function topics(state = initalState, action) {
	switch(action.type) {
		case GET_TOPICS:
			return Object.assign({}, state, action.data)
		case SAVE_SCROLLY: 
			return Object.assign({}, state, {scrollY: action.scrollY})
		default:
			return state;
	}
}