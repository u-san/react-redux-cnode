import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loading from '../components/Loading'
import TopicList from '../components/TopicList'
import ToTop from '../components/ToTop'
import * as actions from '../actions/actions'

export default class Topics extends Component {
	constructor(props) {
		super(props)
		this.scrollHandle = this.scrollHandle.bind(this)
	}

 	componentDidMount() {
 		document.addEventListener('scroll', this.scrollHandle, false)

 		let type = this.props.params.type
 		let tab = this.props.topics.tab

 		document.body.scrollTop
 		? document.body.scrollTop = this.props.topics.scrollX
 		: document.documentElement.scrollTop = this.props.topics.scrollX

 		if ( type === tab || (typeof type === 'undefined' && tab === 'all')) return

 		this.props.actions.getTopics({tab: type});
 	}

 	componentWillUnmount() {
 		document.removeEventListener('scroll', this.scrollHandle, false)
 		let scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
 		this.props.actions.saveScrollX(scrollTop)
 	}

 	scrollHandle() {
 		let scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
		let clientHeight = document.body.clientHeight;
 		let scrollHeight = document.documentElement.scrollHeight;

 		if (scrollTop + clientHeight === scrollHeight) {
 			let type = this.props.params.type || 'all'
 			this.props.actions.getTopics({tab: type, limit: this.props.topics.data.length + 20});
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

function mapStateToProps(state) {
  return {
    topics: state.topics
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topics)