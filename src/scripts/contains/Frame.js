import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Mask from '../components/Mask'
import actions from '../actions'

export default class Frame extends Component {
	componentWillMount() {

		this.props.actions.checkLogin()
		this.hideSideBar = this.hideSideBar.bind(this)
	}

	hideSideBar(e) {
		this.props.actions.hideSideBar();
	}

	render() {
		const pathname = this.props.location.pathname.split('/')[1]

		return (
			<div>
				<Header type={pathname} sideBar={this.props.sideBar} {...this.props.actions} />
				<SideBar type={this.props.params.type} {...this.props} />
				<Mask sideBar={this.props.sideBar} hideSideBar={this.hideSideBar} />
        		{React.cloneElement(this.props.children || <div />, { key: this.props.params.type || 'root', ...this.props})}
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    sideBar: state.sideBar,
    user: state.user,
    topic: state.topic,
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
)(Frame)

