import React, { Component } from 'react'
import Tips from '../Tips'
import './login.less'
export default class Login extends Component {

	login() {
		let val = this.refs.input.value
		
		if (/^\s*$/.test(this.refs.input.value)) {
			Tips.info('token不能为空')
			return
		}

		this.props.login(val, Tips.info)
	}

	render() {
		return (
			<section className="login-wrap">
				<input type="text" placeholder="Accsee Token" ref="input"/>
				<button className="btn-login" onClick={this.login.bind(this)}>登录</button>
			</section>
		)
	}
}