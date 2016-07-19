import React, { Component } from 'react'
import './mask.less'

export default class Mask extends Component {
	render() {
		return (
			<div className={`mask ${this.props.sideBarShow ? 'show' : ''}`} onClick={this.props.hideSideBar}></div>
		)
	}
}