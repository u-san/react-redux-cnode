import { GET_TOPIC }from '../constants/constants'
import { APIS } from '../config'
import utils from '../libs/utils'
import 'whatwg-fetch'

const DEFAULT_TOPIC_PARAM = {
	mdrender: true
}

function fetchTopic(dispatch, id, type) {

	let url = utils.createUrl(APIS.TOPIC + '/' + id, DEFAULT_TOPIC_PARAM)

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

export function getTopic(id) {
	return dispatch => {
		let data = {loading: true, data: {}}
		let type = GET_TOPIC
		dispatch({type: type, data: data})
		fetchTopic(dispatch, id, type)
	}
}