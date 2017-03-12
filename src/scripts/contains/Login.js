import React, { Component } from 'react'
import LoginSection from '../components/Login'

export default class Login extends Component {
	render() {
		return <LoginSection login={this.props.login} />
	}
}
