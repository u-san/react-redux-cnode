
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loading from '../components/Loading'
import TopicContent from '../components/TopicContent'
import ToTop from '../components/ToTop'
import * as actions from '../actions/actions'

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

function mapStateToProps(state) {
  return {
    topic: state.topic,
    user: state.user
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
)(Topic)