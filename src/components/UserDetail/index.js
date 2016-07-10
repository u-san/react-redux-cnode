import React, { Component } from 'react'
import './UserDetail.less'

export default class UserDetail extends Component {
	render() {
		return (
			<section className="user-detail">
				<div>TODO</div>
				<div>{this.props.params.username}</div>
			</section>
		)
	}
}