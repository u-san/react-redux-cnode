import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Mask from '../components/Mask'
import * as actions from '../actions/actions'

export default class Nav extends Component {
	componentWillMount() {
		this.props.actions.checkLogin()
		this.hideSideBar = this.hideSideBar.bind(this)
	}

	hideSideBar(e) {
		this.props.actions.hideSideBar();
		// e.stopPropagation();
		console.log(e.isPropagationStopped())
	}

	render() {
		const pathname = this.props.location.pathname.split('/')[1]

		return (
			<div>
				<Header type={pathname} sideBarShow={this.props.sideBarShow} {...this.props.actions} />
				<SideBar type={this.props.params.type} {...this.props} />
				<Mask sideBarShow={this.props.sideBarShow} hideSideBar={this.hideSideBar} />
        		{React.cloneElement(this.props.children || <div />, { key: this.props.params.type || 'root'})}
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    sideBarShow: state.sideBarShow,
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
)(Nav)

