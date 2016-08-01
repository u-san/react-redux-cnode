import React, { Component } from 'react'
import Tips from '../Tips'
import './login.less'

export default class Login extends Component {
	login() {
		let val = this.refs.input.value

		if (/^\s*$/.test(this.refs.input.value)) {
			Tips.info('token不能为空', 1)
			return
		}

		this.props.login(val, this.successCb, this.errorCb)
	}

	successCb(token) {
		Tips.info('登录成功', 1)
		setTimeout(() => {
			window.history.go(-1)
		}, 1000)
	}

	errorCb(err) {
		Tips.info('登录失败,' + err, 1)
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