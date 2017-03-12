import { GET_TOPICS, SAVE_SCROLLY }from '../constants/constants'
import { APIS } from '../config'
import utils from '../libs/utils'
import 'whatwg-fetch'

const DEFAULT_TOPICS_PARAM = {
	page: 1,
	tab: 'all',
	limit: 20,
	mdrender: false
}

function fetchTopics(dispatch, param, type) {

	if (typeof param.tab === 'undefined') param.tab = 'all'

	param = Object.assign({}, DEFAULT_TOPICS_PARAM, param)
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

export function getTopics(param = {}) {
	return dispatch => {
		let type = GET_TOPICS
		fetchTopics(dispatch, param, type)
	}
}

export function saveScrollY(y) {
	return { type: SAVE_SCROLLY, scrollY: y }
}


