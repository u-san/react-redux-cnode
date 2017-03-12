import React, { Component } from 'react'
import Loading from '../components/Loading'
import TopicList from '../components/TopicList'
import ToTop from '../components/ToTop'

export default class Topics extends Component {
	constructor(props) {
		super(props)
		this.scrollHandle = this.scrollHandle.bind(this)
	}

 	componentDidMount() {
 		document.addEventListener('scroll', this.scrollHandle, false)

 		let type = this.props.params.type
 		let tab  = this.props.topics.tab

 		document.body.scrollTop = this.props.topics.scrollY

 		if ( type === tab || (typeof type === 'undefined' && tab === 'all')) return

 		this.props.actions.getTopics({tab: type})
 	}

 	componentWillUnmount() {
 		document.removeEventListener('scroll', this.scrollHandle, false)
 		let scrollTop = document.body.scrollTop
 		this.props.actions.saveScrollY(scrollTop)
 	}

 	scrollHandle() {
 		let scrollTop    = document.body.scrollTop
		let clientHeight = document.body.clientHeight
 		let scrollHeight = document.documentElement.scrollHeight

 		if (scrollTop + clientHeight === scrollHeight) {
 			let type = this.props.params.type || 'all'
 			this.props.actions.getTopics({tab: type, limit: this.props.topics.data.length + 20})
 		}
 	}

	render() {
		return (
			this.props.topics.loading
 			? <Loading />
			: (<div>
					<TopicList {...this.props.topics} />
					<ToTop />
				</div>)
		)
	}
}
