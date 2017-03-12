import { USER_LOGIN, USER_LOGOUT }from '../constants/constants'
import { APIS } from '../config'
import 'whatwg-fetch'

function fetchLogin(dispatch, token, type, sucCb, errCb) {
	fetch(APIS.LOGIN, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({accesstoken: token})
	})
	.then(res => res.json())
	.then(json => {
		if (json.success) {
			let data = {login: true, data: json}
			dispatch({type: type, data: data})
			localStorage.setItem('token', token)
			if (!sucCb) return
			sucCb(token);
		}
		else {
			if (!errCb) return
			errCb(json.error_msg)
		}
		
	})
	.catch (res => {console.log(res)})
}

export function checkLogin() {
	const token = localStorage.getItem('token')
	if (!token) return {type: USER_LOGOUT}
	return dispatch => {
		let type = USER_LOGIN
		fetchLogin(dispatch, token, type)
	}
}

export function login(token, sucCb, errCb) {
	return dispatch => {
		let type = USER_LOGIN
		fetchLogin(dispatch, token, type, sucCb, errCb)
	}
}

export function logout() {
	localStorage.removeItem('token')
	return { type: USER_LOGOUT}
}