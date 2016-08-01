
import * as Const from '../constants/constants'
import { APIS } from '../config'
import utils from '../libs/utils'
import 'whatwg-fetch'

const defaultTopicsParam = {
	page: 1,
	tab: 'all',
	limit: 20,
	mdrender: false
}

const defaultTopicParam = {
	mdrender: true
}

function fetchTopics(dispatch, param, type) {

	if (typeof param.tab === 'undefined') param.tab = 'all'

	param = Object.assign({}, defaultTopicsParam, param)
	let url = utils.createUrl(APIS.LIST, param)

	fetch(url, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
	.then(res => res.json())
	.then(json => {
	    let data = {loading: false, tab: param.tab ,data: json.data}
	    dispatch({type: type, data: data})
	})
	.catch(res => {console.log(res)})
}

function fetchTopic(dispatch, id, type) {

	let url = utils.createUrl(APIS.TOPIC + '/' + id, defaultTopicParam)

	fetch(url, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
	.then(res => res.json())
	.then(json => {
		let data = {loading: false, data: json.data}
	    dispatch({type: type, data: data})
	})
	.catch(res => {console.log(res)})
}

function fetchLogin(dispatch, token, type, sucCb, errCb) {
	fetch(APIS.LOGIN, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ accesstoken: token})
	})
	.then(res => res.json())
	.then(json => {
		console.log(json)
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

export function getTopics(param = {}) {
	return dispatch => {
		let type = Const.GET_TOPICS
		fetchTopics(dispatch, param, type)
	}
}

export function getTopic(id) {
	return dispatch => {
		let data = {loading: true, data: {}}
		let type = Const.GET_TOPIC

		dispatch({type: type, data: data})
		fetchTopic(dispatch, id, type)
	}
}

export function saveScrollX(x) {
	return { type: Const.SAVE_SCROLLX, scrollX: x }
}

export function login(token, sucCb, errCb) {
	return dispatch => {
		let type = Const.USER_LOGIN
		fetchLogin(dispatch, token, type, sucCb, errCb)
	}
}

export function checkLogin() {
	const token = localStorage.getItem('token')
	if (!token) return { type: Const.USER_LOGOUT}
	return dispatch => {
		let type = Const.USER_LOGIN
		fetchLogin(dispatch, token, type)
	}
}

export function logout() {
	localStorage.removeItem('token')
	return { type: Const.USER_LOGOUT}
}

export function showSideBar() {
	return { type: Const.SHOW_SIDEBAR }
}

export function hideSideBar() {
	return { type: Const.HIDE_SIDEBAR }
}