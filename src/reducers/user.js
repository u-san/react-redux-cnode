import { USER_LOGIN, USER_LOGOUT } from '../constants/constants'

let initialState = {
	login: false,
	data: {}
}

export function user(state = initialState, action) {
	switch(action.type) {
		case USER_LOGIN:
			return Object.assign({}, state, action.data)
		case USER_LOGOUT:
			return initialState
		default:
			return state
	}
}