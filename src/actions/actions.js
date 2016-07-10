
import * as Const from '../constants/constants'
import { APIS } from '../config'
import utils from '../libs/utils'
import 'whatwg-fetch'


// Object {
// 	success: true, 
// 	loginname: "u-san", 
// 	avatar_url: "https://avatars.githubusercontent.com/u/16940684?v=3&s=120", 
// 	id: "577e1a2d49e4faa95429c560"}

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
console.log(url)
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

function fetchLogin(dispatch, accesstoken, type, info) {
	fetch(APIS.LOGIN, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ accesstoken: accesstoken})
	})
	.then(res => res.json())
	.then(json => {
		console.log(json)
		if (json.success) {
			info('登录成功')
			let data = {login: true, data: json}
			dispatch({type: type, data: data})	
		}
		else {
			info(json.error_msg)
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

export function login(accesstoken, info) {
	return dispatch => {
		let type = Const.USER_LOGIN
		fetchLogin(dispatch, accesstoken, type, info)
	}
}

export function showSideBar() {
	return { type: Const.SHOW_SIDEBAR }
}

export function hideSideBar() {
	return { type: Const.HIDE_SIDEBAR }
}