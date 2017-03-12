
import React, { Component } from 'react'
import { connect } from 'react-redux';
import Loading from '../components/Loading'
import TopicContent from '../components/TopicContent'
import ToTop from '../components/ToTop'

export default class Topic extends Component {
 	componentDidMount() {
 		this.props.actions.getTopic(this.props.params.id)
 	}

	render() {
		return (
			this.props.topic.loading
			? <Loading />
			: (<div>
          <TopicContent {...this.props.topic.data}  user={this.props.user}/>
          <ToTop />
        </div>)
		)
	}
}
