import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginSection from '../components/Login'
import * as actions from '../actions/actions'

export default class Login extends Component {
	render() {
		console.log(this.props)
		return <LoginSection login={this.props.login} />
	}
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(actions.login, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)